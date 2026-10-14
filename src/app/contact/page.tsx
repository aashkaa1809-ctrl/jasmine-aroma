'use client';

import React, { useState } from 'react';
import { Mail, Phone, Instagram, MapPin, Send, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Personal Styling & Swatches',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'Personal Styling & Swatches',
          message: ''
        });
      } else {
        const data = await res.json();
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network connection error. Please try again or reach out on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-luxury-gold/30 bg-white/5 mb-4">
            <Sparkles size={12} className="text-luxury-gold" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-300">
              PERSONAL STYLING &amp; SUPPORT
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4">
            Connect with Our Textile Concierge
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
            From selecting the ideal sateen thread count to ordering bespoke curtain lengths and complimentary fabric swatches, our styling team is dedicated to guiding your home transformation.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Form (Cols 1-7) */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/10 p-8 sm:p-10 rounded-sm shadow-2xl">
            <h2 className="text-2xl font-serif text-white mb-2">
              Send an Inquiry
            </h2>
            <p className="text-xs text-neutral-400 mb-8 font-light">
              Our styling specialists typically reply within 24 hours.
            </p>

            {success ? (
              <div className="p-8 text-center bg-white/5 border border-luxury-gold/40 rounded-sm space-y-4 animate-fade-in">
                <div className="w-14 h-14 bg-luxury-gold/10 text-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-xl font-serif text-white">Inquiry Received</h3>
                <p className="text-xs text-neutral-300 leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out to Jasmine Aroma. Our textile styling concierge has received your request and will contact you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-4 px-6 py-2.5 bg-white text-black text-xs uppercase tracking-[0.2em] font-medium"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-950/50 border border-red-800 text-red-300 text-xs rounded-sm">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-2 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full bg-black/40 border border-white/15 px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-luxury-gold transition-colors rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. priya@example.com"
                      className="w-full bg-black/40 border border-white/15 px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-luxury-gold transition-colors rounded-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-2 font-medium">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-black/40 border border-white/15 px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-luxury-gold transition-colors rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-2 font-medium">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#161616] border border-white/15 px-4 py-3 text-xs text-white focus:outline-none focus:border-luxury-gold transition-colors rounded-sm"
                    >
                      <option value="Personal Styling & Swatches">Complimentary Fabric Swatches</option>
                      <option value="Bespoke Curtain Sizing">Bespoke Curtain Length Sizing</option>
                      <option value="Bedding Recommendation">Bedding &amp; Weave Recommendation</option>
                      <option value="Trade & Interior Designers">Interior Designer Trade Program</option>
                      <option value="General Order Inquiry">General Order Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-2 font-medium">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your room dimensions, color preferences, or specific styling questions..."
                    className="w-full bg-black/40 border border-white/15 px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-luxury-gold transition-colors rounded-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white hover:bg-luxury-gold text-black py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-all flex items-center justify-center gap-2 shadow-2xl disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Submit Concierge Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Contact Info (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#121212] border border-white/10 p-8 rounded-sm space-y-6">
              <h3 className="text-xl font-serif text-white border-b border-white/10 pb-4">
                Atelier Directory
              </h3>

              <div className="space-y-5 text-xs text-neutral-300">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-luxury-gold flex-shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase tracking-[0.15em] block text-[10px]">Email Concierge</span>
                    <a href="mailto:contact@jasminearoma.in" className="text-white hover:text-luxury-gold transition-colors font-medium">
                      contact@jasminearoma.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-luxury-gold flex-shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase tracking-[0.15em] block text-[10px]">Concierge Hotline</span>
                    <a href="tel:+918307369611" className="text-white hover:text-luxury-gold transition-colors font-medium">
                      +91 83073 69611
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-luxury-gold flex-shrink-0">
                    <Instagram size={16} />
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase tracking-[0.15em] block text-[10px]">Social Atelier</span>
                    <a
                      href="https://www.instagram.com/jasmine.aroma_/?hl=en#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-luxury-gold transition-colors font-medium"
                    >
                      @jasmine.aroma_
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Chat */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="https://wa.me/918307369611?text=Hello%20Jasmine%20Aroma%20Concierge,%20I%20would%20like%20styling%20advice%20for%20my%20bedroom."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] p-4 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 rounded-sm transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>Instant WhatsApp Styling (+91 83073 69611)</span>
                </a>
              </div>
            </div>

            {/* Trade Program Callout */}
            <div className="p-8 bg-[#161616] border border-luxury-gold/30 rounded-sm space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-medium block">
                INTERIOR DESIGNERS &amp; ARCHITECTS
              </span>
              <h4 className="text-lg font-serif text-white">Trade Concierge Program</h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                We offer exclusive trade discounts, custom fabric yardage, and dedicated account support for hospitality, residential, and commercial designers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
