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
    <div className="min-h-screen bg-[#FAF8F5] text-neutral-900">
      {/* Category Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-white border-b border-[#E8E3DA]">
        <div className="absolute inset-0 z-0">
          <Image
            src={category.heroImage}
            alt={category.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-500 hover:text-primary-wine mb-6 transition-colors font-sans font-medium"
          >
            <ArrowLeft size={14} />
            <span>All Collections</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary-wine/30 bg-primary-wine/5 mb-4 block mx-auto w-fit">
            <Sparkles size={12} className="text-primary-wine" />
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-primary-wine font-semibold">
              {category.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-neutral-900 mb-4">
            {category.title}
          </h1>

          <p className="text-xs sm:text-base text-neutral-600 font-sans font-light leading-relaxed max-w-2xl mx-auto mb-8">
            {category.description}
          </p>

          {/* Key Category Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-neutral-700">
            {category.featureList.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/90 border border-[#E8E3DA] px-4 py-1.5 rounded-full shadow-sm">
                <Check size={13} className="text-primary-wine" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Listing */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#E8E3DA]">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-sans font-medium">
            Displaying {categoryProducts.length} curated designs
          </span>
          <span className="text-xs text-primary-wine font-serif font-medium">
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
