"use client";

import React from "react";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SpotlightCard } from "@/components/SpotlightCard";

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Work Experience & Track Record
          </h2>
          <p className="mt-2 text-base text-zinc-400">
            Proven history of delivering high-concurrency systems, reducing operational overhead,
            and mentoring engineering teams.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute top-4 bottom-4 left-4 md:left-8 w-px bg-zinc-800" />

          <div className="space-y-10">
            {portfolioData.experience.map((item, index) => (
              <div key={item.company} className="relative pl-12 md:pl-20 group">
                {/* Timeline Node Indicator */}
                <div className="absolute left-4 md:left-8 top-6 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-zinc-950 border-2 border-cyan-400 transition-transform">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>

                <SpotlightCard
                  glowColor={index === 0 ? "cyan" : index === 1 ? "indigo" : "emerald"}
                  className="p-6 md:p-8"
                >
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="text-base font-semibold text-cyan-400 mt-0.5">
                        {item.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1 text-xs font-mono text-zinc-400">
                      <span className="flex items-center gap-1.5 bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800 tabular-nums">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-zinc-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-5">
                    {item.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2 text-sm text-zinc-300 leading-relaxed"
                      >
                        <ChevronRight className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-zinc-800/80">
                    {item.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
