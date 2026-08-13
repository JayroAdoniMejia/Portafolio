import { Code2, Database, ShieldCheck, Sparkles } from "lucide-react";
import ElectricBorder from "@/components/ui/ElectricBorder";

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      title: "Desarrollo de Software",
      desc: "Construcción de aplicaciones web y multiplataforma con Next.js, React Native, NestJS y Spring Boot.",
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      title: "Sistemas & Bases de Datos",
      desc: "Diseño y modelado de datos relacionales y NoSQL con PostgreSQL, MongoDB y SQL.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      title: "Redes & Ciberseguridad",
      desc: "Fundamentos sólidos de arquitectura de redes (CCNA) y conceptos esenciales de pruebas de penetración.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      title: "Productividad con IA",
      desc: "Integración de herramientas de IA en el flujo de trabajo para optimizar el aprendizaje y la resolución de problemas.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900/60 bg-zinc-950 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">01. Perfil</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">Sobre mí</h2>
        </div>

        {/* Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
          <div className="md:col-span-2 space-y-4 text-zinc-400 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
            <p>
              Soy estudiante de la carrera de <strong className="text-zinc-200">Informática Administrativa</strong> en la Universidad Nacional Autónoma de Honduras (UNAH), actualmente en la etapa final previa a iniciar mi práctica profesional.
            </p>
            <p>
              Mi enfoque combina la visión administrativa de los sistemas con la implementación técnica. Me apasiona entender el ciclo completo de una aplicación: desde el diseño de la base de datos y la arquitectura de API, hasta la interfaz de usuario y su despliegue.
            </p>
            <p>
              Cuento con experiencia práctica construyendo proyectos personales Full Stack y multiplataforma, además de una sólida formación complementaria en redes y ciberseguridad mediante la academia Cisco.
            </p>
          </div>

          {/* Quick Academic Status Card */}
          <div className="w-full">
            <ElectricBorder color="#10b981" speed={0} chaos={0} borderRadius={16}>
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3 font-mono text-xs">
                <div className="text-zinc-300 font-semibold border-b border-zinc-800 pb-2">
                  Estado Académico
                </div>
                <div className="space-y-1 text-zinc-400">
                  <p><span className="text-zinc-500">Institución:</span> UNAH</p>
                  <p><span className="text-zinc-500">Carrera:</span> Inf. Administrativa</p>
                  <p><span className="text-zinc-500">Etapa:</span> Próximo a egresar</p>
                  <p><span className="text-zinc-500">Pendiente:</span> Práctica Profesional</p>
                </div>
              </div>
            </ElectricBorder>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 sm:pt-4">
          {highlights.map((item, i) => (
            <ElectricBorder key={i} color="#10b981" speed={0} chaos={0} borderRadius={16}>
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 space-y-2 h-full flex flex-col justify-start">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-800/60 shrink-0">{item.icon}</div>
                  <h3 className="font-semibold text-zinc-200 text-xs sm:text-sm">{item.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-normal sm:pl-11 pt-1 sm:pt-0">
                  {item.desc}
                </p>
              </div>
            </ElectricBorder>
          ))}
        </div>

      </div>
    </section>
  );
}