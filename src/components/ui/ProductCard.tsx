'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../../types/product';
import { Eye, ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  aspectRatio?: 'portrait' | 'square';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  aspectRatio = 'portrait'
}) => {
  const { addToCart, setQuickViewProduct } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  return (
    <div className="group flex flex-col bg-white p-3.5 rounded-md border border-[#E8E3DA] shadow-sm hover:shadow-md transition-all duration-300">
      {/* Product Image Container */}
      <div
        className={`relative overflow-hidden bg-[#F5F1EB] rounded-sm border border-[#EFEBE4] ${
          aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
        }`}
      >
        <Link href={`/product/${product.id}`} className="block w-full h-full">
          {/* Primary Image */}
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Secondary Hover Image if available */}
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt={`${product.name} alternate view`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center transition-opacity duration-700 opacity-0 group-hover:opacity-100"
            />
          )}
        </Link>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block bg-neutral-900/85 backdrop-blur-md text-white text-[9px] font-sans uppercase tracking-[0.2em] px-2.5 py-1 rounded-sm font-semibold shadow-sm">
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick Action Overlay Buttons on Desktop */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
          <button
            type="button"
            onClick={handleQuickView}
            className="flex-1 bg-white/95 hover:bg-white text-neutral-900 text-[10.5px] uppercase tracking-[0.18em] py-2 px-3 border border-[#E0D8CC] shadow-md flex items-center justify-center gap-1.5 transition-colors font-medium rounded-sm"
          >
            <Eye size={13} className="text-neutral-700" />
            <span>Quick View</span>
          </button>
          <button
            type="button"
            onClick={handleQuickAdd}
            className="bg-neutral-900 hover:bg-primary-wine text-white p-2.5 shadow-md transition-colors flex items-center justify-center rounded-sm"
            aria-label="Add to bag"
          >
            <ShoppingBag size={14} />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="pt-3.5 flex flex-col space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500 font-sans font-semibold">
            {product.categoryName}
          </span>
          <div className="flex items-center gap-1 text-[11px] text-amber-700 font-medium">
            <Star size={11} fill="currentColor" stroke="none" />
            <span>{product.rating.toFixed(1)}</span>
          </div>
        </div>

        <Link
          href={`/product/${product.id}`}
          className="text-sm font-serif font-medium text-neutral-900 hover:text-primary-wine transition-colors line-clamp-1"
        >
          {product.name}
        </Link>

        <p className="text-xs text-neutral-500 line-clamp-1 font-sans font-light">
          {product.tagline}
        </p>

        {/* Price & Colors */}
        <div className="flex items-center justify-between pt-1.5">
          <div className="flex items-center gap-2">
            <span className="text-sm font-sans font-bold text-neutral-900">
              &#8377;{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-xs font-sans text-neutral-400 line-through">
                &#8377;{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Color Swatch Dots */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center space-x-1.5">
              {product.colors.slice(0, 3).map((c, i) => (
                <span
                  key={i}
                  title={c.name}
                  className="w-2.5 h-2.5 rounded-full border border-neutral-300 shadow-xs"
                  style={{ backgroundColor: c.hex }}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="text-[9px] text-neutral-500 font-sans">
                  +{product.colors.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
