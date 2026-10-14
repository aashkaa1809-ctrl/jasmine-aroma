'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '../../../data/products';
import { ProductCard } from '../../../components/ui/ProductCard';
import { useCart } from '../../../context/CartContext';
import {
  Star,
  ShoppingBag,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ArrowLeft,
  MessageCircle,
  HelpCircle
} from 'lucide-react';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = PRODUCTS.find((p) => p.id === params.id || p.slug === params.id);
  const { addToCart, setIsCartOpen } = useCart();

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string>(
    product?.colors?.[0]?.name || ''
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product?.sizes?.[0]?.name || ''
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'care' | 'story'>('specs');

  if (!product) {
    notFound();
  }

  const activeSizeObj = product.sizes?.find((s) => s.name === selectedSize);
  const currentPrice = activeSizeObj ? activeSizeObj.price : product.price;

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
  };

  const handleWhatsAppInquiry = () => {
    const text = `Hello Jasmine Aroma,\n\nI am interested in:\n- ${product.name}\n- Size: ${selectedSize || 'Default'}\n- Color: ${selectedColor || 'Default'}\n- Quantity: ${quantity}\n- Price: ₹${(currentPrice * quantity).toLocaleString('en-IN')}\n\nCan you share fabric availability and delivery timeline?`;
    window.open(`https://wa.me/918307369611?text=${encodeURIComponent(text)}`, '_blank');
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-28 sm:pt-32 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-xs text-neutral-400 mb-8 font-sans">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <span>/</span>
          <Link href={`/products/${product.category}`} className="hover:text-white transition-colors">
            {product.categoryName}
          </Link>
          <span>/</span>
          <span className="text-luxury-gold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Gallery Left (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div className="relative aspect-[4/5] bg-neutral-900 rounded-sm overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-all duration-500"
              />
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/80 backdrop-blur-md border border-white/20 text-white text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 font-medium">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails Row */}
            {product.images.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative w-20 h-24 rounded-sm overflow-hidden border transition-all flex-shrink-0 ${
                      activeImageIndex === i
                        ? 'border-luxury-gold ring-1 ring-luxury-gold'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="Thumb" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Purchasing Info (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-luxury-gold uppercase tracking-[0.25em] font-medium">
                  {product.categoryName}
                </span>
                <div className="flex items-center gap-1.5 text-luxury-gold">
                  <Star size={13} fill="currentColor" stroke="none" />
                  <span className="text-xs font-medium">{product.rating.toFixed(1)}</span>
                  <span className="text-neutral-400">({product.reviewCount} reviews)</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-serif text-white mb-2 leading-tight">
                {product.name}
              </h1>

              <p className="text-xs text-neutral-300 font-sans font-light leading-relaxed">
                {product.tagline}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 pb-6 border-b border-white/10">
              <span className="text-3xl font-sans font-medium text-white">
                &#8377;{currentPrice.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-base font-sans text-neutral-500 line-through">
                  &#8377;{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span className="text-[11px] text-green-400 bg-green-950/40 border border-green-800/40 px-2 py-0.5 rounded ml-2">
                In Stock &bull; Ready for Atelier Dispatch
              </span>
            </div>

            {/* Color Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-400 uppercase tracking-[0.15em]">
                    Color Tone: <strong className="text-white">{selectedColor}</strong>
                  </span>
                </div>
                <div className="flex space-x-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                        selectedColor === c.name ? 'border-luxury-gold scale-110 shadow-lg' : 'border-white/10'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {selectedColor === c.name && (
                        <Check
                          size={13}
                          className={c.hex === '#FFFFFF' || c.hex === '#FAF5EC' ? 'text-black' : 'text-white'}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Options */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-400 uppercase tracking-[0.15em]">
                    Dimensions &amp; Configuration:
                  </span>
                </div>
                <div className="space-y-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s.name}
                      type="button"
                      onClick={() => setSelectedSize(s.name)}
                      className={`w-full p-3 rounded-sm border text-left text-xs transition-all flex items-center justify-between ${
                        selectedSize === s.name
                          ? 'bg-[#1a1a1a] border-luxury-gold text-white shadow-md'
                          : 'bg-black/30 border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      <div>
                        <span className="font-medium text-white block">{s.name}</span>
                        <span className="text-[11px] text-neutral-400">{s.dimensions}</span>
                      </div>
                      <span className="text-sm font-sans font-medium text-white">
                        &#8377;{s.price.toLocaleString('en-IN')}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & CTA Buttons */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-white/20 rounded-sm">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-sm text-neutral-400 hover:text-white"
                  >
                    -
                  </button>
                  <span className="px-4 py-3 text-xs font-sans font-medium text-white">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-sm text-neutral-400 hover:text-white"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-grow bg-white hover:bg-luxury-gold text-black py-3.5 px-6 text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-2 shadow-2xl transition-all"
                >
                  <ShoppingBag size={15} />
                  <span>Add to Bag &bull; &#8377;{(currentPrice * quantity).toLocaleString('en-IN')}</span>
                </button>
              </div>

              {/* WhatsApp Concierge Order */}
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="w-full border border-green-600/50 hover:bg-green-600/10 text-green-400 py-3 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-colors rounded-sm"
              >
                <MessageCircle size={15} />
                <span>Order Directly via WhatsApp Concierge</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 text-center">
              <div className="p-2.5 bg-white/5 rounded-sm">
                <Truck size={16} className="text-luxury-gold mx-auto mb-1" />
                <span className="text-[10px] text-neutral-300 block font-medium">Express Dispatch</span>
                <span className="text-[9px] text-neutral-500">2-4 business days</span>
              </div>
              <div className="p-2.5 bg-white/5 rounded-sm">
                <RotateCcw size={16} className="text-luxury-gold mx-auto mb-1" />
                <span className="text-[10px] text-neutral-300 block font-medium">30-Night Trial</span>
                <span className="text-[9px] text-neutral-500">Restful sleep guarantee</span>
              </div>
              <div className="p-2.5 bg-white/5 rounded-sm">
                <ShieldCheck size={16} className="text-luxury-gold mx-auto mb-1" />
                <span className="text-[10px] text-neutral-300 block font-medium">Non-Toxic</span>
                <span className="text-[9px] text-neutral-500">GOTS &amp; OEKO-TEX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Specifications & Story Tabs */}
        <div className="mt-24 border-t border-white/10 pt-12">
          <div className="flex border-b border-white/10 mb-8 space-x-8">
            <button
              type="button"
              onClick={() => setActiveTab('specs')}
              className={`pb-4 text-xs font-sans uppercase tracking-[0.25em] transition-colors relative ${
                activeTab === 'specs' ? 'text-luxury-gold font-medium' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Specifications &amp; Weave
              {activeTab === 'specs' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-luxury-gold" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('care')}
              className={`pb-4 text-xs font-sans uppercase tracking-[0.25em] transition-colors relative ${
                activeTab === 'care' ? 'text-luxury-gold font-medium' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Wash &amp; Care Rituals
              {activeTab === 'care' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-luxury-gold" />
              )}
            </button>
            {product.story && (
              <button
                type="button"
                onClick={() => setActiveTab('story')}
                className={`pb-4 text-xs font-sans uppercase tracking-[0.25em] transition-colors relative ${
                  activeTab === 'story' ? 'text-luxury-gold font-medium' : 'text-neutral-400 hover:text-white'
                }`}
              >
                The Artisan Story
                {activeTab === 'story' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-luxury-gold" />
                )}
              </button>
            )}
          </div>

          {/* Tab 1: Specs */}
          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#121212] p-8 rounded-sm border border-white/10 animate-fade-in">
              <div className="space-y-4">
                <h3 className="text-base font-serif text-white mb-2">Technical Matrix</h3>
                <dl className="space-y-3 text-xs">
                  {product.specifications.material && (
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <dt className="text-neutral-400">Material</dt>
                      <dd className="text-white font-medium text-right">{product.specifications.material}</dd>
                    </div>
                  )}
                  {product.specifications.weave && (
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <dt className="text-neutral-400">Weave Structure</dt>
                      <dd className="text-white font-medium text-right">{product.specifications.weave}</dd>
                    </div>
                  )}
                  {product.specifications.threadCount && (
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <dt className="text-neutral-400">Thread Count</dt>
                      <dd className="text-white font-medium text-right">{product.specifications.threadCount}</dd>
                    </div>
                  )}
                  {product.specifications.pocketDepth && (
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <dt className="text-neutral-400">Mattress Pocket Depth</dt>
                      <dd className="text-white font-medium text-right">{product.specifications.pocketDepth}</dd>
                    </div>
                  )}
                  {product.specifications.fill && (
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <dt className="text-neutral-400">Core Fill</dt>
                      <dd className="text-white font-medium text-right">{product.specifications.fill}</dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-serif text-white mb-2">Certifications &amp; Highlights</h3>
                <ul className="space-y-2.5 text-xs text-neutral-300">
                  {product.highlights?.map((h, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check size={14} className="text-luxury-gold flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                  {product.specifications.certifications?.map((c, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Sparkles size={14} className="text-luxury-gold flex-shrink-0" />
                      <span>Certified: {c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 2: Care */}
          {activeTab === 'care' && (
            <div className="bg-[#121212] p-8 rounded-sm border border-white/10 animate-fade-in space-y-4">
              <h3 className="text-base font-serif text-white">Recommended Preservation Rituals</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                To maintain the silky hand-feel and integrity of the organic fibers over decades, please follow these simple laundering instructions:
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-300 pt-2">
                {product.specifications.careInstructions?.map((inst, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <Check size={14} className="text-luxury-gold flex-shrink-0" />
                    <span>{inst}</span>
                  </li>
                )) || (
                  <li className="text-xs text-neutral-400">
                    Machine wash cold with mild detergent. Tumble dry gentle on low heat.
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Tab 3: Story */}
          {activeTab === 'story' && product.story && (
            <div className="bg-[#121212] p-8 rounded-sm border border-white/10 animate-fade-in space-y-3">
              <h3 className="text-base font-serif text-white">From the Atelier Master</h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-serif italic">
                &ldquo;{product.story}&rdquo;
              </p>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-28 border-t border-white/10 pt-16">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-xs font-sans tracking-[0.3em] uppercase text-luxury-gold block mb-2 font-medium">
                  COMPLETE YOUR SANCTUARY
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-white">
                  Related Atelier Pieces
                </h2>
              </div>
              <Link
                href={`/products/${product.category}`}
                className="text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
              >
                View Category &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} aspectRatio="portrait" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
