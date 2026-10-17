'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '../../data/products';
import { CATEGORIES } from '../../data/categories';
import { ProductCard } from '../../components/ui/ProductCard';
import { ProductCategory } from '../../types/product';
import { SlidersHorizontal, ArrowUpDown, Sparkles } from 'lucide-react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [priceFilter, setPriceFilter] = useState<number>(12000);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result = result.filter((p) => p.price <= priceFilter);

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, sortBy, priceFilter]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-neutral-900 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary-wine/30 bg-primary-wine/5 mb-4">
            <Sparkles size={12} className="text-primary-wine" />
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-primary-wine font-semibold">
              COMPLETE ATELIER ARCHIVE
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-neutral-900 mb-4">
            The Complete Collection
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 font-sans font-light leading-relaxed">
            Meticulously crafted organic bedding, all-season comforters, Belgian linen cushions, architectural blackout curtains, and heirloom nursery companions.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 space-x-2 sm:space-x-3 no-scrollbar">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2 rounded-full text-xs font-sans uppercase tracking-[0.2em] transition-all ${
              selectedCategory === 'all'
                ? 'bg-neutral-900 text-white font-medium shadow-sm'
                : 'bg-white border border-[#E8E3DA] text-neutral-600 hover:text-neutral-900 hover:border-neutral-400'
            }`}
          >
            All Products ({PRODUCTS.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = PRODUCTS.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-sans uppercase tracking-[0.2em] transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-neutral-900 text-white font-medium shadow-sm'
                    : 'bg-white border border-[#E8E3DA] text-neutral-600 hover:text-neutral-900 hover:border-neutral-400'
                }`}
              >
                {cat.title} ({count})
              </button>
            );
          })}
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-b border-[#E8E3DA] py-4 mb-10 gap-4 bg-white/50 px-4 rounded-sm">
          <div className="flex items-center gap-2 text-xs text-neutral-600 font-sans">
            <SlidersHorizontal size={14} className="text-primary-wine" />
            <span>Showing <strong className="text-neutral-900">{filteredProducts.length}</strong> sanctuary pieces</span>
          </div>

          <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
            {/* Price Filter Slider */}
            <div className="flex items-center gap-3 text-xs text-neutral-600">
              <span className="hidden md:inline">Max: &#8377;{priceFilter.toLocaleString('en-IN')}</span>
              <input
                type="range"
                min="1000"
                max="12000"
                step="500"
                value={priceFilter}
                onChange={(e) => setPriceFilter(Number(e.target.value))}
                className="w-24 sm:w-32 accent-primary-wine cursor-pointer"
              />
            </div>

            {/* Sort Select */}
            <div className="flex items-center gap-2 text-xs">
              <ArrowUpDown size={13} className="text-neutral-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-[#E8E3DA] px-3 py-1.5 text-xs text-neutral-900 focus:outline-none focus:border-primary-wine rounded-sm shadow-sm"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-sm border border-[#E8E3DA] shadow-sm">
            <p className="font-serif text-xl text-neutral-900 mb-2">No pieces match your selected filter.</p>
            <p className="text-xs text-neutral-500 mb-6">Try broadening your price or category selections.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setPriceFilter(12000);
              }}
              className="px-6 py-2.5 bg-neutral-900 hover:bg-primary-wine text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors rounded-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} aspectRatio="portrait" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
