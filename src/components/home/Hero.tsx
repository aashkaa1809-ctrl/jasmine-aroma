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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Background Lifestyle Image with Subtle Cinematic Zoom */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/assets/lifestyle/home-styling-sanctuary.jpg"
          alt="Jasmine Aroma Luxury Bedroom Interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Gradients to keep typography crystal legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0)_0%,_rgba(10,10,10,0.85)_100%)]" />
      </div>

      {/* 3D Interactive WebGL Fabric Layer */}
      <Experience3D />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-luxury-gold/30 bg-black/40 backdrop-blur-md mb-8 animate-fade-in">
          <Sparkles size={13} className="text-luxury-gold" />
          <span className="text-[10.5px] font-sans tracking-[0.3em] uppercase text-neutral-200">
            THE BOTANICAL SANCTUARY COLLECTION
          </span>
        </div>

        {/* Large Luxury Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.08] mb-6 max-w-4xl animate-slide-up">
          Awaken Your Senses in <br className="hidden sm:inline" />
          <span className="italic font-light text-luxury-gold">Pure Organic</span> Comfort.
        </h1>

        {/* Subheading */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl font-light leading-relaxed mb-10 tracking-wide">
          Botanical-infused 500TC organic sateen bedsheets, featherlight cloud comforters, artisanal cushions, and blackout linen curtains crafted for your most restful slumber.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Link
            href="/products"
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-luxury-gold text-black hover:text-black font-sans text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 shadow-2xl hover:scale-[1.02] text-center"
          >
            Explore Collection
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-luxury-gold text-white hover:text-luxury-gold font-sans text-xs uppercase tracking-[0.25em] transition-all duration-300 backdrop-blur-sm hover:bg-white/5 text-center"
          >
            Our Fabric Story
          </Link>
        </div>

        {/* Scroll Indicator */}
        <button
          type="button"
          onClick={scrollToExplore}
          className="mt-16 sm:mt-20 inline-flex flex-col items-center gap-2 text-neutral-400 hover:text-luxury-gold transition-colors group cursor-pointer focus:outline-none"
          aria-label="Scroll down to explore collection"
        >
          <span className="text-[9px] font-sans tracking-[0.35em] uppercase text-neutral-400 group-hover:text-luxury-gold transition-colors">
            DISCOVER
          </span>
          <ArrowDown size={15} className="animate-bounce text-luxury-gold" />
        </button>
      </div>

      {/* Bottom Subtle Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none z-20" />
    </section>
  );
};
