'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../ui/ProductCard';
import { ProductCategory } from '../../types/product';
import { ArrowRight } from 'lucide-react';

export const FeaturedShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories: { label: string; value: string }[] = [
    { label: 'All Pieces', value: 'all' },
    { label: 'Bedsheets', value: 'bedsheets' },
    { label: 'Comforters', value: 'comforters' },
    { label: 'Cushion Covers', value: 'cushion-covers' },
    { label: 'Curtains', value: 'curtains' },
    { label: 'Soft Toys', value: 'soft-toys' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="featured-collection" className="py-24 md:py-32 bg-[#0E0E0E] text-white border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-luxury-gold block mb-3 font-medium">
            ATELIER SELECTION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white mb-4">
            Most Cherished Living Pieces
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans font-light leading-relaxed">
            Discover the top-rated luxury pieces preferred by interior stylists and restful sleepers.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-12 space-x-2 sm:space-x-4 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveCategory(cat.value)}
                className={`whitespace-nowrap px-5 py-2.5 text-xs font-sans uppercase tracking-[0.2em] transition-all duration-300 rounded-full border ${
                  isActive
                    ? 'bg-white text-black border-white font-medium shadow-lg'
                    : 'bg-transparent text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} aspectRatio="portrait" />
          ))}
        </div>

        {/* Bottom CTA to View All */}
        <div className="mt-16 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-luxury-gold text-white hover:text-luxury-gold text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 group"
          >
            <span>Explore Complete Atelier Catalogue ({PRODUCTS.length})</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
