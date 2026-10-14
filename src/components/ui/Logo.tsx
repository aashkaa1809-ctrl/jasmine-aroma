'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  const logoSrc = isLight 
    ? '/assets/branding/logo-dark-mode.png' 
    : '/assets/branding/logo-transparent.png';

  const dimensions = size === 'sm'
    ? { width: 44, height: 44, textSize: 'text-base', subSize: 'text-[8.5px]' }
    : size === 'lg'
    ? { width: 68, height: 68, textSize: 'text-2xl', subSize: 'text-[10px]' }
    : { width: 52, height: 52, textSize: 'text-lg md:text-xl', subSize: 'text-[9px]' };

  return (
    <Link href="/" className="inline-flex items-center gap-3 group focus:outline-none select-none">
      <div className="relative flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
        <Image
          src={logoSrc}
          alt="Jasmine Aroma Official Monogram"
          width={dimensions.width}
          height={dimensions.height}
          priority
          className="object-contain"
        />
      </div>

      <div className="flex flex-col">
        <span
          className={`font-editorial font-medium tracking-[0.26em] uppercase text-white transition-colors duration-300 group-hover:text-luxury-gold ${dimensions.textSize}`}
        >
          JASMINE AROMA
        </span>
        {showSubtitle && (
          <span
            className={`font-sans tracking-[0.34em] uppercase text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300 ${dimensions.subSize}`}
          >
            WHERE COMFORT MEETS ELEGANCE
          </span>
        )}
      </div>
    </Link>
  );
};
