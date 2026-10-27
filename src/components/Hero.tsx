"use client";

import React, { useState } from "react";
import { ArrowRight, Mail, Check, Copy } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SpotlightCard } from "@/components/SpotlightCard";
import { useToast } from "@/components/Toast";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    showToast("Email address copied to clipboard!", "success");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Identity & Role Header */}
          <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-zinc-200 font-semibold">{portfolioData.personal.name}</span>
            <span className="text-zinc-600">/</span>
            <span>{portfolioData.personal.headline}</span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-100 leading-[1.15] mb-5 max-w-3xl">
            Engineering scalable distributed architectures and crisp web systems.
          </h1>

          {/* Bio / Value Prop */}
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-4 max-w-2xl font-normal">
            {portfolioData.personal.bio}
          </p>

          {/* Availability Status */}
          <div className="text-xs font-mono text-cyan-400/90 mb-10">
            {portfolioData.personal.availabilityStatus} • Based in {portfolioData.personal.location}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14 w-full sm:w-auto">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-zinc-950 bg-zinc-100 hover:bg-white shadow-sm transition-colors group min-h-[44px] min-w-[140px] cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors min-h-[44px] min-w-[140px] cursor-pointer"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Get in Touch</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-zinc-300 hover:text-zinc-100 bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 transition-colors min-h-[44px] cursor-pointer"
              title="Click to copy email address"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>{portfolioData.personal.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Stats Grid with tabular-nums */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {portfolioData.metrics.map((stat, idx) => (
            <SpotlightCard
              key={stat.label}
              glowColor={idx % 2 === 0 ? "cyan" : "indigo"}
              className="p-5 text-center"
            >
              <div className="flex flex-col items-center justify-center py-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight mb-1 font-mono tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-zinc-400 font-medium">
                  {stat.label}
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
