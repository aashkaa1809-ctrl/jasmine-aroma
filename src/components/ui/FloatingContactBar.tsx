'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, Instagram, Mail, X, Headphones } from 'lucide-react';

export const FloatingContactBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactActions = [
    {
      name: 'WhatsApp Us',
      detail: '+91 83073 69611',
      href: 'https://wa.me/918307369611?text=Hello%20Jasmine%20Aroma%20Concierge,%20I%20am%20interested%20in%20your%20luxury%20home%20collection.',
      icon: MessageCircle,
      bg: 'bg-[#25D366] text-white hover:bg-[#20ba59]',
      borderColor: 'border-[#25D366]/30',
      labelBg: 'bg-emerald-50 text-emerald-900 border-emerald-200',
    },
    {
      name: 'Direct Call',
      detail: '+91 83073 69611',
      href: 'tel:+918307369611',
      icon: Phone,
      bg: 'bg-neutral-900 text-white hover:bg-primary-wine',
      borderColor: 'border-neutral-800',
      labelBg: 'bg-neutral-100 text-neutral-900 border-neutral-200',
    },
    {
      name: 'Instagram',
      detail: '@jasmine.aroma_',
      href: 'https://www.instagram.com/jasmine.aroma_/?hl=en#',
      icon: Instagram,
      bg: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-95',
      borderColor: 'border-pink-300',
      labelBg: 'bg-pink-50 text-pink-900 border-pink-200',
    },
    {
      name: 'Send Email',
      detail: 'contact@jasminearoma.in',
      href: 'mailto:contact@jasminearoma.in',
      icon: Mail,
      bg: 'bg-primary-wine text-white hover:bg-[#881B36]',
      borderColor: 'border-primary-wine/40',
      labelBg: 'bg-rose-50 text-rose-950 border-rose-200',
    },
  ];

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end select-none">
      {/* Expanded Quick Contact Menu */}
      <div
        className={`flex flex-col items-end space-y-3 mb-3 transition-all duration-300 transform origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 pointer-events-auto translate-y-0'
            : 'opacity-0 scale-90 pointer-events-none translate-y-4'
        }`}
      >
        {contactActions.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 group bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full shadow-xl border border-[#E8E3DA] hover:border-primary-wine transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col text-right">
                <span className="text-[11px] font-sans font-semibold text-neutral-800 tracking-wide">
                  {item.name}
                </span>
                <span className="text-[10px] text-neutral-500 font-sans">
                  {item.detail}
                </span>
              </div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-transform group-hover:rotate-6 ${item.bg}`}
              >
                <Icon size={18} />
              </div>
            </a>
          );
        })}
      </div>

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2.5 px-4 py-3 rounded-full shadow-2xl transition-all duration-300 border ${
          isOpen
            ? 'bg-neutral-900 text-white border-neutral-700 rotate-0'
            : 'bg-white text-neutral-900 border-[#E5E0D8] hover:border-primary-wine hover:shadow-primary-wine/10'
        }`}
        aria-label="Toggle contact concierge"
      >
        <div className="relative">
          {isOpen ? (
            <X size={18} className="text-white" />
          ) : (
            <div className="flex items-center gap-1.5 text-primary-wine">
              <Headphones size={18} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white animate-pulse" />
            </div>
          )}
        </div>
        <span className="text-xs font-sans font-semibold tracking-wider uppercase">
          {isOpen ? 'Close' : 'Quick Connect'}
        </span>
      </button>
    </div>
  );
};
