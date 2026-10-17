'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES } from '../../data/categories';
import { ArrowUpRight } from 'lucide-react';

export const CategoryShowcase: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white text-neutral-900 relative border-t border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-[#EAE3D6] pb-6">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary-wine block mb-2 font-bold">
              CURATED SANCTUARIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-neutral-900">
              Explore Our Signature Categories
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md mt-4 md:mt-0 font-sans font-light leading-relaxed">
            Each collection is thoughtfully loomed with nature&apos;s purest botanical fibers to elevate your daily rituals of rest.
          </p>
        </div>

        {/* Editorial Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* 1. Bedsheets - Large Hero Card (Cols 1-7) */}
          <div className="md:col-span-7 group relative overflow-hidden bg-neutral-100 border border-[#E5DFD5] rounded-sm aspect-[4/3] md:aspect-[16/11] shadow-sm hover:shadow-xl transition-shadow duration-500">
            <Link href="/products/bedsheets" className="block w-full h-full">
              <Image
                src={CATEGORIES[0].cardImage}
                alt={CATEGORIES[0].title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-amber-200 font-semibold block mb-2">
                    {CATEGORIES[0].badge} &bull; 01
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2">
                    {CATEGORIES[0].title}
                  </h3>
                  <p className="text-xs text-neutral-200 max-w-sm hidden sm:block font-light">
                    {CATEGORIES[0].subtitle}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary-wine transition-all duration-300">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </Link>
          </div>

          {/* 2. Comforters (Cols 8-12) */}
          <div className="md:col-span-5 group relative overflow-hidden bg-neutral-100 border border-[#E5DFD5] rounded-sm aspect-[4/3] md:aspect-[16/11] shadow-sm hover:shadow-xl transition-shadow duration-500">
            <Link href="/products/comforters" className="block w-full h-full">
              <Image
                src={CATEGORIES[1].cardImage}
                alt={CATEGORIES[1].title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-amber-200 font-semibold block mb-2">
                    {CATEGORIES[1].badge} &bull; 02
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2">
                    {CATEGORIES[1].title}
                  </h3>
                  <p className="text-xs text-neutral-200 max-w-sm hidden sm:block font-light">
                    {CATEGORIES[1].subtitle}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary-wine transition-all duration-300">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </Link>
          </div>

          {/* 3. Cushion Covers (Cols 1-4) */}
          <div className="md:col-span-4 group relative overflow-hidden bg-neutral-100 border border-[#E5DFD5] rounded-sm aspect-[4/3] shadow-sm hover:shadow-xl transition-shadow duration-500">
            <Link href="/products/cushion-covers" className="block w-full h-full">
              <Image
                src={CATEGORIES[2].cardImage}
                alt={CATEGORIES[2].title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-amber-200 font-semibold block mb-1.5">
                    {CATEGORIES[2].badge} &bull; 03
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-white mb-1">
                    {CATEGORIES[2].title}
                  </h3>
                  <p className="text-xs text-neutral-200 hidden sm:block font-light">
                    {CATEGORIES[2].subtitle}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary-wine transition-all duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          </div>

          {/* 4. Curtains (Cols 5-8) */}
          <div className="md:col-span-4 group relative overflow-hidden bg-neutral-100 border border-[#E5DFD5] rounded-sm aspect-[4/3] shadow-sm hover:shadow-xl transition-shadow duration-500">
            <Link href="/products/curtains" className="block w-full h-full">
              <Image
                src={CATEGORIES[3].cardImage}
                alt={CATEGORIES[3].title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-amber-200 font-semibold block mb-1.5">
                    {CATEGORIES[3].badge} &bull; 04
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-white mb-1">
                    {CATEGORIES[3].title}
                  </h3>
                  <p className="text-xs text-neutral-200 hidden sm:block font-light">
                    {CATEGORIES[3].subtitle}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary-wine transition-all duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          </div>

          {/* 5. Soft Toys (Cols 9-12) */}
          <div className="md:col-span-4 group relative overflow-hidden bg-neutral-100 border border-[#E5DFD5] rounded-sm aspect-[4/3] shadow-sm hover:shadow-xl transition-shadow duration-500">
            <Link href="/products/soft-toys" className="block w-full h-full">
              <Image
                src={CATEGORIES[4].cardImage}
                alt={CATEGORIES[4].title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-amber-200 font-semibold block mb-1.5">
                    {CATEGORIES[4].badge} &bull; 05
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-white mb-1">
                    {CATEGORIES[4].title}
                  </h3>
                  <p className="text-xs text-neutral-200 hidden sm:block font-light">
                    {CATEGORIES[4].subtitle}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary-wine transition-all duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
