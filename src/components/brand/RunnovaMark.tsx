"use client";

import React from "react";

interface RunnovaMarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  color?: string;
  starColor?: string;
  glow?: boolean;
}

export const RunnovaMark: React.FC<RunnovaMarkProps> = ({
  size = 36,
  className = "",
  color = "#3B28FF",
  starColor = "#FFFFFF",
  glow = true,
  ...props
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center flex-shrink-0 ${className}`}>
      {glow && (
        <span
          className="absolute inset-0 rounded-full bg-brand/20 blur-md -z-10 animate-pulse pointer-events-none"
          style={{ width: size, height: size }}
        />
      )}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Runnova Mark"
        className="flex-shrink-0"
        {...props}
      >
        <defs>
          <linearGradient id="runnova-r-brand" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4F38FF" />
            <stop offset="100%" stopColor="#2D1BE0" />
          </linearGradient>
          <filter id="nova-star-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer R Body with bold modern geometry */}
        <path
          d="M18 12 H 58 C 76 12, 88 23, 88 40 C 88 52, 79 62, 66 65 L 88 92 H 66 L 47 67 H 36 V 92 H 18 V 12 Z"
          fill="url(#runnova-r-brand)"
        />

        {/* 4-Point Star Negative Space with subtle twinkle */}
        <path
          d="M52 24 C 52 33, 56 37, 65 37 C 56 37, 52 41, 52 50 C 52 41, 48 37, 39 37 C 48 37, 52 33, 52 24 Z"
          fill={starColor}
          filter="url(#nova-star-glow)"
          className="animate-pulse"
        />
      </svg>
    </div>
  );
};
