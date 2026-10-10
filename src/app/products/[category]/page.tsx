import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CATEGORIES } from '../../../data/categories';
import { PRODUCTS } from '../../../data/products';
import { ProductCard } from '../../../components/ui/ProductCard';
import { ProductCategory } from '../../../types/product';
import { Sparkles, Check, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.id,
  }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const cat = CATEGORIES.find((c) => c.id === params.category);
  if (!cat) return { title: 'Category Not Found | Jasmine Aroma' };

  return {
    title: `${cat.title} | Jasmine Aroma Atelier`,
    description: cat.description,
    openGraph: {
      title: `${cat.title} | Jasmine Aroma Atelier`,
      description: cat.description,
      images: [{ url: cat.heroImage }],
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === params.category);
  if (!category) {
    notFound();
  }

  const categoryProducts = PRODUCTS.filter((p) => p.category === category.id);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Category Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={category.heroImage}
            alt={category.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-luxury-gold mb-6 transition-colors font-sans"
          >
            <ArrowLeft size={14} />
            <span>All Collections</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-luxury-gold/30 bg-white/5 mb-4 block mx-auto w-fit">
            <Sparkles size={12} className="text-luxury-gold" />
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-neutral-200">
              {category.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4">
            {category.title}
          </h1>

          <p className="text-xs sm:text-base text-neutral-300 font-sans font-light leading-relaxed max-w-2xl mx-auto mb-8">
            {category.description}
          </p>

          {/* Key Category Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-neutral-300">
            {category.featureList.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 bg-black/50 border border-white/10 px-3.5 py-1.5 rounded-full">
                <Check size={13} className="text-luxury-gold" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Listing */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/10">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-sans">
            Displaying {categoryProducts.length} curated designs
          </span>
          <span className="text-xs text-luxury-gold font-serif">
            Free Express Shipping on Orders Above &#8377;3,000
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} aspectRatio="portrait" />
          ))}
        </div>
      </section>
    </div>
  );
}
