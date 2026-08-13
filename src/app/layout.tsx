import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jayro Adoni Mejía | Informática Administrativa & Desarrollo de Sistemas",
  description: "Portfolio profesional de Jayro Adoni Mejía. Desarrollo Full Stack, Bases de Datos, Redes y Ciberseguridad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased selection:bg-zinc-800 selection:text-zinc-100 flex flex-col min-h-screen overflow-x-hidden w-full`}>
        <Navbar />
        <main className="pt-16 flex-1 w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}