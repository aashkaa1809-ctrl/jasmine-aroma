'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Star, ShoppingBag, Check, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const currentColor = selectedColor || (product.colors && product.colors[0]?.name) || '';
  const currentSize = selectedSize || (product.sizes && product.sizes[0]?.name) || '';

  const activeSizeObj = product.sizes?.find(s => s.name === currentSize);
  const currentPrice = activeSizeObj ? activeSizeObj.price : product.price;

  const handleAdd = () => {
    addToCart(product, currentColor, currentSize, quantity);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Card */}
      <div className="relative bg-white border border-[#E8E3DA] rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 text-neutral-900 animate-scale-in">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 text-neutral-500 hover:text-neutral-900 p-2 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Gallery */}
          <div className="p-6 md:p-8 flex flex-col justify-between bg-[#FAF8F5] border-b md:border-b-0 md:border-r border-[#E8E3DA]">
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden bg-white border border-[#E8E3DA] mb-4">
              <Image
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-white/95 text-neutral-900 text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 border border-[#E8E3DA] font-semibold">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-1">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative w-16 h-16 rounded-sm overflow-hidden border flex-shrink-0 transition-all ${
                      activeImageIndex === i ? 'border-primary-wine ring-1 ring-primary-wine' : 'border-[#E8E3DA] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Product Info */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-sans uppercase tracking-[0.25em] text-primary-wine font-semibold">
                  {product.categoryName}
                </span>
                <div className="flex items-center gap-1 text-luxury-gold">
                  <Star size={12} fill="currentColor" stroke="none" />
                  <span className="text-xs font-semibold text-neutral-900">{product.rating.toFixed(1)}</span>
                  <span className="text-neutral-500">({product.reviewCount})</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-2">
                {product.name}
              </h2>

              <p className="text-xs text-neutral-600 font-sans leading-relaxed mb-4">
                {product.description}
              </p>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-2xl font-sans font-semibold text-neutral-900">
                  &#8377;{currentPrice.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm font-sans text-neutral-400 line-through">
                    &#8377;{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-5">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-neutral-600 font-sans uppercase tracking-[0.15em]">
                      Color: <span className="text-neutral-900 font-semibold">{currentColor}</span>
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-7 h-7 rounded-full border-2 transition-transform flex items-center justify-center ${
                          currentColor === c.name ? 'border-primary-wine scale-110 shadow-sm' : 'border-neutral-300'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      >
                        {currentColor === c.name && (
                          <Check size={12} className={c.hex === '#FFFFFF' || c.hex === '#FAF5EC' ? 'text-black' : 'text-white'} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-5">
                  <span className="text-xs text-neutral-600 font-sans uppercase tracking-[0.15em] block mb-2">
                    Size: <span className="text-neutral-900 font-semibold">{currentSize}</span>
                  </span>
                  <div className="space-y-2">
                    {product.sizes.map((s) => (
                      <button
                        key={s.name}
                        type="button"
                        onClick={() => setSelectedSize(s.name)}
                        className={`w-full p-2.5 rounded-sm border text-left text-xs transition-colors flex items-center justify-between ${
                          currentSize === s.name
                            ? 'bg-[#FAF8F5] border-primary-wine text-neutral-900 font-medium'
                            : 'bg-white border-[#E8E3DA] text-neutral-600 hover:text-neutral-900 hover:border-neutral-400'
                        }`}
                      >
                        <span>{s.name}</span>
                        <span className="font-semibold text-neutral-900">&#8377;{s.price.toLocaleString('en-IN')}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs uppercase tracking-[0.15em] text-neutral-600 font-sans">
                  Quantity:
                </span>
                <div className="flex items-center border border-[#E8E3DA] rounded-sm bg-[#FAF8F5]">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-sm text-neutral-600 hover:text-neutral-900"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-xs font-sans font-semibold text-neutral-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-sm text-neutral-600 hover:text-neutral-900"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-3 pt-4 border-t border-[#E8E3DA]">
              <button
                type="button"
                onClick={handleAdd}
                className="w-full bg-neutral-900 hover:bg-primary-wine text-white py-3.5 text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-2 shadow-sm transition-all rounded-sm"
              >
                <ShoppingBag size={15} />
                <span>Add to Bag &bull; &#8377;{(currentPrice * quantity).toLocaleString('en-IN')}</span>
              </button>

              <Link
                href={`/product/${product.id}`}
                onClick={() => setQuickViewProduct(null)}
                className="w-full block text-center text-xs uppercase tracking-[0.2em] text-neutral-600 hover:text-neutral-900 py-2 transition-colors font-medium"
              >
                View Full Specifications &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
