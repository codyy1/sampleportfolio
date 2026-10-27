"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand & Stack info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2 text-sm font-bold text-zinc-200">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>{portfolioData.personal.name}</span>
              <span className="text-zinc-600">/</span>
              <span className="text-xs font-mono text-zinc-400 font-normal">Portfolio</span>
            </div>
            <p className="text-xs text-zinc-500 font-mono">
              Next.js 14 • React 18 • TypeScript • Tailwind CSS • Framer Motion
            </p>
          </div>

          {/* Center: Social links */}
          <div className="flex items-center gap-2.5">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 text-zinc-400 hover:text-zinc-100 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 text-zinc-400 hover:text-zinc-100 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              aria-label="Send direct email"
              className="p-2.5 text-zinc-400 hover:text-zinc-100 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Copyright & Back to top button */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-zinc-500 font-mono">
              © {new Date().getFullYear()} All rights reserved.
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 text-zinc-400 hover:text-zinc-100 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
