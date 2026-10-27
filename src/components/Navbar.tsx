"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, FileText, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { ResumeModal } from "@/components/ResumeModal";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-200 h-16 flex items-center",
          scrolled
            ? "bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 shadow-md shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between">
            {/* Logo / Terminal Brand */}
            <a
              href="#"
              className="flex items-center gap-2.5 text-zinc-100 font-mono font-semibold tracking-tight group min-h-[44px] min-w-[44px] cursor-pointer"
              aria-label="Alex Rivera Portfolio Home"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700 text-cyan-400 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-colors">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="text-sm sm:text-base font-bold text-zinc-100">
                {portfolioData.personal.name}
              </span>
              <span className="text-zinc-600 font-normal hidden sm:inline">/</span>
              <span className="text-xs text-zinc-500 font-mono hidden sm:inline">dev</span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-zinc-900/80 border border-zinc-800 rounded-lg px-2 py-1 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors rounded-md hover:bg-zinc-800/60 min-h-[44px] flex items-center cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Socials & Resume CTA */}
            <div className="hidden md:flex items-center gap-2.5">
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
              <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-zinc-950 bg-zinc-100 hover:bg-white rounded-lg transition-colors shadow-sm cursor-pointer min-h-[44px]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-950 bg-zinc-100 hover:bg-white rounded-lg min-h-[44px] cursor-pointer"
              >
                <FileText className="w-3 h-3" />
                <span>Resume</span>
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 text-zinc-400 hover:text-zinc-100 bg-zinc-900 border border-zinc-800 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 bg-zinc-950/95 border-b border-zinc-800 px-4 pt-3 pb-6 backdrop-blur-xl animate-fade-in shadow-xl">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors min-h-[44px] flex items-center cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-zinc-800 flex items-center gap-3">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 text-sm text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg flex-1 min-h-[44px] justify-center cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 text-sm text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg flex-1 min-h-[44px] justify-center cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
