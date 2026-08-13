"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/60 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand / Name */}
        <Link 
          href="/" 
          className="flex items-center gap-2 font-mono font-semibold text-zinc-100 hover:text-emerald-400 transition-colors text-sm sm:text-base"
        >
          <Terminal className="w-5 h-5 text-emerald-500 shrink-0" />
          <span>jayro.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {PROFILE_DATA.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Status Badge & CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {PROFILE_DATA.status}
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 focus:outline-none rounded-lg hover:bg-zinc-900 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800/80 px-4 pt-3 pb-5 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {PROFILE_DATA.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-zinc-300 hover:text-emerald-400 py-2 px-3 rounded-md hover:bg-zinc-900/60 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between px-3">
            <span className="text-xs font-mono text-zinc-500">Estado actual</span>
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {PROFILE_DATA.status}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}