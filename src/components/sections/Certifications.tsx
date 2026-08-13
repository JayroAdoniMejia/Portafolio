import { Award, GraduationCap } from "lucide-react";
import { CERTIFICATIONS_DATA, EDUCATION_DATA } from "@/data/certifications";
import ElectricBorder from "@/components/ui/ElectricBorder";

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900/60 bg-zinc-950 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">05. Formación</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">Educación & Certificaciones</h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto sm:mx-0">
            Preparación universitaria combinada con formación especializada en redes y ciberseguridad.
          </p>
        </div>

        {/* Education Card */}
        <div className="space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-zinc-200 flex items-center justify-center sm:justify-start gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-400 shrink-0" />
            <span>Educación Formativa</span>
          </h3>
          
          {EDUCATION_DATA.map((edu, i) => (
            <ElectricBorder key={i} color="#10b981" speed={0} chaos={0} borderRadius={12}>
              <div className="p-4 sm:p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h4 className="font-bold text-zinc-100 text-sm sm:text-base">{edu.degree}</h4>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full w-fit shrink-0">
                    {edu.status}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 font-mono">{edu.institution} · {edu.period}</p>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{edu.details}</p>
              </div>
            </ElectricBorder>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-zinc-200 flex items-center justify-center sm:justify-start gap-2">
            <Award className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Certificaciones & Cursos Especializados</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CERTIFICATIONS_DATA.map((cert, i) => (
              <ElectricBorder key={i} color="#10b981" speed={0} chaos={0} borderRadius={12}>
                <div className="p-4 sm:p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3 hover:border-zinc-700/80 transition-colors flex flex-col justify-between h-full">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono text-zinc-500 block">{cert.issuer} · {cert.date}</span>
                    <h4 className="font-semibold text-zinc-100 text-xs sm:text-sm">{cert.title}</h4>
                    <p className="text-xs text-zinc-400 leading-normal pt-1">
                      {cert.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-400 font-mono text-[10px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ElectricBorder>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}