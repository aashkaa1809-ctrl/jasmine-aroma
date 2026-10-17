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
    <div className="min-h-screen bg-[#FAF8F5] text-neutral-900 pt-32 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary-wine/30 bg-primary-wine/5 mb-4">
            <Sparkles size={12} className="text-primary-wine" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary-wine font-semibold">
              PERSONAL STYLING &amp; SUPPORT
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-neutral-900 mb-4">
            Connect with Our Textile Concierge
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
            From selecting the ideal sateen thread count to ordering bespoke curtain lengths and complimentary fabric swatches, our styling team is dedicated to guiding your home transformation.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Form (Cols 1-7) */}
          <div className="lg:col-span-7 bg-white border border-[#E8E3DA] p-8 sm:p-10 rounded-sm shadow-sm">
            <h2 className="text-2xl font-serif text-neutral-900 mb-2">
              Send an Inquiry
            </h2>
            <p className="text-xs text-neutral-500 mb-8 font-light">
              Our styling specialists typically reply within 24 hours.
            </p>

            {success ? (
              <div className="p-8 text-center bg-[#FAF8F5] border border-primary-wine/30 rounded-sm space-y-4 animate-fade-in">
                <div className="w-14 h-14 bg-primary-wine/10 text-primary-wine rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-xl font-serif text-neutral-900">Inquiry Received</h3>
                <p className="text-xs text-neutral-600 leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out to Jasmine Aroma. Our textile styling concierge has received your request and will contact you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-4 px-6 py-2.5 bg-neutral-900 hover:bg-primary-wine text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors rounded-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-neutral-600 mb-2 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full bg-[#FAF8F5] border border-[#E8E3DA] px-4 py-3 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary-wine transition-colors rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-neutral-600 mb-2 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. priya@example.com"
                      className="w-full bg-[#FAF8F5] border border-[#E8E3DA] px-4 py-3 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary-wine transition-colors rounded-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-neutral-600 mb-2 font-semibold">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 83073 69611"
                      className="w-full bg-[#FAF8F5] border border-[#E8E3DA] px-4 py-3 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary-wine transition-colors rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-neutral-600 mb-2 font-semibold">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E8E3DA] px-4 py-3 text-xs text-neutral-900 focus:outline-none focus:border-primary-wine transition-colors rounded-sm"
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
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-neutral-600 mb-2 font-semibold">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your room dimensions, color preferences, or specific styling questions..."
                    className="w-full bg-[#FAF8F5] border border-[#E8E3DA] px-4 py-3 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary-wine transition-colors rounded-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-neutral-900 hover:bg-primary-wine text-white py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-all flex items-center justify-center gap-2 shadow-sm rounded-sm disabled:opacity-50"
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
            <div className="bg-white border border-[#E8E3DA] p-8 rounded-sm space-y-6 shadow-sm">
              <h3 className="text-xl font-serif text-neutral-900 border-b border-[#E8E3DA] pb-4">
                Atelier Directory
              </h3>

              <div className="space-y-5 text-xs text-neutral-700">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8E3DA] flex items-center justify-center text-primary-wine flex-shrink-0 shadow-sm">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase tracking-[0.15em] block text-[10px] font-semibold">Email Concierge</span>
                    <a href="mailto:contact@jasminearoma.in" className="text-neutral-900 hover:text-primary-wine transition-colors font-medium">
                      contact@jasminearoma.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8E3DA] flex items-center justify-center text-primary-wine flex-shrink-0 shadow-sm">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase tracking-[0.15em] block text-[10px] font-semibold">Concierge Hotline</span>
                    <a href="tel:+918307369611" className="text-neutral-900 hover:text-primary-wine transition-colors font-medium">
                      +91 83073 69611
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8E3DA] flex items-center justify-center text-[#E1306C] flex-shrink-0 shadow-sm">
                    <Instagram size={16} />
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase tracking-[0.15em] block text-[10px] font-semibold">Social Atelier</span>
                    <a
                      href="https://www.instagram.com/jasmine.aroma_/?hl=en#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-wine hover:underline transition-colors font-medium"
                    >
                      @jasmine.aroma_
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Chat */}
              <div className="pt-4 border-t border-[#E8E3DA]">
                <a
                  href="https://wa.me/918307369611?text=Hello%20Jasmine%20Aroma%20Concierge,%20I%20would%20like%20styling%20advice%20for%20my%20bedroom."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white p-4 text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 rounded-sm shadow-sm transition-all"
                >
                  <MessageCircle size={16} />
                  <span>Instant WhatsApp Styling (+91 83073 69611)</span>
                </a>
              </div>
            </div>

            {/* Trade Program Callout */}
            <div className="p-8 bg-[#FAF8F5] border border-[#E8E3DA] rounded-sm space-y-3 shadow-sm">
              <span className="text-[10px] uppercase tracking-[0.25em] text-primary-wine font-semibold block">
                INTERIOR DESIGNERS &amp; ARCHITECTS
              </span>
              <h4 className="text-lg font-serif text-neutral-900 font-medium">Trade Concierge Program</h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-light">
                We offer exclusive trade discounts, custom fabric yardage, and dedicated account support for hospitality, residential, and commercial designers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
