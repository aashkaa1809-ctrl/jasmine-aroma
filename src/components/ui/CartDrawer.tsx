'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, cartSubtotal, clearCart } = useCart();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 3000;
  const progressToFreeShipping = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    
    let message = `Hello Jasmine Aroma Concierge,\n\nI would like to place an inquiry/order for the following items:\n\n`;
    cart.forEach((item, index) => {
      let unitPrice = item.product.price;
      if (item.selectedSize && item.product.sizes) {
        const s = item.product.sizes.find(sz => sz.name === item.selectedSize);
        if (s) unitPrice = s.price;
      }
      message += `${index + 1}. ${item.product.name}\n   - Color: ${item.selectedColor || 'Default'}\n   - Size: ${item.selectedSize || 'Default'}\n   - Qty: ${item.quantity}\n   - Subtotal: ₹${(unitPrice * item.quantity).toLocaleString('en-IN')}\n\n`;
    });
    message += `Total Estimated Order Value: ₹${cartSubtotal.toLocaleString('en-IN')}\n\nPlease confirm availability and delivery timelines.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#101010] border-l border-white/10 text-white shadow-2xl flex flex-col justify-between animate-slide-left">
          {/* Top Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShoppingBag size={18} className="text-luxury-gold" />
                <h3 className="text-sm font-sans tracking-[0.25em] uppercase text-white font-medium">
                  SANCTUARY BAG ({cart.reduce((a, b) => a + b.quantity, 0)})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="text-neutral-400 hover:text-white p-1"
                aria-label="Close bag"
              >
                <X size={20} />
              </button>
            </div>

            {/* Free Shipping Progress */}
            <div className="mt-4 pt-3 border-t border-white/5">
              <p className="text-xs text-neutral-300 mb-1.5 font-sans">
                {remainingForFreeShipping === 0 ? (
                  <span className="text-luxury-gold font-medium">✨ You unlocked complimentary express shipping!</span>
                ) : (
                  <span>
                    Add <strong className="text-white">&#8377;{remainingForFreeShipping.toLocaleString('en-IN')}</strong> more for free express shipping.
                  </span>
                )}
              </p>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-luxury-gold h-full transition-all duration-500 rounded-full"
                  style={{ width: `${progressToFreeShipping}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-grow overflow-y-auto p-6 space-y-5">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto text-neutral-500">
                  <ShoppingBag size={24} />
                </div>
                <p className="font-serif text-lg text-white">Your sanctuary bag is empty</p>
                <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                  Explore our luxury bedsheets, comforters, and linen drapes to create your dream home.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-block mt-4 px-6 py-3 bg-white text-black text-xs uppercase tracking-[0.2em] font-medium hover:bg-luxury-gold transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cart.map((item, idx) => {
                let unitPrice = item.product.price;
                if (item.selectedSize && item.product.sizes) {
                  const s = item.product.sizes.find(sz => sz.name === item.selectedSize);
                  if (s) unitPrice = s.price;
                }

                return (
                  <div
                    key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}-${idx}`}
                    className="flex gap-4 pb-5 border-b border-white/5"
                  >
                    <div className="relative w-20 h-24 bg-neutral-900 rounded-sm overflow-hidden flex-shrink-0 border border-white/10">
                      <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                    </div>

                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-xs font-serif text-white line-clamp-1 font-medium">
                            {item.product.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.product.id, item.selectedColor, item.selectedSize)}
                            className="text-neutral-500 hover:text-red-400 transition-colors p-0.5"
                            aria-label="Remove item"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>

                        <div className="text-[11px] text-neutral-400 space-y-0.5 mt-1 font-sans">
                          {item.selectedColor && <p>Color: {item.selectedColor}</p>}
                          {item.selectedSize && <p className="line-clamp-1">Size: {item.selectedSize}</p>}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-white/15 rounded-sm">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedColor, item.selectedSize)}
                            className="px-2 py-0.5 text-xs text-neutral-400 hover:text-white"
                          >
                            -
                          </button>
                          <span className="px-2 py-0.5 text-xs font-sans text-white">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedColor, item.selectedSize)}
                            className="px-2 py-0.5 text-xs text-neutral-400 hover:text-white"
                          >
                            +
                          </button>
                        </div>

                        <span className="text-xs font-sans font-medium text-white">
                          &#8377;{(unitPrice * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-black/60 space-y-4">
              <div className="flex justify-between items-center text-sm font-sans">
                <span className="text-neutral-400 uppercase tracking-[0.15em] text-xs">Estimated Subtotal</span>
                <span className="text-lg font-medium text-white">&#8377;{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>

              <p className="text-[11px] text-neutral-500 font-sans">
                Taxes &amp; shipping calculated at personal concierge confirmation. Includes 30-Night sleep trial.
              </p>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-black py-3.5 px-4 text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 shadow-xl transition-all"
                >
                  <MessageCircle size={16} />
                  <span>Order via WhatsApp Concierge</span>
                </button>

                <Link
                  href="/contact"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-white hover:bg-luxury-gold text-black py-3.5 px-4 text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 shadow-xl transition-all text-center"
                >
                  <span>Submit Bespoke Inquiry</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 pt-1">
                <ShieldCheck size={12} className="text-luxury-gold" />
                <span>Encrypted Concierge Booking &bull; 100% Satisfaction Guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
