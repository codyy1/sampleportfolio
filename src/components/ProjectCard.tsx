"use client";

import React from "react";
import { Github, ArrowUpRight, Activity } from "lucide-react";
import { Project } from "@/types/portfolio";
import { SpotlightCard } from "@/components/SpotlightCard";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  glowColor?: "cyan" | "emerald" | "indigo" | "purple";
}

export function ProjectCard({ project, glowColor = "cyan" }: ProjectCardProps) {
  const spanClass =
    project.bentoSpan === "col-span-2"
      ? "md:col-span-2"
      : project.bentoSpan === "col-span-3"
      ? "md:col-span-3"
      : "col-span-1";

  const isWide = project.bentoSpan === "col-span-3";

  return (
    <SpotlightCard
      glowColor={glowColor}
      className={cn(
        "flex flex-col justify-between h-full group hover:border-zinc-700/80 transition-all",
        spanClass
      )}
    >
      <div className={cn(isWide && "md:grid md:grid-cols-12 md:gap-8 md:items-start")}>
        <div className={cn(isWide ? "md:col-span-8" : "w-full")}>
          {/* Header: Title and external links */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded bg-cyan-950/80 border border-cyan-800/80 text-cyan-300">
                    Featured
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit live demo for ${project.title}`}
                  className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-zinc-400 mb-5 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Impact Metrics Banner */}
        <div className={cn(isWide ? "md:col-span-4 md:mt-2" : "w-full")}>
          {project.impactMetrics && (
            <div className="mb-6 flex items-start gap-2.5 p-3 rounded-lg bg-zinc-950/80 border border-zinc-800 text-xs font-mono text-emerald-400">
              <Activity className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" />
              <span className="leading-snug">{project.impactMetrics}</span>
            </div>
          )}
        </div>
      </div>

      {/* Tech Stack Badges */}
      <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </SpotlightCard>
  );
}
