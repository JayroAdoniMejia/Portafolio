import Image from "next/image";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

export default function Hero() {
  const githubUrl = "https://github.com/JayroAdoniMejia";
  const linkedinUrl = "https://www.linkedin.com/in/jayro-adoni-mejia-funes-1253043a8/";

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Columna Izquierda: Información Principal */}
        <div className="lg:col-span-7 space-y-6 text-center sm:text-left order-2 lg:order-1">
          
          {/* Intro Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>Informática Administrativa · UNAH</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 leading-tight">
              {PROFILE_DATA.name}
            </h1>
            <p className="text-lg sm:text-2xl font-medium text-zinc-400">
              Desarrollo de Sistemas · Full Stack · Data · Security
            </p>
          </div>

          {/* Short Value Proposition */}
          <p className="text-zinc-400 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mx-auto sm:mx-0">
            Estudiante próximo a egresar centrado en la construcción de software sólido, gestión de datos e infraestructura. Enfocado en resolver problemas reales mediante arquitectura limpia y aprendizaje continuo.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center sm:justify-start gap-3 sm:gap-4 pt-2">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg bg-zinc-100 text-zinc-900 font-semibold text-sm hover:bg-zinc-200 transition-colors text-center"
            >
              Ver proyectos
            </a>
            <a
              href="#certifications"
              className="px-5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 font-semibold text-sm hover:bg-zinc-800 transition-colors text-center"
            >
              Ver certificaciones
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span>Descargar CV</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center sm:justify-start gap-4 pt-4 border-t border-zinc-900">
            <a
              href={PROFILE_DATA.socials?.github || githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-100 transition-colors p-2 rounded-md hover:bg-zinc-900"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href={PROFILE_DATA.socials?.linkedin || linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-100 transition-colors p-2 rounded-md hover:bg-zinc-900"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="text-zinc-400 hover:text-zinc-100 transition-colors p-2 rounded-md hover:bg-zinc-900"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Columna Derecha: Foto de Perfil Circular */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <div className="relative group">
            {/* Glow / Anillo resplandeciente verde */}
            <div className="absolute -inset-1 rounded-full bg-emerald-500/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />

            {/* Marco Circular para la Fotografía */}
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-emerald-500/60 bg-zinc-900 shadow-2xl">
              <Image
                src="/profile.jpg"
                alt={PROFILE_DATA.name}
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-600 hidden sm:block animate-bounce">
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
}