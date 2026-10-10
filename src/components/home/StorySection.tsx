'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#0A0A0A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Imagery Column (Cols 1-6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop"
                alt="Jasmine Aroma Weave and Organic Fabric Detail"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Inset Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#141414] border border-white/15 p-6 rounded-sm shadow-2xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-2 text-luxury-gold text-xs font-sans tracking-[0.2em] uppercase mb-1">
                <Sparkles size={14} />
                <span>ATELIER PURITY</span>
              </div>
              <p className="text-2xl font-serif text-white font-normal mb-1">
                100% Organic
              </p>
              <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                Zero harmful chemicals, pesticides, or toxic synthetic dyes. Certified GOTS &amp; OEKO-TEX Standard 100.
              </p>
            </div>
          </div>

          {/* Right Text Column (Cols 7-12) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-luxury-gold block mb-3 font-medium">
                THE JASMINE PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-[1.15] text-white">
                Crafted For Serenity, <br />
                <span className="italic font-light text-luxury-gold">Woven With Intention.</span>
              </h2>
            </div>

            <blockquote className="text-lg sm:text-xl font-serif italic text-neutral-300 border-l-2 border-luxury-gold pl-6 py-1">
              &ldquo;True luxury is waking up in fabrics that feel like a breath of fresh morning air.&rdquo;
            </blockquote>

            <p className="text-sm text-neutral-400 font-sans font-light leading-relaxed">
              At Jasmine Aroma, we believe your bedroom is your sacred sanctuary. Every thread of our bedsheets, every cloud-like fold of our comforters, and every drape of our linen curtains is meticulously crafted using ethical, long-staple organic fibers and subtle botanical essence.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div>
                <span className="text-3xl sm:text-4xl font-serif text-luxury-gold block mb-1">
                  500 TC
                </span>
                <span className="text-xs text-neutral-400 font-sans uppercase tracking-[0.18em]">
                  Single-Ply Organic Yarns
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-serif text-luxury-gold block mb-1">
                  30 Nights
                </span>
                <span className="text-xs text-neutral-400 font-sans uppercase tracking-[0.18em]">
                  Restful Sleep Guarantee
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white hover:text-luxury-gold transition-colors font-medium group"
              >
                <span>Read Our Brand Manifesto</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
