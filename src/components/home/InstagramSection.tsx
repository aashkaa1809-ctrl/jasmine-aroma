'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, ArrowUpRight } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const posts = [
    {
      image: '/assets/products/bedsheet-luxury-white.jpg',
      caption: 'Morning sun over the Hand Block Printed Cotton Bedsheet in Sanctuary Ivory #JasmineAroma'
    },
    {
      image: '/assets/products/comforter-cozy-refresh.jpg',
      caption: 'Cloud loft weightlessness with the Cozy Refresh Comforter for restorative weekends #SlowLiving'
    },
    {
      image: '/assets/products/cushion-decorative-flax.jpg',
      caption: 'Artisanal decorative flax linen shams in natural earth tones #HomeStyling'
    },
    {
      image: '/assets/products/curtains-pinch-pleat-beige.jpg',
      caption: 'Pinch pleat classic linen drapes diffusing golden hour light #InteriorDecor'
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-luxury-gold block mb-2 font-medium">
              EDITORIAL COMMUNITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white">
              Follow Our Sanctuary Journey
            </h2>
          </div>
          <a
            href="https://www.instagram.com/jasmine.aroma_/?hl=en#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-luxury-gold hover:text-white transition-colors mt-4 sm:mt-0"
          >
            <Instagram size={16} />
            <span>@jasmine.aroma_</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* 4-Column Instagram Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post, i) => (
            <a
              key={i}
              href="https://www.instagram.com/jasmine.aroma_/?hl=en#"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-neutral-900 overflow-hidden rounded-sm border border-white/10 block"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                <div className="flex justify-end text-luxury-gold">
                  <Instagram size={20} />
                </div>
                <p className="text-[11px] text-white font-sans line-clamp-3 leading-snug">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
