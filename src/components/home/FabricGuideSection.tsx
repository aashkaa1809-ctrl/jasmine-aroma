'use client';

import React, { useState } from 'react';
import { Check, Sparkles, Feather, Wind, Shield } from 'lucide-react';

interface FabricDetail {
  id: string;
  name: string;
  weaveType: string;
  feel: string;
  softness: number; // 1-5
  breathability: number; // 1-5
  bestFor: string;
  description: string;
  features: string[];
}

export const FabricGuideSection: React.FC = () => {
  const [selectedFabric, setSelectedFabric] = useState<string>('sateen');

  const fabrics: FabricDetail[] = [
    {
      id: 'sateen',
      name: '500TC Organic Sateen',
      weaveType: 'Four-Over-One Sateen Weave',
      feel: 'Luminous, buttery-smooth & draped',
      softness: 5,
      breathability: 4,
      bestFor: 'Sleepers seeking silk-like luxury and gentle evening warmth.',
      description: 'Crafted from certified organic long-staple combed cotton yarns. The unique four-over-one weave structure exposes more thread surface, creating an ethereal sheen and whisper-soft touch on the skin.',
      features: [
        'Single-ply long staple yarns (500 Thread Count)',
        'Resistant to pilling and friction wash after wash',
        'Subtle botanical wash prevents stiffness'
      ]
    },
    {
      id: 'percale',
      name: 'Crisp Hotel Percale',
      weaveType: 'One-Over-One Classic Weave',
      feel: 'Crisp, lightweight, matte & ultra-breathable',
      softness: 4,
      breathability: 5,
      bestFor: 'Warm sleepers and lovers of classic five-star hotel linen.',
      description: 'The definitive summer and temperate weave. With a simple grid-like crossweave, air circulates continuously through the cotton lattice, preventing night sweats and heat build-up.',
      features: [
        'Pure 400 Thread Count combed cotton',
        'Matte linen finish that gets softer over time',
        'Maximum airflow for temperate regulation'
      ]
    },
    {
      id: 'flax-linen',
      name: 'Belgian Flax Linen',
      weaveType: 'Heavyweight Pure Flax Slub Weave',
      feel: 'Textured, grounded, relaxed & naturally insulating',
      softness: 4,
      breathability: 5,
      bestFor: 'Effortless bohemian-editorial bedroom aesthetics and curtain drapery.',
      description: 'Spun from European flax fields. Linen is one of nature’s strongest natural fibers—naturally hypoallergenic, antimicrobial, and capable of holding moisture without feeling wet.',
      features: [
        'Heavyweight 320–380 GSM fabric density',
        'Natural irregular slub yarns for organic depth',
        'Naturally thermoregulating in winter and summer'
      ]
    },
    {
      id: 'cloud-fill',
      name: 'Cloud Micro-Clusters',
      weaveType: 'Baffle-Chambered Micro-Fill',
      feel: 'Weightless, lofty, enveloping & plush',
      softness: 5,
      breathability: 4,
      bestFor: 'All-season duvets and comforters without heavy pressure.',
      description: 'Engineered as a cruelty-free, hypoallergenic alternative to traditional goose down. Micro-cloud clusters provide three-dimensional bounce and even thermal retention.',
      features: [
        'Even fill distribution with 12" baffle boxes',
        'Hypoallergenic virgin micro-clusters',
        'Machine washable and quick-recovery loft'
      ]
    }
  ];

  const current = fabrics.find((f) => f.id === selectedFabric) || fabrics[0];

  return (
    <section className="py-24 md:py-32 bg-white text-neutral-900 border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-primary-wine block mb-3 font-semibold">
            MATERIAL INTELLIGENCE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-neutral-900 mb-4">
            Find Your Ideal Weave &amp; Hand-Feel
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-sans font-light leading-relaxed">
            Compare our artisanal fabric architectures to choose the perfect pieces for your sleep preferences.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
          {fabrics.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setSelectedFabric(f.id)}
              className={`p-4 rounded-sm border text-left transition-all duration-300 ${
                selectedFabric === f.id
                  ? 'bg-[#FAF8F5] border-primary-wine shadow-md ring-1 ring-primary-wine/20'
                  : 'bg-white border-[#E8E3DA] hover:border-neutral-400 text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-primary-wine block mb-1 font-semibold">
                {f.weaveType.split(' ')[0]}
              </span>
              <span className="text-sm font-serif font-medium text-neutral-900 block">
                {f.name}
              </span>
            </button>
          ))}
        </div>

        {/* Active Fabric Breakdown Card */}
        <div className="max-w-4xl mx-auto bg-[#FAF8F5] border border-[#E8E3DA] p-8 sm:p-12 rounded-sm shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-sans tracking-[0.25em] uppercase text-primary-wine font-semibold">
                  {current.weaveType}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-neutral-900 mt-1">
                  {current.name}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">
                {current.description}
              </p>

              <div className="p-4 bg-white border border-[#E8E3DA] rounded-sm">
                <span className="text-[10.5px] uppercase tracking-[0.2em] text-primary-wine block mb-1 font-semibold">
                  RECOMMENDED FOR
                </span>
                <p className="text-xs text-neutral-700 font-light">
                  {current.bestFor}
                </p>
              </div>

              <ul className="space-y-2 pt-2">
                {current.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-neutral-700">
                    <Check size={14} className="text-primary-wine flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Rating Gauges */}
            <div className="md:col-span-5 bg-white border border-[#E8E3DA] p-6 rounded-sm space-y-6 shadow-sm">
              <h4 className="text-xs font-sans tracking-[0.25em] uppercase text-neutral-900 font-semibold border-b border-[#E8E3DA] pb-3">
                FABRIC METRICS
              </h4>

              {/* Hand feel */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-neutral-600 flex items-center gap-1.5">
                    <Feather size={14} className="text-primary-wine" /> Softness &amp; Drape
                  </span>
                  <span className="text-neutral-900 font-semibold">{current.softness} / 5</span>
                </div>
                <div className="w-full bg-[#EAE5DC] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-primary-wine h-full rounded-full transition-all duration-500"
                    style={{ width: `${(current.softness / 5) * 100}%` }}
                  />
                </div>
              </div>

              {/* Breathability */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-neutral-600 flex items-center gap-1.5">
                    <Wind size={14} className="text-primary-wine" /> Airflow &amp; Cooling
                  </span>
                  <span className="text-neutral-900 font-semibold">{current.breathability} / 5</span>
                </div>
                <div className="w-full bg-[#EAE5DC] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-primary-wine h-full rounded-full transition-all duration-500"
                    style={{ width: `${(current.breathability / 5) * 100}%` }}
                  />
                </div>
              </div>

              {/* Purity Guarantee */}
              <div className="pt-2 border-t border-[#E8E3DA] flex items-center gap-3">
                <Shield size={20} className="text-primary-wine flex-shrink-0" />
                <div className="text-[11px] text-neutral-600">
                  <span className="text-neutral-900 font-medium block">100% Non-Toxic</span>
                  Tested safe from over 300 harmful chemicals.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
