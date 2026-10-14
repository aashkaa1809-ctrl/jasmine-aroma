'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '../ui/Logo';
import { CATEGORIES } from '../../data/categories';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-[#080808] border-t border-white/10 text-neutral-300 font-sans">
      {/* Top Banner / Features Bar */}
      <div className="border-b border-white/5 py-10 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-luxury-gold">
                <Sparkles size={18} />
              </div>
              <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-white">
                100% Organic Cotton
              </h4>
              <p className="text-xs text-neutral-400">
                GOTS &amp; OEKO-TEX Standard 100 certified non-toxic fibers.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-luxury-gold">
                <ShieldCheck size={18} />
              </div>
              <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-white">
                30-Night Sleep Trial
              </h4>
              <p className="text-xs text-neutral-400">
                Experience the calm and softness in your home with effortless returns.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-luxury-gold">
                <Heart size={18} />
              </div>
              <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-white">
                Atelier Craftsmanship
              </h4>
              <p className="text-xs text-neutral-400">
                Loomed by master weavers with single-ply high tensile yarn.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-luxury-gold">
                <ArrowRight size={18} />
              </div>
              <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-white">
                Styling Concierge
              </h4>
              <p className="text-xs text-neutral-400">
                Complimentary room makeover advice &amp; fabric swatch kits.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="light" size="lg" />
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Jasmine Aroma crafts sensory luxury textiles for the intentional home. From botanical-infused sateen bedsheets to Belgian linen blackout drapes, each piece is designed to make rest feel like a sacred ritual.
            </p>
            
            {/* Newsletter */}
            <div className="pt-2">
              <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-luxury-gold block mb-2 font-medium">
                THE SANCTUARY CIRCLE
              </span>
              <p className="text-xs text-neutral-400 mb-3">
                Receive private seasonal previews and sleep wellness guides.
              </p>
              {isSubscribed ? (
                <div className="flex items-center gap-2 text-xs text-green-400 py-2.5">
                  <CheckCircle2 size={16} />
                  <span>Welcome to The Sanctuary Circle.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex max-w-md">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-luxury-gold flex-grow transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-white hover:bg-luxury-gold text-black hover:text-black px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Collections Column */}
          <div>
            <h4 className="text-xs font-sans tracking-[0.25em] uppercase text-white font-medium mb-5">
              COLLECTIONS
            </h4>
            <ul className="space-y-3 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products/${cat.id}`}
                    className="text-neutral-400 hover:text-luxury-gold transition-colors block py-0.5"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-luxury-gold hover:text-white transition-colors block pt-1"
                >
                  View Complete Atelier &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Brand / Company Column */}
          <div>
            <h4 className="text-xs font-sans tracking-[0.25em] uppercase text-white font-medium mb-5">
              THE ATELIER
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-luxury-gold transition-colors block py-0.5">
                  Our Brand Philosophy
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-luxury-gold transition-colors block py-0.5">
                  Fabric &amp; Loom Standards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-luxury-gold transition-colors block py-0.5">
                  Interior Designer Trade Program
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-luxury-gold transition-colors block py-0.5">
                  Complimentary Fabric Swatches
                </Link>
              </li>
            </ul>
          </div>

          {/* Concierge / Contact Column */}
          <div>
            <h4 className="text-xs font-sans tracking-[0.25em] uppercase text-white font-medium mb-5">
              CONCIERGE CARE
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <p>
                <span className="text-white block font-medium">Customer Support:</span>
                <a href="mailto:contact@jasminearoma.in" className="hover:text-white transition-colors">
                  contact@jasminearoma.in
                </a>
              </p>
              <p>
                <span className="text-white block font-medium">Phone &amp; WhatsApp:</span>
                <a href="tel:+918307369611" className="hover:text-white transition-colors">
                  +91 83073 69611
                </a>
              </p>
              <p>
                <span className="text-white block font-medium">Instagram:</span>
                <a
                  href="https://www.instagram.com/jasmine.aroma_/?hl=en#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-luxury-gold hover:underline"
                >
                  @jasmine.aroma_
                </a>
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block border border-white/20 hover:border-luxury-gold text-white hover:text-luxury-gold text-[10.5px] uppercase tracking-[0.2em] px-4 py-2 transition-colors"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Jasmine Aroma. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <span>Luxury Home Décor &bull; Sustainable Sleep Atelier</span>
            <span>Made with Pure Organic Intention</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
