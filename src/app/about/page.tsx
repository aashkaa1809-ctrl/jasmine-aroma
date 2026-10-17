import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Shield, Leaf, Droplets, Heart, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story & Brand Philosophy | Jasmine Aroma Atelier',
  description: 'Learn about Jasmine Aroma’s mission to elevate everyday living through ethical organic cotton cultivars, sustainable looms, and botanical refinement.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-neutral-900 pt-28 pb-24 font-sans">
      {/* About Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b border-[#E8E3DA] bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary-wine/30 bg-primary-wine/5 mb-6">
            <Sparkles size={12} className="text-primary-wine" />
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-primary-wine font-semibold">
              OUR ATELIER HERITAGE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-neutral-900 mb-6 leading-tight">
            Weaving Botanical Elegance <br />
            <span className="italic font-light text-primary-wine">Into Modern Homes.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-3xl mx-auto">
            Founded with a pure passion for natural fibers and restful living, Jasmine Aroma creates sensory bedding and home furnishings crafted with sustainable, ultra-soft long-staple organic cotton, airy European flax linen, and subtle botanical refinement.
          </p>
        </div>
      </section>

      {/* Story & Loom Craftsmanship */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary-wine block font-semibold">
              THE PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900">
              Slow Living, Mindful Rest
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
              We spent years testing organic cotton cultivars until we achieved the perfect balance of tensile durability and luminous silky hand-feel. We wove that quiet calm into every thread—so rest feels like a rejuvenating ritual, not routine.
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
              We partner directly with family-owned farms and master weavers in Portugal and India who have honed the art of loom precision for generations. Every sheet set, comforter, and curtain panel is free from formaldehyde, phthalates, and harsh chemical softeners.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#E8E3DA]">
              <div>
                <span className="text-3xl font-serif text-primary-wine block mb-1 font-semibold">500 TC</span>
                <span className="text-xs text-neutral-500 uppercase tracking-[0.15em]">Single-Ply Pure Cotton</span>
              </div>
              <div>
                <span className="text-3xl font-serif text-primary-wine block mb-1 font-semibold">Zero</span>
                <span className="text-xs text-neutral-500 uppercase tracking-[0.15em]">Harmful Resin Finishes</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/5] rounded-sm overflow-hidden border border-[#E8E3DA] shadow-md bg-white">
            <Image
              src="https://images.unsplash.com/photo-1540518614846-7ede433c4550?q=80&w=1200&auto=format&fit=crop"
              alt="Loom and Textile Production"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-24 bg-white border-t border-b border-[#E8E3DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary-wine block mb-3 font-semibold">
              OUR PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-4">
              Crafted with Respect for People &amp; Planet
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-light">
              We commit to radical transparency, sustainable farming, non-toxic dyes, and enduring heirloom craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#FAF8F5] border border-[#E8E3DA] rounded-sm space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-white border border-[#E8E3DA] flex items-center justify-center text-primary-wine shadow-sm">
                <Leaf size={22} />
              </div>
              <h3 className="text-xl font-serif text-neutral-900 font-medium">GOTS Certified Organic</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-light">
                Every strand of long-staple cotton is grown responsibly without chemical fertilizers, synthetic pesticides, or genetically modified seeds.
              </p>
            </div>

            <div className="p-8 bg-[#FAF8F5] border border-[#E8E3DA] rounded-sm space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-white border border-[#E8E3DA] flex items-center justify-center text-primary-wine shadow-sm">
                <Droplets size={22} />
              </div>
              <h3 className="text-xl font-serif text-neutral-900 font-medium">Zero Toxic Dyes</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-light">
                OEKO-TEX Standard 100 certification guarantees that every dye and process is rigorously tested against over 300 harmful industrial substances.
              </p>
            </div>

            <div className="p-8 bg-[#FAF8F5] border border-[#E8E3DA] rounded-sm space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-white border border-[#E8E3DA] flex items-center justify-center text-primary-wine shadow-sm">
                <Shield size={22} />
              </div>
              <h3 className="text-xl font-serif text-neutral-900 font-medium">Heirloom Durability</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-light">
                Single-ply yarns and dense weave engineering ensure your bedsheets, comforters, and curtains resist pilling and actually soften over years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-4">
          Ready to Elevate Your Everyday Living?
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mb-8 font-light">
          Explore our signature organic sateen bedsheets, cloud comforters, and linen drapes.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 hover:bg-primary-wine text-white text-xs uppercase tracking-[0.25em] font-semibold transition-all shadow-md rounded-sm"
        >
          <span>Explore The Bedding Line</span>
          <ArrowRight size={15} />
        </Link>
      </section>
    </div>
  );
}
