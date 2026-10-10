'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { PRODUCTS } from '../../data/products';
import { CATEGORIES } from '../../data/categories';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useCart();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filtered = query.trim() === ''
    ? []
    : PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.categoryName.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.tagline.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Search Box Card */}
      <div className="relative bg-[#121212] border border-white/15 rounded-sm max-w-2xl w-full shadow-2xl z-10 text-white overflow-hidden animate-slide-up">
        {/* Search Header */}
        <div className="p-5 border-b border-white/10 flex items-center gap-3">
          <Search size={20} className="text-luxury-gold" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search bedsheets, comforters, curtains, cushions..."
            className="bg-transparent text-sm sm:text-base text-white placeholder-neutral-500 focus:outline-none flex-grow font-sans"
          />
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="text-neutral-400 hover:text-white p-1"
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Results / Suggestions */}
        <div className="max-h-[60vh] overflow-y-auto p-5 space-y-4">
          {query.trim() === '' ? (
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-medium block mb-3 font-sans">
                POPULAR ATELIER CATEGORIES
              </span>
              <div className="grid grid-cols-2 gap-2">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/products/${cat.id}`}
                    onClick={() => setIsSearchOpen(false)}
                    className="p-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-sm transition-colors block"
                  >
                    <span className="text-sm font-serif text-white block">{cat.title}</span>
                    <span className="text-[11px] text-neutral-400 block">{cat.subtitle}</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12 text-neutral-400">
              <p className="font-serif text-lg text-white mb-1">No pieces found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs">Try searching for &quot;sateen&quot;, &quot;duvet&quot;, &quot;linen&quot;, or &quot;curtains&quot;.</p>
            </div>
          ) : (
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-sans">
                Found {filtered.length} products
              </span>
              {filtered.map((item) => (
                <Link
                  key={item.id}
                  href={`/product/${item.id}`}
                  onClick={() => setIsSearchOpen(false)}
                  className="flex items-center gap-4 p-2.5 rounded-sm hover:bg-white/5 transition-colors group"
                >
                  <div className="relative w-14 h-14 bg-neutral-900 rounded-sm overflow-hidden flex-shrink-0 border border-white/10">
                    <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-grow">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-sans block">
                      {item.categoryName}
                    </span>
                    <h4 className="text-sm font-serif text-white group-hover:text-luxury-gold transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-xs text-neutral-300 font-sans">
                      &#8377;{item.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <ArrowRight size={14} className="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
