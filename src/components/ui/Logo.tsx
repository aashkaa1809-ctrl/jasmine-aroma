'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark' | 'gold' | 'monochrome';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = true
}) => {
  const isLight = variant === 'light';
  const isGold = variant === 'gold';

  const textColor = isGold
    ? 'text-luxury-gold'
    : isLight
    ? 'text-white'
    : 'text-neutral-900';

  const subColor = isGold
    ? 'text-luxury-gold/80'
    : isLight
    ? 'text-neutral-400'
    : 'text-neutral-500';

  const iconStroke = isGold ? '#C5A880' : isLight ? '#FFFFFF' : '#111111';

  return (
    <Link href="/" className="inline-flex items-center gap-3.5 group focus:outline-none select-none">
      {/* Botanical Emblem */}
      <div className="relative flex items-center justify-center transition-transform duration-700 group-hover:rotate-180">
        <svg
          width={size === 'sm' ? 24 : size === 'lg' ? 38 : 30}
          height={size === 'sm' ? 24 : size === 'lg' ? 38 : 30}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Ring */}
          <circle cx="20" cy="20" r="18" stroke={iconStroke} strokeWidth="0.8" strokeDasharray="2 3" opacity="0.4" />
          
          {/* Symmetrical 5-Petal Jasmine Flower */}
          <g stroke={iconStroke} strokeWidth="1.2" strokeLinecap="round">
            {/* Top Petal */}
            <path d="M20 20 C18 13, 20 8, 20 5 C20 8, 22 13, 20 20 Z" />
            {/* Right-Top */}
            <path d="M20 20 C26 15, 31 18, 34 20 C31 22, 26 25, 20 20 Z" transform="rotate(72 20 20)" />
            {/* Right-Bottom */}
            <path d="M20 20 C26 15, 31 18, 34 20 C31 22, 26 25, 20 20 Z" transform="rotate(144 20 20)" />
            {/* Left-Bottom */}
            <path d="M20 20 C26 15, 31 18, 34 20 C31 22, 26 25, 20 20 Z" transform="rotate(216 20 20)" />
            {/* Left-Top */}
            <path d="M20 20 C26 15, 31 18, 34 20 C31 22, 26 25, 20 20 Z" transform="rotate(288 20 20)" />
          </g>
          <circle cx="20" cy="20" r="2.2" fill={iconStroke} />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span
          className={`font-editorial font-medium tracking-[0.28em] uppercase transition-colors duration-300 ${textColor} ${
            size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg md:text-xl'
          }`}
        >
          JASMINE AROMA
        </span>
        {showSubtitle && (
          <span
            className={`font-sans tracking-[0.38em] uppercase text-[9px] transition-colors duration-300 ${subColor}`}
          >
            HOME &bull; SANCTUARY
          </span>
        )}
      </div>
    </Link>
  );
};
