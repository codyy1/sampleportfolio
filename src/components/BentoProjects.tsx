"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ProjectCard } from "@/components/ProjectCard";

export function BentoProjects() {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects =
    filter === "featured"
      ? portfolioData.projects.filter((p) => p.featured)
      : portfolioData.projects;

  const glowCycle: ("cyan" | "indigo" | "emerald" | "purple")[] = [
    "cyan",
    "indigo",
    "purple",
    "emerald",
    "cyan",
  ];

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              Featured Systems & Applications
            </h2>
            <p className="mt-2 text-base text-zinc-400 max-w-2xl">
              Architected for high concurrency, low latency, and delightful user ergonomics.
              Hover over cards to activate the interactive spotlight effect.
            </p>
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-lg self-start md:self-auto">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors min-h-[44px] flex items-center cursor-pointer ${
                filter === "all"
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              All Projects ({portfolioData.projects.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("featured")}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors min-h-[44px] flex items-center cursor-pointer ${
                filter === "featured"
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Featured Only
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              glowColor={glowCycle[index % glowCycle.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
