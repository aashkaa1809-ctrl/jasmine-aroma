import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '../context/CartContext';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { QuickViewModal } from '../components/ui/QuickViewModal';
import { SearchModal } from '../components/ui/SearchModal';
import { CartDrawer } from '../components/ui/CartDrawer';
import { FloatingContactBar } from '../components/ui/FloatingContactBar';

export const metadata: Metadata = {
  title: 'Jasmine Aroma | Luxury Home Décor & Organic Bedding Atelier',
  description: 'Elevate everyday living with Jasmine Aroma. Hand block printed cotton bedsheets, cloud comforters, Belgian linen cushion covers, blackout curtains, and nursery plushies.',
  keywords: [
    'Jasmine Aroma',
    'Luxury Bedding India',
    'Organic Bedsheets',
    'Block Printed Bedsheets',
    'Flax Linen Blackout Curtains',
    'Plush Comforters',
    'Belgian Linen Cushion Covers',
    'Luxury Home Décor'
  ],
  authors: [{ name: 'Jasmine Aroma Atelier' }],
  openGraph: {
    title: 'Jasmine Aroma | Luxury Home Décor & Organic Bedding Atelier',
    description: 'Awaken your senses in pure organic comfort. Handcrafted bedsheets, plush comforters, cushion covers, and linen drapes.',
    url: 'https://jasminearoma.in',
    siteName: 'Jasmine Aroma',
    images: [
      {
        url: 'https://jasminearoma.in/assets/products/bedsheet-luxury-white.jpg',
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
    images: ['https://jasminearoma.in/assets/products/bedsheet-luxury-white.jpg'],
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
    url: 'https://jasminearoma.in',
    priceRange: '₹₹₹',
    brand: {
      '@type': 'Brand',
      name: 'Jasmine Aroma',
      logo: 'https://jasminearoma.in/assets/branding/logo-transparent.png'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    telephone: '+918307369611',
    email: 'contact@jasminearoma.in',
    sameAs: [
      'https://www.instagram.com/jasmine.aroma_/?hl=en#'
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAF8F5] text-neutral-900 min-h-screen flex flex-col font-sans antialiased">
        <CartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <QuickViewModal />
          <SearchModal />
          <CartDrawer />
          <FloatingContactBar />
        </CartProvider>
      </body>
    </html>
  );
}
