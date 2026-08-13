import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Showcase from "@/components/sections/Showcase";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col gap-16 sm:gap-24">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Showcase />
      <Certifications />
      <Contact />
    </main>
  );
}