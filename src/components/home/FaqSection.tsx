'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What mattress depth do your fitted bedsheets accommodate?',
      answer: 'Our fitted bedsheets feature extra-deep 16-inch to 18-inch pockets with continuous 360-degree high-resilience elastic. This ensures a snug, non-slip fit on standard mattresses as well as luxury pillow-top and hybrid configurations without corner snapping.'
    },
    {
      question: 'What is the real difference between Sateen and Percale bedsheets?',
      answer: 'Sateen utilizes a four-over-one weave structure that exposes more surface thread, giving it a luminous sheen, silky hand-feel, and gentle drape. Percale uses a traditional one-over-one grid weave with a crisp, matte, cool-to-the-touch finish that offers exceptional breathability for warm sleepers.'
    },
    {
      question: 'How do I choose the right curtain length for my windows?',
      answer: 'For a tailored floor-kissing look, measure from the curtain rod straight to the floor and order that exact length. For an editorial "puddle effect" where the linen gathers luxuriously on the floor, add 2 to 3 inches to your measurement. All our curtains include a 3-in-1 header compatible with rod pockets, back tabs, and pinch-pleat hooks.'
    },
    {
      question: 'How do I care for and wash Jasmine Aroma organic textiles?',
      answer: 'Machine wash in cold or lukewarm water on a gentle cycle using a mild, plant-based liquid detergent. Avoid chlorine bleach, synthetic fabric softeners, or harsh optical brighteners. Tumble dry on low heat or line-dry in shade to preserve the delicate organic cotton and linen fibers for years.'
    },
    {
      question: 'Are your fabrics genuinely certified non-toxic and organic?',
      answer: 'Yes. Our bedsheets and textiles carry GOTS (Global Organic Textile Standard) certification and OEKO-TEX Standard 100 certification. This guarantees zero toxic dyes, formaldehyde resin finishes, or pesticide residues from the cotton field to your bedroom.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-white text-neutral-900 border-t border-[#E8E3DA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary-wine block mb-3 font-semibold">
            CONCIERGE CLARITY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-neutral-900 mb-4">
            Frequently Asked Inquiries
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-sans font-light leading-relaxed">
            Essential details regarding thread counts, pocket depths, curtain sizing, and organic fabric care.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#E8E3DA] rounded-sm bg-[#FAF8F5] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif text-neutral-900 font-medium">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#E8E3DA] bg-white flex items-center justify-center text-primary-wine flex-shrink-0 transition-colors shadow-sm">
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-neutral-700 font-sans font-light leading-relaxed border-t border-[#E8E3DA] pt-4 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
