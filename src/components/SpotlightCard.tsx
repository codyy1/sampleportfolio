"use client";

import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "emerald" | "indigo" | "purple";
}

export function SpotlightCard({
  children,
  className,
  glowColor = "cyan",
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setOpacity(1);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
  }, []);

  const glowStyles = {
    cyan: "rgba(6, 182, 212, 0.12)",
    emerald: "rgba(16, 185, 129, 0.12)",
    indigo: "rgba(99, 102, 241, 0.12)",
    purple: "rgba(168, 85, 247, 0.12)",
  };

  const borderStyles = {
    cyan: "rgba(6, 182, 212, 0.4)",
    emerald: "rgba(16, 185, 129, 0.4)",
    indigo: "rgba(99, 102, 241, 0.4)",
    purple: "rgba(168, 85, 247, 0.4)",
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={cn(
        "relative rounded-xl border border-zinc-800 bg-[#141417] p-6 transition-colors duration-200 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Dynamic border spotlight glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl transition-opacity duration-300"
        style={{
          opacity: opacity || isFocused ? 1 : 0,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${borderStyles[glowColor]}, transparent 40%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      {/* Surface illumination spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: opacity || isFocused ? 1 : 0,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${glowStyles[glowColor]}, transparent 50%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full w-full">{children}</div>
    </div>
  );
}
