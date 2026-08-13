import { ExternalLink, FolderGit2, CheckCircle2 } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";
import ElectricBorder from "@/components/ui/ElectricBorder";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900/60 bg-zinc-950 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">03. Portafolio</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">Proyectos Destacados</h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto sm:mx-0">
            Sistemas en los que he trabajado abarcando arquitecturas web, aplicaciones móviles y gestión de bases de datos.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-6 sm:space-y-8">
          {PROJECTS_DATA.map((project) => (
            <ElectricBorder key={project.id} color="#10b981" speed={0} chaos={0} borderRadius={16}>
              <div className="p-4 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700/80 transition-all space-y-4 sm:space-y-6 h-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/80 pb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono text-emerald-400">{project.role}</span>
                      {project.category && (
                        <>
                          <span className="text-zinc-600 text-xs">•</span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                            project.category === "Proyecto Personal"
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                              : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                          }`}>
                            {project.category}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-100 mt-1">{project.title}</h3>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-800/60 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
                        aria-label="Ver Código en GitHub"
                      >
                        <FolderGit2 className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-800/60 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
                        aria-label="Ver Demo en Vivo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-mono text-zinc-500">Puntos Clave:</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-2.5 py-0.5 rounded bg-zinc-800/80 text-zinc-400 font-mono text-[10px] sm:text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ElectricBorder>
          ))}
        </div>

      </div>
    </section>
  );
}