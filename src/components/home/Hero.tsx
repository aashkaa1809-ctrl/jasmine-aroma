'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowDown } from 'lucide-react';
import { Experience3D } from './Experience3D';

export const Hero: React.FC = () => {
  const scrollToExplore = () => {
    const el = document.getElementById('featured-collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#FAF8F5]">
      {/* Background Lifestyle Image with Subtle Cinematic Zoom */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/assets/lifestyle/home-styling-sanctuary.jpg"
          alt="Jasmine Aroma Luxury Bedroom Interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Soft luminous light gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/75 to-[#FAF8F5]/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4)_0%,_rgba(250,248,245,0.85)_100%)]" />
      </div>

      {/* 3D Interactive WebGL Fabric Layer */}
      <Experience3D />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-wine/30 bg-white/90 backdrop-blur-md mb-8 shadow-sm animate-fade-in">
          <Sparkles size={13} className="text-primary-wine" />
          <span className="text-[10.5px] font-sans tracking-[0.28em] uppercase text-neutral-800 font-semibold">
            THE BOTANICAL SANCTUARY COLLECTION
          </span>
        </div>

        {/* Large Luxury Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-neutral-900 tracking-tight leading-[1.08] mb-6 max-w-4xl animate-slide-up">
          Awaken Your Senses in <br className="hidden sm:inline" />
          <span className="italic font-normal text-primary-wine">Pure Organic</span> Comfort.
        </h1>

        {/* Subheading */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-neutral-700 max-w-2xl font-light leading-relaxed mb-10 tracking-wide">
          Hand block printed 500TC organic cotton bedsheets, featherlight cloud comforters, Belgian linen cushions, and blackout curtains crafted for your most restful slumber.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Link
            href="/products"
            className="w-full sm:w-auto px-8 py-4 bg-neutral-900 hover:bg-primary-wine text-white font-sans text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 shadow-xl hover:scale-[1.02] text-center"
          >
            Explore Collection
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto px-8 py-4 border border-[#D8D2C6] bg-white/80 hover:bg-white text-neutral-900 hover:text-primary-wine font-sans text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 shadow-sm text-center"
          >
            Our Fabric Story
          </Link>
        </div>

        {/* Scroll Indicator */}
        <button
          type="button"
          onClick={scrollToExplore}
          className="mt-14 sm:mt-16 inline-flex flex-col items-center gap-2 text-neutral-500 hover:text-primary-wine transition-colors group cursor-pointer focus:outline-none"
          aria-label="Scroll down to explore collection"
        >
          <span className="text-[9px] font-sans tracking-[0.35em] uppercase text-neutral-500 group-hover:text-primary-wine transition-colors font-medium">
            DISCOVER
          </span>
          <ArrowDown size={15} className="animate-bounce text-primary-wine" />
        </button>
      </div>

      {/* Bottom Subtle Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF8F5] to-transparent pointer-events-none z-20" />
    </section>
  );
};
