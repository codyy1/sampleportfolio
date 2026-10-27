"use client";

import React, { useEffect } from "react";
import { X, Printer, Download, ExternalLink, Mail, MapPin, Briefcase, GraduationCap, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl flex flex-col overflow-hidden text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <h2 id="resume-title" className="text-sm font-semibold font-mono text-zinc-200">
              {portfolioData.personal.name} - Executive Resume
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors cursor-pointer min-h-[36px]"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-1.5 text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Document */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-sm">
          {/* Identity & Header */}
          <div className="border-b border-zinc-800/80 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
              {portfolioData.personal.name}
            </h1>
            <p className="text-cyan-400 font-medium text-base mt-1">
              {portfolioData.personal.headline}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-zinc-500" />
                {portfolioData.personal.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-zinc-500" />
                {portfolioData.personal.email}
              </span>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-cyan-400 underline cursor-pointer"
              >
                GitHub Profile
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-cyan-400 underline cursor-pointer"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
              Summary
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              {portfolioData.personal.bio} Proven track record designing resilient distributed architectures,
              maintaining sub-18ms p99 SLAs, and scaling multi-tenant platforms processing over 120M daily requests.
            </p>
          </div>

          {/* Key Competencies / Skills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
              Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {portfolioData.skills.map((group) => (
                <div key={group.category} className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <div className="font-semibold text-zinc-200 mb-1.5">{group.category}</div>
                  <div className="text-zinc-400 leading-relaxed">
                    {group.skills.map((s) => s.name).join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
              Work Experience
            </h3>
            <div className="space-y-5">
              {portfolioData.experience.map((exp) => (
                <div key={exp.company} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="font-bold text-zinc-100 text-sm">
                      {exp.role} <span className="text-cyan-400 font-semibold">@ {exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">{exp.period}</span>
                  </div>
                  <div className="text-xs text-zinc-500 mb-2">{exp.location}</div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-zinc-300 text-xs leading-relaxed">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 pt-1.5">
                    {exp.techUsed.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
              Education & Credentials
            </h3>
            <div className="text-xs text-zinc-300 space-y-1">
              <div className="font-semibold text-zinc-200">
                B.S. in Computer Science & Systems Engineering
              </div>
              <div className="text-zinc-500">University of California, Berkeley • Honors Graduate</div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-zinc-800 bg-zinc-900/60 flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-500">Available immediately for staff roles</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 hover:bg-white text-zinc-950 transition-colors cursor-pointer min-h-[36px]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
