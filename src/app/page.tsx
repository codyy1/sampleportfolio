import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoProjects } from "@/components/BentoProjects";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { Experience } from "@/components/Experience";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col relative selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <main className="flex-1 w-full max-w-full overflow-hidden">
        <Hero />
        <BentoProjects />
        <SkillsMatrix />
        <Experience />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
