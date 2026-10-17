'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      quote: "The 500TC organic sateen bedsheets feel like pure silk with none of the fragile maintenance hassle. Waking up feels like being at an Italian boutique villa every morning.",
      author: "Elena Rostova",
      title: "Architect & Interior Stylist",
      location: "Mumbai",
      product: "500TC Organic Sateen Sheet Set"
    },
    {
      quote: "Our bedroom looks completely transformed. The blackout linen curtains drape with incredible weight, and the thermal insulation blocks out the harsh afternoon sun effortlessly.",
      author: "Marcus Thorne",
      title: "Design Director",
      location: "Bengaluru",
      product: "Flax Linen Blackout Curtain Panel"
    },
    {
      quote: "The Cloud Comforter is the lightest yet most enveloping quilt we have ever slept under. It breathes naturally through humid monsoon and cool winter evenings alike.",
      author: "Sophie Claire",
      title: "Hospitality Curator",
      location: "New Delhi",
      product: "Cloud All-Season Comforter"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5] text-neutral-900 border-b border-[#E8E3DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary-wine block mb-3 font-semibold">
            CLIENT PERSPECTIVES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-neutral-900 mb-4">
            Loved by Designers &amp; Mindful Sleepers
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-sans font-light leading-relaxed">
            Authentic reflections from homeowners and interior stylists who elevated their living sanctuaries with Jasmine Aroma.
          </p>
        </div>

        {/* Testimonials 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-white border border-[#E8E3DA] p-8 rounded-sm relative flex flex-col justify-between hover:border-primary-wine/40 hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1 text-luxury-gold">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={13} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <Quote size={20} className="text-primary-wine/20" />
                </div>

                <p className="text-sm sm:text-base font-serif italic text-neutral-700 leading-relaxed mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-[#E8E3DA]">
                <p className="text-sm font-sans font-semibold text-neutral-900">
                  {rev.author}
                </p>
                <p className="text-xs text-neutral-500 font-sans">
                  {rev.title} &bull; {rev.location}
                </p>
                <span className="inline-block mt-2 text-[10px] text-primary-wine tracking-[0.15em] uppercase font-semibold font-sans">
                  Verified: {rev.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
