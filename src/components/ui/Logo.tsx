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
  size = 'md',
  showSubtitle = true
}) => {
  const dimensions = size === 'sm'
    ? { width: 44, height: 44, textSize: 'text-base', subSize: 'text-[8.5px]' }
    : size === 'lg'
    ? { width: 64, height: 64, textSize: 'text-2xl', subSize: 'text-[10px]' }
    : { width: 50, height: 50, textSize: 'text-lg md:text-xl', subSize: 'text-[9px]' };

  return (
    <Link href="/" className="inline-flex items-center gap-3 group focus:outline-none select-none">
      <div className="relative flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
        <Image
          src="/assets/branding/logo-transparent.png"
          alt="Jasmine Aroma Official Monogram"
          width={dimensions.width}
          height={dimensions.height}
          priority
          className="object-contain"
        />
      </div>

      <div className="flex flex-col">
        <span
          className={`font-editorial font-semibold tracking-[0.24em] uppercase text-neutral-900 transition-colors duration-300 group-hover:text-primary-wine ${dimensions.textSize}`}
        >
          JASMINE AROMA
        </span>
        {showSubtitle && (
          <span
            className={`font-sans tracking-[0.32em] uppercase text-neutral-500 transition-colors duration-300 group-hover:text-neutral-700 font-medium ${dimensions.subSize}`}
          >
            WHERE COMFORT MEETS ELEGANCE
          </span>
        )}
      </div>
    </Link>
  );
};
