'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '../ui/Logo';
import { CATEGORIES } from '../../data/categories';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Heart,
  Instagram,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

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
    <footer className="bg-[#F5F1EB] border-t border-[#E8E3DA] text-neutral-700 font-sans">
      {/* Top Banner / Features Bar */}
      <div className="border-b border-[#E8E3DA] py-10 bg-[#FAF8F5]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E8E3DA] flex items-center justify-center text-primary-wine shadow-sm">
                <Sparkles size={18} />
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900">
                100% Organic Cotton
              </h4>
              <p className="text-xs text-neutral-600">
                GOTS &amp; OEKO-TEX Standard 100 certified non-toxic fibers.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E8E3DA] flex items-center justify-center text-primary-wine shadow-sm">
                <ShieldCheck size={18} />
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900">
                30-Night Sleep Trial
              </h4>
              <p className="text-xs text-neutral-600">
                Experience the calm and softness in your home with effortless returns.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E8E3DA] flex items-center justify-center text-primary-wine shadow-sm">
                <Heart size={18} />
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900">
                Atelier Craftsmanship
              </h4>
              <p className="text-xs text-neutral-600">
                Loomed by master weavers with single-ply high tensile yarn.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="w-10 h-10 rounded-full bg-white border border-[#E8E3DA] flex items-center justify-center text-primary-wine shadow-sm">
                <ArrowRight size={18} />
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900">
                Styling Concierge
              </h4>
              <p className="text-xs text-neutral-600">
                Complimentary room styling guidance &amp; fabric swatch kits.
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
            <Logo variant="dark" size="lg" />
            <p className="text-xs text-neutral-600 max-w-sm leading-relaxed">
              Jasmine Aroma crafts sensory luxury textiles for the intentional home. From botanical-infused sateen bedsheets to Belgian linen blackout drapes, each piece is designed to make rest feel like a sacred ritual.
            </p>

            {/* Direct Connect Quick Icons */}
            <div className="pt-2">
              <span className="text-[10.5px] uppercase tracking-[0.2em] text-neutral-500 font-semibold block mb-3 font-sans">
                DIRECT CONCIERGE CHANNELS
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/918307369611?text=Hello%20Jasmine%20Aroma%20Concierge,%20I%20would%20like%20to%20inquire%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Concierge"
                  className="w-9 h-9 rounded-full bg-white border border-[#E8E3DA] flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all shadow-sm"
                  title="WhatsApp: +91 83073 69611"
                >
                  <MessageCircle size={16} />
                </a>

                <a
                  href="tel:+918307369611"
                  aria-label="Call Concierge"
                  className="w-9 h-9 rounded-full bg-white border border-[#E8E3DA] flex items-center justify-center text-primary-wine hover:bg-primary-wine hover:text-white hover:border-primary-wine transition-all shadow-sm"
                  title="Call: +91 83073 69611"
                >
                  <Phone size={15} />
                </a>

                <a
                  href="https://www.instagram.com/jasmine.aroma_/?hl=en#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="w-9 h-9 rounded-full bg-white border border-[#E8E3DA] flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all shadow-sm"
                  title="Instagram: @jasmine.aroma_"
                >
                  <Instagram size={16} />
                </a>

                <a
                  href="mailto:contact@jasminearoma.in"
                  aria-label="Email Concierge"
                  className="w-9 h-9 rounded-full bg-white border border-[#E8E3DA] flex items-center justify-center text-primary-wine hover:bg-primary-wine hover:text-white hover:border-primary-wine transition-all shadow-sm"
                  title="Email: contact@jasminearoma.in"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="pt-2">
              <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-primary-wine block mb-2 font-semibold">
                THE SANCTUARY CIRCLE
              </span>
              <p className="text-xs text-neutral-600 mb-3">
                Receive private seasonal previews and sleep wellness guides.
              </p>
              {isSubscribed ? (
                <div className="flex items-center gap-2 text-xs text-primary-wine font-medium py-2.5">
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
                    className="bg-white border border-[#DCD5CB] px-4 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary-wine flex-grow transition-colors rounded-l-sm"
                  />
                  <button
                    type="submit"
                    className="bg-primary-wine hover:bg-neutral-900 text-white px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold transition-colors rounded-r-sm"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Collections Column */}
          <div>
            <h4 className="text-xs font-sans tracking-[0.25em] uppercase text-neutral-900 font-semibold mb-5">
              COLLECTIONS
            </h4>
            <ul className="space-y-3 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products/${cat.id}`}
                    className="text-neutral-600 hover:text-primary-wine transition-colors block py-0.5"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-primary-wine font-medium hover:text-neutral-900 transition-colors block pt-1"
                >
                  View Complete Atelier &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Brand / Company Column */}
          <div>
            <h4 className="text-xs font-sans tracking-[0.25em] uppercase text-neutral-900 font-semibold mb-5">
              THE ATELIER
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-primary-wine transition-colors block py-0.5">
                  Our Brand Philosophy
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-primary-wine transition-colors block py-0.5">
                  Fabric &amp; Loom Standards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-primary-wine transition-colors block py-0.5">
                  Interior Designer Trade Program
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-primary-wine transition-colors block py-0.5">
                  Complimentary Fabric Swatches
                </Link>
              </li>
            </ul>
          </div>

          {/* Concierge / Contact Column */}
          <div>
            <h4 className="text-xs font-sans tracking-[0.25em] uppercase text-neutral-900 font-semibold mb-5">
              CONCIERGE CARE
            </h4>
            <div className="space-y-3 text-xs text-neutral-600">
              <p>
                <span className="text-neutral-900 block font-semibold">Email Concierge:</span>
                <a href="mailto:contact@jasminearoma.in" className="hover:text-primary-wine transition-colors">
                  contact@jasminearoma.in
                </a>
              </p>
              <p>
                <span className="text-neutral-900 block font-semibold">Hotline &amp; WhatsApp:</span>
                <a href="tel:+918307369611" className="hover:text-primary-wine transition-colors">
                  +91 83073 69611
                </a>
              </p>
              <p>
                <span className="text-neutral-900 block font-semibold">Instagram:</span>
                <a
                  href="https://www.instagram.com/jasmine.aroma_/?hl=en#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-wine font-medium hover:underline"
                >
                  @jasmine.aroma_
                </a>
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block border border-primary-wine/40 hover:border-primary-wine bg-white text-primary-wine hover:bg-primary-wine hover:text-white text-[10.5px] uppercase tracking-[0.2em] px-4 py-2 transition-colors font-semibold rounded-sm shadow-sm"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#E8E3DA] flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
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
