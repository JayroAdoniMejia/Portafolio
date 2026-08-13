import { PROFILE_DATA } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-800/60 bg-zinc-950 py-8 sm:py-10 text-xs text-zinc-500 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-1">
          <p className="font-mono text-zinc-300 font-medium text-sm">{PROFILE_DATA.name}</p>
          <p className="text-zinc-400">{PROFILE_DATA.role}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-mono text-zinc-400 text-[11px] sm:text-xs">
          <span>© {currentYear}</span>
          <span className="hidden sm:inline text-zinc-700">•</span>
          <span>Diseñado e implementado con Next.js & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}