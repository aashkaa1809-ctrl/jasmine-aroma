import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '../context/CartContext';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { QuickViewModal } from '../components/ui/QuickViewModal';
import { SearchModal } from '../components/ui/SearchModal';
import { CartDrawer } from '../components/ui/CartDrawer';

export const metadata: Metadata = {
  title: 'Jasmine Aroma | Luxury Home Décor & Organic Bedding Atelier',
  description: 'Elevate everyday living with Jasmine Aroma. 500TC organic sateen bedsheets, cloud comforters, Belgian linen cushion covers, blackout curtains, and heirloom nursery plushies.',
  keywords: [
    'Jasmine Aroma',
    'Luxury Bedding India',
    '500TC Organic Sateen Bedsheets',
    'Flax Linen Blackout Curtains',
    'Plush Comforters',
    'Belgian Linen Cushion Covers',
    'Organic Home Furnishings'
  ],
  authors: [{ name: 'Jasmine Aroma Atelier' }],
  openGraph: {
    title: 'Jasmine Aroma | Luxury Home Décor & Organic Bedding Atelier',
    description: 'Awaken your senses in pure organic comfort. Handcrafted bedsheets, plush comforters, cushion covers, and linen drapes.',
    url: 'https://jasminearoma.com',
    siteName: 'Jasmine Aroma',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Jasmine Aroma Luxury Home Décor'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasmine Aroma | Luxury Home Décor & Bedding',
    description: 'Botanical-infused organic bedsheets, cloud comforters, linen cushions, and curtains.',
    images: ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeGoodsStore',
    name: 'Jasmine Aroma',
    description: 'Luxury home furnishings and organic bedding atelier.',
    url: 'https://jasminearoma.com',
    priceRange: '₹₹₹',
    brand: {
      '@type': 'Brand',
      name: 'Jasmine Aroma',
      logo: 'https://jasminearoma.com/assets/branding/logo.svg'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    sameAs: [
      'https://instagram.com/jasminearoma'
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-white min-h-screen flex flex-col font-sans antialiased">
        <CartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <QuickViewModal />
          <SearchModal />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
