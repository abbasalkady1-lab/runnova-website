"use client";

import React from "react";
import { RunnovaMark } from "@/components/brand/RunnovaMark";

interface RunnovaLogoProps {
  size?: number; // Height of the R mark (default: 34)
  className?: string;
  lightText?: boolean;
  withStarTwinkle?: boolean;
}

export const RunnovaLogo: React.FC<RunnovaLogoProps> = ({
  size = 34,
  className = "",
  lightText = false,
  withStarTwinkle = true,
}) => {
  const textColor = lightText ? "text-white" : "text-[#0F172A]";

  return (
    <div
      dir="ltr"
      className={`inline-flex items-center gap-1 select-none font-display font-black tracking-tight ${className}`}
      style={{ minHeight: size }}
      aria-label="Runnova"
    >
      {/* Capital R Mark with 4-Point Star Negative Space */}
      <RunnovaMark size={size} glow={true} />

      {/* The solid, crisp word 'unnova' - ALWAYS LTR */}
      <span
        className={`text-xl sm:text-2xl font-black tracking-tight leading-none ${textColor} transition-colors duration-150`}
        style={{ letterSpacing: "-0.03em" }}
      >
        unnova
      </span>
    </div>
  );
};
