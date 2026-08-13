"use client";

import { SKILLS_DATA, LEVEL_LABELS } from "@/data/skills";
import LogoLoop from "@/components/ui/LogoLoop";
import DotField from "@/components/ui/DotField";
import ElectricBorder from "@/components/ui/ElectricBorder";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiVuedotjs, 
  SiJavascript, 
  SiNodedotjs, 
  SiNestjs, 
  SiPython, 
  SiSpringboot, 
  SiPhp, 
  SiPostgresql, 
  SiMongodb, 
  SiSqlite, 
  SiPrisma, 
  SiMysql, 
  SiGit, 
  SiLinux 
} from "react-icons/si";

// Íconos monocromáticos (blanco / zinc) con efecto hover suave
const TECH_LOGOS = [
  { node: <SiTypescript className="text-zinc-400 hover:text-white transition-colors" />, title: "TypeScript" },
  { node: <SiNextdotjs className="text-zinc-400 hover:text-white transition-colors" />, title: "Next.js" },
  { node: <SiReact className="text-zinc-400 hover:text-white transition-colors" />, title: "React / React Native" },
  { node: <SiTailwindcss className="text-zinc-400 hover:text-white transition-colors" />, title: "Tailwind CSS" },
  { node: <SiVuedotjs className="text-zinc-400 hover:text-white transition-colors" />, title: "Vue.js" },
  { node: <SiJavascript className="text-zinc-400 hover:text-white transition-colors" />, title: "JavaScript" },
  { node: <SiNodedotjs className="text-zinc-400 hover:text-white transition-colors" />, title: "Node.js" },
  { node: <SiNestjs className="text-zinc-400 hover:text-white transition-colors" />, title: "NestJS" },
  { node: <SiPython className="text-zinc-400 hover:text-white transition-colors" />, title: "Python" },
  { node: <SiSpringboot className="text-zinc-400 hover:text-white transition-colors" />, title: "Spring Boot" },
  { node: <SiPhp className="text-zinc-400 hover:text-white transition-colors" />, title: "PHP" },
  { node: <SiPostgresql className="text-zinc-400 hover:text-white transition-colors" />, title: "PostgreSQL" },
  { node: <SiMongodb className="text-zinc-400 hover:text-white transition-colors" />, title: "MongoDB" },
  { node: <SiSqlite className="text-zinc-400 hover:text-white transition-colors" />, title: "SQLite" },
  { node: <SiPrisma className="text-zinc-400 hover:text-white transition-colors" />, title: "Prisma ORM" },
  { node: <SiMysql className="text-zinc-400 hover:text-white transition-colors" />, title: "MySQL" },
  { node: <SiGit className="text-zinc-400 hover:text-white transition-colors" />, title: "Git" },
  { node: <SiLinux className="text-zinc-400 hover:text-white transition-colors" />, title: "Linux" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900/60 bg-zinc-950 relative overflow-hidden w-full">
      
      {/* Canvas interactivo de partículas / puntos de fondo */}
      <DotField 
        dotRadius={1.5}
        dotSpacing={18}
        bulgeStrength={60}
        cursorRadius={300}
        gradientFrom="rgba(16, 185, 129, 0.35)"
        gradientTo="rgba(113, 113, 122, 0.2)"
        glowColor="rgba(16, 185, 129, 0.15)"
      />

      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">02. Competencias</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">Habilidades Técnicas</h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto sm:mx-0">
            Clasificación transparente basada en la aplicación directa en proyectos personales y formación académica.
          </p>
        </div>

        {/* Level Legend */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/80 text-[11px] sm:text-xs font-mono">
          <span className="text-zinc-400">Leyenda:</span>
          {Object.entries(LEVEL_LABELS).map(([key, item]) => (
            <div key={key} className="flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${item.dotClass}`} />
              <span className="text-zinc-300">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Layout principal: Tarjetas + Tira de logos flotante */}
        <div className="relative">
          
          {/* Grid de Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:pr-14">
            {SKILLS_DATA.map((cat, i) => (
              <ElectricBorder key={i} color="#10b981" speed={0} chaos={0} borderRadius={16}>
                <div className="p-4 sm:p-6 rounded-2xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 space-y-3 sm:space-y-4 hover:border-zinc-700/80 transition-colors h-full">
                  <div>
                    <h3 className="font-semibold text-zinc-100 text-sm sm:text-base">{cat.title}</h3>
                    <p className="text-xs text-zinc-400 mt-1">{cat.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                    {cat.skills.map((skill, idx) => {
                      const meta = LEVEL_LABELS[skill.level];
                      return (
                        <span
                          key={idx}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-medium border ${meta.badgeClass}`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${meta.dotClass}`} />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </ElectricBorder>
            ))}
          </div>

          {/* Tira flotante de logos a la derecha (solo pantallas grandes) */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-10 overflow-hidden pointer-events-none">
            <LogoLoop
              logos={TECH_LOGOS}
              speed={35}
              direction="up"
              logoHeight={22}
              gap={24}
              fadeOut={true}
              fadeOutColor="#09090b"
            />
          </div>

        </div>

      </div>
    </section>
  );
}