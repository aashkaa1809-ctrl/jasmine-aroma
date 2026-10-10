'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { useCart } from '../../context/CartContext';
import { CATEGORIES } from '../../data/categories';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, setIsCartOpen, setIsSearchOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'PRODUCTS', href: '/products', hasDropdown: true },
    { name: 'ABOUT US', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0A0A0A]/90 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div className="flex-shrink-0">
              <Logo variant="light" size="md" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
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
                        className={`inline-flex items-center gap-1.5 text-[11.5px] font-sans font-medium tracking-[0.25em] uppercase transition-colors duration-300 py-1 ${
                          isActive ? 'text-luxury-gold' : 'text-neutral-300 hover:text-white'
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          size={12}
                          className={`transition-transform duration-300 ${
                            isProductsDropdownOpen ? 'rotate-180 text-luxury-gold' : 'text-neutral-400'
                          }`}
                        />
                      </Link>

                      {/* Mega Dropdown */}
                      <div
                        className={`absolute top-full -left-12 w-[520px] glass-panel rounded-lg p-5 shadow-2xl border border-white/10 transition-all duration-300 transform origin-top ${
                          isProductsDropdownOpen
                            ? 'opacity-100 scale-100 pointer-events-auto visible'
                            : 'opacity-0 scale-95 pointer-events-none invisible'
                        }`}
                      >
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                          <span className="text-[10px] tracking-[0.25em] uppercase text-luxury-gold font-medium">
                            COLLECTIONS ATELIER
                          </span>
                          <Link
                            href="/products"
                            className="text-[10.5px] text-neutral-400 hover:text-white transition-colors"
                          >
                            View All (14) &rarr;
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {CATEGORIES.map((cat) => (
                            <Link
                              key={cat.id}
                              href={`/products/${cat.id}`}
                              className="group/item flex flex-col p-2.5 rounded-md hover:bg-white/5 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-serif text-neutral-100 group-hover/item:text-luxury-gold transition-colors">
                                  {cat.title}
                                </span>
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-neutral-400">
                                  {cat.badge}
                                </span>
                              </div>
                              <span className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
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
                    className={`relative text-[11.5px] font-sans font-medium tracking-[0.25em] uppercase transition-colors duration-300 py-1 ${
                      isActive ? 'text-luxury-gold' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-luxury-gold animate-fade-in" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Icons: Search & Cart & Mobile Toggle */}
            <div className="flex items-center space-x-5 sm:space-x-6">
              {/* Search trigger */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="text-neutral-300 hover:text-luxury-gold transition-colors p-1.5 rounded-full hover:bg-white/5"
                aria-label="Search collection"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative text-neutral-300 hover:text-luxury-gold transition-colors p-1.5 rounded-full hover:bg-white/5 flex items-center"
                aria-label="Shopping bag"
              >
                <ShoppingBag size={19} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-luxury-gold text-black font-sans font-semibold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-lg">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-neutral-200 hover:text-white p-1.5 focus:outline-none"
                aria-label="Toggle navigation drawer"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Slide-in Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-[#0E0E0E] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Logo variant="light" size="sm" />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-400 hover:text-white p-1"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="py-6 space-y-5">
              <Link
                href="/"
                className="block text-sm font-sans tracking-[0.25em] uppercase text-neutral-200 hover:text-luxury-gold transition-colors"
              >
                HOME
              </Link>
              
              <div className="space-y-3 pt-2">
                <Link
                  href="/products"
                  className="block text-sm font-sans tracking-[0.25em] uppercase text-luxury-gold font-medium"
                >
                  PRODUCTS &bull; ALL
                </Link>
                <div className="pl-4 space-y-2.5 border-l border-white/10">
                  {CATEGORIES.map((c) => (
                    <Link
                      key={c.id}
                      href={`/products/${c.id}`}
                      className="block text-xs font-serif text-neutral-300 hover:text-white transition-colors"
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/about"
                className="block text-sm font-sans tracking-[0.25em] uppercase text-neutral-200 hover:text-luxury-gold transition-colors pt-2"
              >
                ABOUT US
              </Link>

              <Link
                href="/contact"
                className="block text-sm font-sans tracking-[0.25em] uppercase text-neutral-200 hover:text-luxury-gold transition-colors"
              >
                CONTACT CONCIERGE
              </Link>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs text-luxury-gold mb-2 font-serif">
              <Sparkles size={14} />
              <span>Complimentary Personal Styling & Fabric Swatches</span>
            </div>
            <p className="text-[11px] text-neutral-500 font-sans">
              Connect with our styling atelier on Instagram @jasminearoma
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
