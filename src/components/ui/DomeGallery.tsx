"use client";

import React, { useRef, useState, useMemo } from "react";
import { useGesture } from "@use-gesture/react";

interface DomeGalleryProps {
  images?: string[];
  radius?: number;
}

const DEFAULT_IMAGES = [
  "/certificates/ccna-itn.jpg",
  "/certificates/python-essentials.jpg",
  "/certificates/data-analytics.jpg",
  "/certificates/php-developer.jpg",
  "/certificates/db-admin.jpg",
  "/certificates/infop-1.jpg",
  "/certificates/infop-2.jpg",
  "/certificates/infop-3.jpg",
  "/certificates/infop-4.jpg",
  "/certificates/folio-cert.jpg",
];

export default function DomeGallery({ images = DEFAULT_IMAGES, radius = 360 }: DomeGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const isDraggingRef = useRef(false);

  // Mapeo en cuadrícula esférica (filas y columnas en el domo)
  const items = useMemo(() => {
    const totalItems = 42; // más denso para que no queden huecos visibles
    const rows = 6;
    const cols = 7;

    const result = [];
    for (let i = 0; i < totalItems; i++) {
      const row = Math.floor(i / cols);
      const col = i % cols;

      // Ángulos para latitud (lat) y longitud (lon)
      const lat = ((row - (rows - 1) / 2) * 20 * Math.PI) / 180;
      const lon = ((col - (cols - 1) / 2) * 26 * Math.PI) / 180;

      const x = radius * Math.cos(lat) * Math.sin(lon);
      const y = -radius * Math.sin(lat);
      const z = radius * Math.cos(lat) * Math.cos(lon);

      const rotateY = (lon * 180) / Math.PI;
      const rotateX = (-lat * 180) / Math.PI;

      const imageSrc = images[i % images.length];

      result.push({
        id: i,
        src: imageSrc,
        transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
      });
    }
    return result;
  }, [images, radius]);

  const bind = useGesture({
    onDragStart: () => {
      isDraggingRef.current = false;
    },
    onDrag: ({ delta: [dx, dy], movement: [mx, my] }) => {
      // Solo se considera "arrastre" si el movimiento supera un pequeño umbral.
      if (Math.abs(mx) > 6 || Math.abs(my) > 6) {
        isDraggingRef.current = true;
      }
      setRotation((prev) => ({
        x: Math.max(-50, Math.min(50, prev.x - dy * 0.2)),
        y: prev.y + dx * 0.2,
      }));
    },
  });

  const handleSelect = (src: string) => {
    if (!isDraggingRef.current) {
      setSelectedImage(src);
    }
  };

  return (
    <div className="relative w-full h-112.5 sm:h-155 rounded-2xl bg-black overflow-hidden flex items-center justify-center select-none">
      {/* Viñeta radial: oscurece los bordes para dar sensación de domo saliendo de la oscuridad */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.65) 75%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      {/* Canvas 3D */}
      <div
        ref={containerRef}
        {...bind()}
        className={`relative w-full h-full flex items-center justify-center touch-none transition-all duration-500 ${
          selectedImage
            ? "blur-md brightness-[0.35] scale-105 pointer-events-none"
            : "cursor-grab active:cursor-grabbing"
        }`}
        style={{ perspective: "900px" }}
      >
        <div
          className="relative w-0 h-0 transition-transform duration-75 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelect(item.src)}
              className="absolute w-28 h-20 sm:w-40 sm:h-28 -ml-14 -mt-10 sm:-ml-20 sm:-mt-14 rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/60 shadow-2xl cursor-pointer group"
              style={{
                transform: item.transform,
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src={item.src}
                alt="Certificado"
                className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Imagen seleccionada: aparece a color y nítida sobre el domo difuminado */}
      {selectedImage && (
        <div
          className="absolute inset-0 z-30 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Certificado seleccionado"
            className="w-auto h-auto max-w-[92%] sm:max-w-xl max-h-[88%] object-contain rounded-xl sm:rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-300 cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}