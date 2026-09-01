import DomeGallery from "@/components/ui/DomeGallery";

// Detecta si está en producción para agregar el subpath /Portafolio
const basePath = process.env.NODE_ENV === 'production' ? '/Portafolio' : '';

// Arreglo con la ruta dinámica aplicada
const CERTIFICATE_IMAGES = [
  `${basePath}/certificates/ccna-itn.jpg`,
  `${basePath}/certificates/python-essentials.jpg`,
  `${basePath}/certificates/data-analytics.jpg`,
  `${basePath}/certificates/php-developer.jpg`,
  `${basePath}/certificates/db-admin.jpg`,
  `${basePath}/certificates/infop-1.jpg`,
  `${basePath}/certificates/infop-2.jpg`,
  `${basePath}/certificates/infop-3.jpg`,
  `${basePath}/certificates/infop-4.jpg`,
  `${basePath}/certificates/folio-cert.jpg`,
];

export default function Showcase() {
  return (
    <section 
      id="certifications" 
      className="scroll-mt-20 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-zinc-950 w-full overflow-hidden"
    >
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            04. Certificaciones en 3D
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
            Certificados en 3D
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto sm:mx-0">
            Mueve o toca con el mouse para ver las acreditaciones obtenidas en redes, bases de datos, desarrollo y analítica.
          </p>
        </div>

        {/* Dome Gallery Wrapper */}
        <div className="w-full flex justify-center items-center overflow-hidden">
          <DomeGallery images={CERTIFICATE_IMAGES} />
        </div>

      </div>
    </section>
  );
}