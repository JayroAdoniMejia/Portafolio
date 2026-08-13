"use client";

import React, { useEffect, useMemo, useRef, useState, memo } from 'react';
import './LogoLoop.css';

interface LogoItem {
  node?: React.ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: string | number;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  className?: string;
}

const ANIMATION_CONFIG = { SMOOTH_TAU: 0.25, MIN_COPIES: 2, COPY_HEADROOM: 2 };

export const LogoLoop: React.FC<LogoLoopProps> = memo(({
  logos,
  speed = 60,
  direction = 'up',
  width = '100%',
  logoHeight = 28,
  gap = 32,
  pauseOnHover = true,
  hoverSpeed,
  fadeOut = true,
  fadeOutColor = '#09090b',
  scaleOnHover = true,
  className
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const seqRef = useRef<HTMLUListElement>(null);
  const [seqHeight, setSeqHeight] = useState(0);
  const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState(false);

  // Ref espejo de isHovered: permite que el loop de animación lea el valor
  // más reciente sin tener que estar en el array de dependencias del
  // useEffect, evitando que rAF se cancele/reinicie en cada hover.
  const isHoveredRef = useRef(false);
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  const isVertical = direction === 'up' || direction === 'down';

  const targetVelocity = useMemo(() => {
    const magnitude = Math.abs(speed);
    const directionMultiplier = direction === 'up' ? 1 : -1;
    return magnitude * directionMultiplier;
  }, [speed, direction]);

  useEffect(() => {
    const sequenceHeight = seqRef.current?.getBoundingClientRect?.()?.height ?? 0;
    if (sequenceHeight > 0) {
      setSeqHeight(Math.ceil(sequenceHeight));
      const parentHeight = containerRef.current?.parentElement?.clientHeight ?? 300;
      const copiesNeeded = Math.ceil(parentHeight / sequenceHeight) + ANIMATION_CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
    }
  }, [logos, gap, logoHeight]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || seqHeight === 0) return;

    let rafId: number;
    let lastTime: number | null = null;
    let offset = 0;
    let currentVel = 0;

    const animate = (timestamp: number) => {
      if (lastTime === null) lastTime = timestamp;
      const deltaTime = Math.max(0, timestamp - lastTime) / 1000;
      lastTime = timestamp;

      const target = isHoveredRef.current ? (hoverSpeed ?? 0) : targetVelocity;
      const easing = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      currentVel += (target - currentVel) * easing;

      offset = ((offset + currentVel * deltaTime) % seqHeight + seqHeight) % seqHeight;
      track.style.transform = `translate3d(0, ${-offset}px, 0)`;

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
    // isHovered NO va aquí a propósito: se lee vía isHoveredRef para que
    // el loop de rAF nunca se destruya/reinicie al entrar o salir del hover.
  }, [seqHeight, hoverSpeed, targetVelocity]);

  return (
    <div
      ref={containerRef}
      className={`logoloop logoloop--vertical ${fadeOut ? 'logoloop--fade' : ''} ${scaleOnHover ? 'logoloop--scale-hover' : ''} ${className || ''}`}
      style={{
        height: '100%',
        '--logoloop-gap': `${gap}px`,
        '--logoloop-logoHeight': `${logoHeight}px`,
        '--logoloop-fadeColor': fadeOutColor
      } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="logoloop__track" ref={trackRef}>
        {Array.from({ length: copyCount }).map((_, cIdx) => (
          <ul
            key={cIdx}
            className="logoloop__list"
            ref={cIdx === 0 ? seqRef : undefined}
          >
            {logos.map((item, iIdx) => (
              <li key={`${cIdx}-${iIdx}`} className="logoloop__item" title={item.title}>
                <span className="logoloop__node">{item.node}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
});

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;