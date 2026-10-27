"use client";

import React from "react";
import {
  Layers,
  Cpu,
  Database,
  Terminal,
  Atom,
  Code2,
  Palette,
  Sparkles,
  Gauge,
  Server,
  Cog,
  Network,
  Workflow,
  BarChart3,
  Cloud,
  Globe,
  Box,
  Boxes,
  GitBranch,
  CheckCircle2,
  Activity,
  LucideIcon,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SpotlightCard } from "@/components/SpotlightCard";

const iconMap: Record<string, LucideIcon> = {
  Atom,
  Code2,
  Palette,
  Sparkles,
  Gauge,
  Server,
  Cpu,
  Cog,
  Network,
  Workflow,
  Database,
  Layers,
  BarChart3,
  Cloud,
  Globe,
  Box,
  Boxes,
  GitBranch,
  CheckCircle2,
  Activity,
};

export function SkillsMatrix() {
  const getProficiencyBadge = (proficiency?: string) => {
    switch (proficiency) {
      case "Expert":
        return "bg-emerald-950/70 text-emerald-400 border-emerald-800/60";
      case "Advanced":
        return "bg-cyan-950/70 text-cyan-400 border-cyan-800/60";
      case "Intermediate":
        return "bg-indigo-950/70 text-indigo-400 border-indigo-800/60";
      default:
        return "bg-zinc-800 text-zinc-300 border-zinc-700";
    }
  };

  const getCategoryGlow = (index: number): "cyan" | "indigo" | "emerald" | "purple" => {
    const glows: ("cyan" | "indigo" | "emerald" | "purple")[] = [
      "cyan",
      "indigo",
      "emerald",
      "purple",
    ];
    return glows[index % glows.length];
  };

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Technical Matrix & Skillset
          </h2>
          <p className="mt-2 text-base text-zinc-400">
            A battle-tested stack refined through scaling production services, low-level data systems,
            and reactive web frontends.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.skills.map((categoryGroup, idx) => (
            <SpotlightCard
              key={categoryGroup.category}
              glowColor={getCategoryGlow(idx)}
              className="p-6 md:p-7"
            >
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-zinc-800">
                <h3 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  {categoryGroup.category}
                </h3>
                <span className="text-xs font-mono text-zinc-500">
                  {categoryGroup.skills.length} skills
                </span>
              </div>

              {/* Skills list without container over-nesting */}
              <div className="divide-y divide-zinc-800/60">
                {categoryGroup.skills.map((skill) => {
                  const Icon = (skill.iconName && iconMap[skill.iconName]) || Terminal;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between py-2.5 px-1 hover:bg-zinc-800/30 rounded transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                        <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>

                      {skill.proficiency && (
                        <span
                          className={`px-2 py-0.5 text-[11px] font-mono font-medium rounded border ${getProficiencyBadge(
                            skill.proficiency
                          )}`}
                        >
                          {skill.proficiency}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
