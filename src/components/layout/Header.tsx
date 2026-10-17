'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  Instagram,
  Mail,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Logo } from '../ui/Logo';
import { useCart } from '../../context/CartContext';
import { CATEGORIES } from '../../data/categories';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, setIsCartOpen, setIsSearchOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'COLLECTIONS', href: '/products', hasDropdown: true },
    { name: 'ABOUT US', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#FAF6F0] text-neutral-800 border-b border-[#EAE3D6] py-2 px-4 sm:px-8 text-xs font-sans transition-colors relative z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Announcement message */}
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] tracking-wider uppercase text-neutral-600 font-medium">
              Complimentary Express Delivery &bull; 30-Night Restful Sleep Guarantee
            </span>
          </div>

          {/* Direct Contact Icons (Call, WhatsApp, Email, Instagram) */}
          <div className="flex items-center space-x-4 sm:space-x-5 text-neutral-600">
            {/* Phone Call */}
            <a
              href="tel:+918307369611"
              className="flex items-center gap-1.5 hover:text-primary-wine transition-colors group"
              title="Call Us: +91 83073 69611"
            >
              <Phone size={13} className="text-primary-wine" />
              <span className="text-[11.5px] font-medium tracking-wide hidden md:inline">
                +91 83073 69611
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918307369611?text=Hello%20Jasmine%20Aroma%20Concierge,%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20collection."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-emerald-700 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={13} className="text-[#25D366]" />
              <span className="text-[11.5px] font-medium tracking-wide hidden lg:inline">
                WhatsApp
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@jasminearoma.in"
              className="flex items-center gap-1 hover:text-primary-wine transition-colors"
              title="Email: contact@jasminearoma.in"
            >
              <Mail size={13} className="text-neutral-500" />
              <span className="text-[11.5px] font-medium tracking-wide hidden lg:inline">
                contact@jasminearoma.in
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/jasmine.aroma_/?hl=en#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-pink-700 transition-colors"
              title="Instagram: @jasmine.aroma_"
            >
              <Instagram size={13} className="text-[#E1306C]" />
              <span className="text-[11.5px] font-medium tracking-wide">
                @jasmine.aroma_
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-[#E8E3DA]'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-[#EFEBE4]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: MENU Button + Categories Quick Links */}
            <div className="flex items-center space-x-6">
              {/* Prominent MENU Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-neutral-100 transition-colors text-neutral-900 group focus:outline-none"
                aria-label="Open menu options"
              >
                <div className="flex flex-col space-y-1">
                  <span className="w-5 h-[2px] bg-neutral-900 group-hover:bg-primary-wine transition-colors" />
                  <span className="w-3.5 h-[2px] bg-neutral-900 group-hover:bg-primary-wine transition-colors" />
                  <span className="w-5 h-[2px] bg-neutral-900 group-hover:bg-primary-wine transition-colors" />
                </div>
                <span className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-neutral-900 group-hover:text-primary-wine">
                  MENU
                </span>
              </button>

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center space-x-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

                  if (link.hasDropdown) {
                    return (
                      <div
                        key={link.name}
                        className="relative group py-2"
                        onMouseEnter={() => setIsProductsDropdownOpen(true)}
                        onMouseLeave={() => setIsProductsDropdownOpen(false)}
                      >
                        <Link
                          href={link.href}
                          className={`inline-flex items-center gap-1.5 text-[11.5px] font-sans font-semibold tracking-[0.22em] uppercase transition-colors py-1 ${
                            isActive ? 'text-primary-wine' : 'text-neutral-700 hover:text-neutral-900'
                          }`}
                        >
                          {link.name}
                          <ChevronDown
                            size={12}
                            className={`transition-transform duration-300 ${
                              isProductsDropdownOpen ? 'rotate-180 text-primary-wine' : 'text-neutral-400'
                            }`}
                          />
                        </Link>

                        {/* Mega Dropdown */}
                        <div
                          className={`absolute top-full -left-10 w-[540px] bg-white rounded-md p-6 shadow-2xl border border-[#E8E3DA] transition-all duration-300 transform origin-top ${
                            isProductsDropdownOpen
                              ? 'opacity-100 scale-100 pointer-events-auto visible'
                              : 'opacity-0 scale-95 pointer-events-none invisible'
                          }`}
                        >
                          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE4DC]">
                            <span className="text-[10px] tracking-[0.25em] uppercase text-primary-wine font-bold">
                              SIGNATURE LIVING CATEGORIES
                            </span>
                            <Link
                              href="/products"
                              className="text-[11px] text-neutral-500 hover:text-neutral-900 font-medium transition-colors"
                            >
                              Explore All &rarr;
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {CATEGORIES.map((cat) => (
                              <Link
                                key={cat.id}
                                href={`/products/${cat.id}`}
                                className="group/item flex flex-col p-2.5 rounded-md hover:bg-[#FAF8F5] transition-colors border border-transparent hover:border-[#E8E3DA]"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-serif font-medium text-neutral-900 group-hover/item:text-primary-wine transition-colors">
                                    {cat.title}
                                  </span>
                                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-600 font-medium">
                                    {cat.badge}
                                  </span>
                                </div>
                                <span className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                                  {cat.subtitle}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`relative text-[11.5px] font-sans font-semibold tracking-[0.22em] uppercase transition-colors py-1 ${
                        isActive ? 'text-primary-wine' : 'text-neutral-700 hover:text-neutral-900'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-wine animate-fade-in" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Center: Brand Logo */}
            <div className="flex-shrink-0">
              <Logo size="md" />
            </div>

            {/* Right: Quick Action Contact Icons + Search + Bag */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              {/* Quick WhatsApp Header Icon */}
              <a
                href="https://wa.me/918307369611?text=Hello%20Jasmine%20Aroma%20Concierge,%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20collection."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex text-neutral-700 hover:text-emerald-600 p-2 rounded-full hover:bg-neutral-100 transition-colors"
                title="Direct WhatsApp Concierge"
              >
                <MessageCircle size={18} strokeWidth={1.8} className="text-[#25D366]" />
              </a>

              {/* Quick Call Header Icon */}
              <a
                href="tel:+918307369611"
                className="hidden sm:flex text-neutral-700 hover:text-primary-wine p-2 rounded-full hover:bg-neutral-100 transition-colors"
                title="Call Concierge: +91 83073 69611"
              >
                <Phone size={17} strokeWidth={1.8} className="text-neutral-800" />
              </a>

              {/* Quick Instagram Header Icon */}
              <a
                href="https://www.instagram.com/jasmine.aroma_/?hl=en#"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex text-neutral-700 hover:text-pink-600 p-2 rounded-full hover:bg-neutral-100 transition-colors"
                title="Instagram: @jasmine.aroma_"
              >
                <Instagram size={18} strokeWidth={1.8} className="text-[#E1306C]" />
              </a>

              {/* Search Trigger */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="text-neutral-700 hover:text-neutral-900 p-2 rounded-full hover:bg-neutral-100 transition-colors"
                aria-label="Search collection"
              >
                <Search size={19} strokeWidth={1.8} />
              </button>

              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative text-neutral-800 hover:text-primary-wine p-2 rounded-full hover:bg-neutral-100 transition-colors flex items-center"
                aria-label="Shopping bag"
              >
                <ShoppingBag size={20} strokeWidth={1.8} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-primary-wine text-white font-sans font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Category Quick-Bar (Under Header) */}
        <div className="hidden md:block border-t border-[#F0EBE3] mt-2.5 pt-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-8 text-xs font-sans tracking-[0.16em] uppercase text-neutral-600">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/products/${cat.id}`}
                className="hover:text-primary-wine transition-colors py-1 relative group font-medium"
              >
                {cat.title}
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary-wine scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Full Luxury Slide-Out Menu Drawer (Desktop & Mobile) */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 left-0 w-full max-w-md h-full bg-[#FAF8F5] border-r border-[#E8E3DA] p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-transform duration-500 overflow-y-auto ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div>
            {/* Header in Menu */}
            <div className="flex items-center justify-between pb-6 border-b border-[#EAE3D6]">
              <Logo size="sm" />
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="text-neutral-500 hover:text-neutral-900 p-2 rounded-full hover:bg-neutral-200/60 transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Quick Search in Menu */}
            <div className="mt-5">
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-[#E5E0D8] rounded-md text-xs text-neutral-500 hover:border-primary-wine transition-colors text-left"
              >
                <span className="flex items-center gap-2">
                  <Search size={15} className="text-neutral-400" />
                  <span>Search bedsheets, curtains, comforters...</span>
                </span>
                <span className="text-[10px] text-neutral-400 uppercase font-sans">Search</span>
              </button>
            </div>

            {/* Primary Menu Links */}
            <div className="py-6 space-y-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-serif font-medium text-neutral-900 hover:text-primary-wine transition-colors"
              >
                Home
              </Link>

              {/* Collections with Subcategories */}
              <div className="space-y-2 pt-2 border-t border-[#EAE3D6]">
                <div className="flex items-center justify-between">
                  <Link
                    href="/products"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xs font-sans tracking-[0.25em] uppercase text-primary-wine font-bold"
                  >
                    EXPLORE ALL COLLECTIONS
                  </Link>
                  <ArrowRight size={13} className="text-primary-wine" />
                </div>

                <div className="pl-3 space-y-2 border-l-2 border-primary-wine/30 mt-2">
                  {CATEGORIES.map((c) => (
                    <Link
                      key={c.id}
                      href={`/products/${c.id}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between text-sm font-serif text-neutral-700 hover:text-primary-wine transition-colors py-0.5"
                    >
                      <span>{c.title}</span>
                      <span className="text-[10px] text-neutral-400 uppercase font-sans">
                        {c.badge}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#EAE3D6] space-y-3">
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-base font-serif font-medium text-neutral-900 hover:text-primary-wine transition-colors"
                >
                  Our Brand Philosophy &amp; Atelier
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-base font-serif font-medium text-neutral-900 hover:text-primary-wine transition-colors"
                >
                  Contact Concierge &amp; Styling
                </Link>
              </div>
            </div>
          </div>

          {/* Menu Drawer Quick Contact Section */}
          <div className="pt-6 border-t border-[#EAE3D6] space-y-4">
            <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-neutral-500 font-bold block">
              DIRECT CONCIERGE &amp; SOCIAL
            </span>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {/* WhatsApp */}
              <a
                href="https://wa.me/918307369611?text=Hello%20Jasmine%20Aroma%20Concierge,%20I%20am%20interested%20in%20your%20luxury%20collection."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-md bg-white border border-[#E5E0D8] text-neutral-800 hover:border-emerald-500 hover:text-emerald-700 transition-colors"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                <span className="font-semibold">WhatsApp</span>
              </a>

              {/* Call */}
              <a
                href="tel:+918307369611"
                className="flex items-center gap-2 p-2.5 rounded-md bg-white border border-[#E5E0D8] text-neutral-800 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
              >
                <Phone size={15} className="text-neutral-700" />
                <span className="font-semibold">Call Us</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/jasmine.aroma_/?hl=en#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-md bg-white border border-[#E5E0D8] text-neutral-800 hover:border-pink-500 hover:text-pink-700 transition-colors"
              >
                <Instagram size={15} className="text-[#E1306C]" />
                <span className="font-semibold">Instagram</span>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@jasminearoma.in"
                className="flex items-center gap-2 p-2.5 rounded-md bg-white border border-[#E5E0D8] text-neutral-800 hover:border-primary-wine hover:text-primary-wine transition-colors"
              >
                <Mail size={15} className="text-primary-wine" />
                <span className="font-semibold">Email Us</span>
              </a>
            </div>

            <p className="text-[11px] text-neutral-500 font-sans pt-1">
              Hotline: +91 83073 69611 &bull; Hours: 10:00 AM - 8:00 PM IST
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
