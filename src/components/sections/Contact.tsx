import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import ElectricBorder from "@/components/ui/ElectricBorder";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900/60 bg-zinc-950 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">06. Contacto</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">¿Hablamos?</h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto sm:mx-0">
            Estoy disponible para oportunidades de Práctica Profesional, desarrollo de proyectos o colaboraciones técnicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
          
          {/* Direct Info */}
          <div className="space-y-4 sm:space-y-6">
            <ElectricBorder color="#10b981" speed={0} chaos={0} borderRadius={12}>
              <div className="p-4 sm:p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-4">
                <h3 className="font-semibold text-zinc-200 text-xs sm:text-sm">Información Directa</h3>
                
                <div className="space-y-3 text-xs text-zinc-300">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a href={`mailto:${PROFILE_DATA.email}`} className="hover:text-emerald-400 transition-colors truncate">
                      {PROFILE_DATA.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{PROFILE_DATA.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Estado: {PROFILE_DATA.status}</span>
                  </div>
                </div>
              </div>
            </ElectricBorder>

            <ElectricBorder color="#10b981" speed={0} chaos={0} borderRadius={12}>
              <div className="p-4 sm:p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs text-emerald-400 leading-relaxed">
                💡 <strong>¿Buscas practicante en desarrollo o IT?</strong> Cuento con disponibilidad para incorporarme e integrarme rápidamente al flujo de trabajo del equipo.
              </div>
            </ElectricBorder>
          </div>

          {/* Quick Email CTA */}
          <ElectricBorder color="#10b981" speed={0} chaos={0} borderRadius={12}>
            <div className="p-4 sm:p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-4">
              <h3 className="font-semibold text-zinc-200 text-xs sm:text-sm">Enviar Mensaje</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Puedes enviarme un correo directamente haciendo clic en el siguiente botón:
              </p>
              <a
                href={`mailto:${PROFILE_DATA.email}?subject=Contacto%20desde%20Portafolio&body=Hola%20Jayro,%20vi%20tu%20portafolio%20y...`}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-colors"
              >
                <Send className="w-4 h-4 shrink-0" />
                <span>Redactar correo directo</span>
              </a>
            </div>
          </ElectricBorder>

        </div>

      </div>
    </section>
  );
}