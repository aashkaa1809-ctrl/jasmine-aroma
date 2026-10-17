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
    <section id="featured-collection" className="py-20 md:py-28 bg-[#FAF8F5] text-neutral-900 border-t border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary-wine block mb-2 font-bold">
            ATELIER SELECTION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-neutral-900 mb-3">
            Most Cherished Living Pieces
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-sans font-light leading-relaxed">
            Discover the top-rated luxury pieces preferred by interior stylists and restful sleepers.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-10 space-x-2 sm:space-x-3 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveCategory(cat.value)}
                className={`whitespace-nowrap px-5 py-2 text-xs font-sans uppercase tracking-[0.18em] transition-all duration-300 rounded-full border ${
                  isActive
                    ? 'bg-neutral-900 text-white border-neutral-900 font-semibold shadow-md'
                    : 'bg-white text-neutral-700 border-[#DDD7CD] hover:border-neutral-500 hover:text-neutral-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} aspectRatio="portrait" />
          ))}
        </div>

        {/* Bottom CTA to View All */}
        <div className="mt-14 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-white border border-[#D5CDC0] hover:border-primary-wine text-neutral-900 hover:text-primary-wine text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 group shadow-sm hover:shadow"
          >
            <span>Explore Complete Atelier Catalogue ({PRODUCTS.length})</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
