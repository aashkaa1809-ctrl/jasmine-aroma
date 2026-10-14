import { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  // Bedsheets
  {
    id: 'bs-01',
    name: 'Luxury White Hand Block Printed Bedsheet Set',
    slug: 'luxury-white-hand-block-printed-bedsheet-set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheets',
    tagline: 'Luminous drape with artisanal hand block printing for restful nights.',
    description: 'Woven from handpicked long-staple organic cotton yarns with traditional hand block botanical printing. Breathable, sumptuous, and designed to drape effortlessly over deep pillow-top mattresses.',
    price: 4999,
    originalPrice: 6499,
    rating: 4.9,
    reviewCount: 128,
    badge: 'Signature',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/bedsheet-luxury-white.jpg',
      '/assets/products/bedsheet-block-print.jpg',
      '/assets/products/bedsheet-aesthetic-beige.jpg'
    ],
    colors: [
      { name: 'Sanctuary Ivory', hex: '#FAF5EC', inStock: true },
      { name: 'Warm Cashmere', hex: '#E2D7C8', inStock: true },
      { name: 'Misty Sage', hex: '#9CA894', inStock: true }
    ],
    sizes: [
      { name: 'Queen Set (90" x 102")', dimensions: 'Fitted Sheet + Flat Sheet + 2 Pillowcases', price: 4499 },
      { name: 'King Set (108" x 102")', dimensions: 'Fitted Sheet + Flat Sheet + 2 Pillowcases', price: 4999 },
      { name: 'Super King Set (114" x 108")', dimensions: 'Fitted Sheet + Flat Sheet + 2 Pillowcases', price: 5499 }
    ],
    specifications: {
      material: '100% GOTS Certified Organic Long-Staple Cotton',
      weave: 'Hand Block Printed Cotton Weave',
      threadCount: '500 Thread Count (Single-Ply)',
      pocketDepth: '18" Deep Pockets with 360° Elastic Band',
      certifications: ['GOTS Certified Organic', 'OEKO-TEX Standard 100 Class 1'],
      countryOfOrigin: 'Crafted with master artisanal weavers in India',
      careInstructions: [
        'Machine wash cold on gentle cycle with plant-based detergent',
        'Tumble dry low or line dry in the shade',
        'Warm iron if desired while slightly damp'
      ]
    },
    story: 'We selected single-ply organic cotton yarns and heritage block printing artisans to create enduring textile beauty with natural botanical dyes.',
    highlights: [
      'Authentic hand block artisan printing',
      'Ultra-breathable long-staple cotton matrix',
      'Includes envelope closure on pillowcases to keep inserts hidden'
    ]
  },
  {
    id: 'bs-02',
    name: 'Block Printed Cotton Double Bedsheet 3-Piece Set',
    slug: 'block-printed-cotton-double-bedsheet-set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheets',
    tagline: 'Timeless floral block print with matching tailored pillow shams.',
    description: 'Engineered for warm sleepers and lovers of crisp, hotel-grade breathable cotton. Features hand block florals and two tailored matching pillow shams.',
    price: 4299,
    originalPrice: 5299,
    rating: 4.8,
    reviewCount: 94,
    badge: 'Best Seller',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/bedsheet-block-print.jpg',
      '/assets/products/bedsheet-luxury-white.jpg'
    ],
    colors: [
      { name: 'Heritage Indigo & Cream', hex: '#3B4D61', inStock: true },
      { name: 'Earthy Ochre', hex: '#C59B27', inStock: true }
    ],
    sizes: [
      { name: 'Double Set (90" x 100")', dimensions: 'Bedsheet + 2 Pillow Shams', price: 3999 },
      { name: 'King Set (108" x 102")', dimensions: 'Bedsheet + 2 Pillow Shams', price: 4299 }
    ],
    specifications: {
      material: '100% Pure Combed Cotton',
      weave: 'Artisanal Block Weave',
      threadCount: '400 Thread Count',
      pocketDepth: '16" Mattress Pocket',
      certifications: ['OEKO-TEX Standard 100'],
      careInstructions: ['Wash warm, tumble dry gentle, warm iron']
    },
    highlights: ['Exceptional breathability', 'Rich vegetable-based colors', 'Zero synthetic blends']
  },
  {
    id: 'bs-03',
    name: 'Aesthetic Beige Minimalist Bedsheet Set',
    slug: 'aesthetic-beige-minimalist-bedsheet-set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheets',
    tagline: 'Understated Scandinavian minimalism for cozy bedroom sanctuaries.',
    description: 'Designed for lovers of calming neutral palettes. The soft beige tones create an effortless zen atmosphere that invites restorative sleep.',
    price: 3899,
    originalPrice: 4799,
    rating: 5.0,
    reviewCount: 63,
    badge: 'Organic Luxury',
    featured: false,
    inStock: true,
    images: [
      '/assets/products/bedsheet-aesthetic-beige.jpg',
      '/assets/products/bedsheet-luxury-white.jpg'
    ],
    colors: [
      { name: 'Aesthetic Beige', hex: '#E6DEC9', inStock: true },
      { name: 'Pale Stone', hex: '#D2CEC4', inStock: true }
    ],
    sizes: [
      { name: 'King Set (108" x 102")', dimensions: 'Fitted + Flat + 2 Pillowcases', price: 3899 },
      { name: 'Super King (114" x 108")', dimensions: 'Fitted + Flat + 2 Pillowcases', price: 4399 }
    ],
    specifications: {
      material: '100% Organic Pure Cotton',
      weave: 'Sateen Matte Finish',
      threadCount: '450 Thread Count',
      pocketDepth: '18" Deep Pocket',
      certifications: ['GOTS Certified', 'OEKO-TEX Standard 100']
    }
  },

  // Comforters
  {
    id: 'cm-01',
    name: 'Cozy 7-Piece All-Season Comforter Set',
    slug: 'cozy-7-piece-comforter-set',
    category: 'comforters',
    categoryName: 'Plush Comforters',
    tagline: 'Complete bedroom refresh with all-season temperature-balancing loft.',
    description: 'Engineered with boxed baffle-wall chambers that lock the micro-cloud fiber clusters evenly across the quilt. Includes full comforter, matching shams, and decorative accents.',
    price: 6999,
    originalPrice: 8999,
    rating: 4.9,
    reviewCount: 156,
    badge: 'Signature',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/comforter-cozy-refresh.jpg',
      '/assets/products/comforter-cream-plush.jpg'
    ],
    colors: [
      { name: 'Slate Charcoal & White', hex: '#2A2E33', inStock: true },
      { name: 'Pure Cloud White', hex: '#FFFFFF', inStock: true }
    ],
    sizes: [
      { name: 'Queen 7-Piece Set (90" x 90")', dimensions: 'Full Ensemble with Shams', price: 6499 },
      { name: 'King 7-Piece Set (104" x 92")', dimensions: 'Full Ensemble with Shams', price: 6999 }
    ],
    specifications: {
      material: '400TC Organic Cotton Shell',
      fill: 'Hypoallergenic Virgin Micro-Cloud Fiber Clusters (350 GSM)',
      weave: 'Boxed Baffle-Box Stitching',
      certifications: ['OEKO-TEX Standard 100 Class 1', 'Hypoallergenic Certified'],
      careInstructions: ['Machine wash cold gentle, tumble dry low with dryer balls']
    },
    highlights: ['Zero cold spots with 12" baffle boxes', 'Includes 7 curated bedding components', 'Ultra-breathable shell']
  },
  {
    id: 'cm-02',
    name: 'Cream Ultra-Cozy Plush Comforter',
    slug: 'cream-ultra-cozy-plush-comforter',
    category: 'comforters',
    categoryName: 'Plush Comforters',
    tagline: 'Tactile plush warmth for the ultimate winter bedroom aesthetic.',
    description: 'Buttery cream textures designed to envelop you in serene comfort. Cloud-like softness that transforms chilly evenings into indulgent retreats.',
    price: 5999,
    originalPrice: 7499,
    rating: 5.0,
    reviewCount: 82,
    badge: 'Cloud Loft',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/comforter-cream-plush.jpg',
      '/assets/products/comforter-cozy-refresh.jpg'
    ],
    colors: [
      { name: 'Cream Velvet Cashmere', hex: '#F5EFE6', inStock: true }
    ],
    sizes: [
      { name: 'Queen (90" x 90")', dimensions: '380 GSM Winter Warmth', price: 5499 },
      { name: 'King (104" x 92")', dimensions: '380 GSM Winter Warmth', price: 5999 }
    ],
    specifications: {
      material: 'Velvety Micro-Plush Face with Organic Cotton Backing',
      fill: 'Hypoallergenic Down-Alternative Fill',
      certifications: ['OEKO-TEX Standard 100']
    }
  },

  // Cushion Covers
  {
    id: 'cc-01',
    name: 'Artisanal Decorative Flax Pillow Covers',
    slug: 'artisanal-decorative-flax-pillow-covers',
    category: 'cushion-covers',
    categoryName: 'Cushion Covers',
    tagline: 'Tactile slub linen shams with subtle piped flanged edges.',
    description: 'Spun from heavy European flax fibers with a distinct textured hand-feel. Features tailored flange edges and concealed YKK zipper closures.',
    price: 1499,
    originalPrice: 1999,
    rating: 4.9,
    reviewCount: 112,
    badge: 'Signature',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/cushion-decorative-flax.jpg',
      '/assets/products/cushion-boho-eclectic.jpg',
      '/assets/products/cushion-colorful-velvet.jpg'
    ],
    colors: [
      { name: 'Natural Oatmeal', hex: '#D4C6B1', inStock: true },
      { name: 'Burnt Ochre', hex: '#B87A4F', inStock: true },
      { name: 'Olive Green', hex: '#68705C', inStock: true }
    ],
    sizes: [
      { name: 'Square 18" x 18" (45x45 cm)', dimensions: 'Set of 2 Covers', price: 1499 },
      { name: 'Square 20" x 20" (50x50 cm)', dimensions: 'Set of 2 Covers', price: 1799 }
    ],
    specifications: {
      material: '100% Certified European Flax Linen (320 GSM)',
      closureType: 'Concealed YKK Zipper with Fabric Flap',
      certifications: ['European Flax® Certified', 'OEKO-TEX Standard 100'],
      careInstructions: ['Dry clean or machine wash cold gentle, lay flat to dry']
    },
    highlights: ['Tactile slub yarn with natural texture', 'Reinforced corner stitching', 'Includes set of 2 covers']
  },
  {
    id: 'cc-02',
    name: 'Boho Eclectic Textured Throw Cushion Cover',
    slug: 'boho-eclectic-textured-throw-cushion-cover',
    category: 'cushion-covers',
    categoryName: 'Cushion Covers',
    tagline: 'Hand-knotted tufted motifs for curated living rooms.',
    description: 'Brings tactile bohemian warmth into your seating sanctuary. Detailed with textural geometric loops and premium cotton backing.',
    price: 1699,
    originalPrice: 2299,
    rating: 4.9,
    reviewCount: 78,
    badge: 'Best Seller',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/cushion-boho-eclectic.jpg',
      '/assets/products/cushion-decorative-flax.jpg'
    ],
    colors: [
      { name: 'Ivory & Natural Taupe', hex: '#EBE3D5', inStock: true },
      { name: 'Terracotta Rust', hex: '#A85A3C', inStock: true }
    ],
    sizes: [
      { name: 'Square 18" x 18"', dimensions: 'Set of 2 Covers', price: 1699 },
      { name: 'Lumbar 14" x 24"', dimensions: 'Set of 2 Covers', price: 1899 }
    ],
    specifications: {
      material: 'Tufted Cotton Chenille with Linen Base',
      closureType: 'Concealed Zipper'
    }
  },
  {
    id: 'cc-03',
    name: 'Colorful Luxury Velvet Pillow Collection',
    slug: 'colorful-luxury-velvet-pillow-collection',
    category: 'cushion-covers',
    categoryName: 'Cushion Covers',
    tagline: 'Vibrant jewel tones with short-pile matte velvet lustre.',
    description: 'Add sophisticated chromatic pops to your sofas and beds. Lustrous cotton velvet that catches ambient light gracefully without harsh reflections.',
    price: 1599,
    originalPrice: 2199,
    rating: 4.8,
    reviewCount: 52,
    badge: 'New Season',
    featured: false,
    inStock: true,
    images: [
      '/assets/products/cushion-colorful-velvet.jpg',
      '/assets/products/cushion-decorative-flax.jpg'
    ],
    colors: [
      { name: 'Mustard Gold', hex: '#D4AF37', inStock: true },
      { name: 'Emerald Velvet', hex: '#1B4D3E', inStock: true },
      { name: 'Rust Sienna', hex: '#C04000', inStock: true }
    ],
    sizes: [
      { name: 'Square 18" x 18"', dimensions: 'Set of 2 Covers', price: 1599 }
    ],
    specifications: {
      material: '100% Matte Cotton Velvet'
    }
  },

  // Curtains
  {
    id: 'ct-01',
    name: 'Beige Pinch Pleat Classic Linen Curtains',
    slug: 'beige-pinch-pleat-classic-linen-curtains',
    category: 'curtains',
    categoryName: 'Linen Curtains',
    tagline: 'Tailored pinch pleats with elegant floor-to-ceiling puddling.',
    description: 'Combines the relaxed beauty of French flax linen with tailored pinch-pleat headers. Delivers graceful architectural structure and thermal acoustic insulation.',
    price: 3899,
    originalPrice: 4999,
    rating: 4.9,
    reviewCount: 142,
    badge: 'Signature',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/curtains-pinch-pleat-beige.jpg',
      '/assets/products/curtains-elegant-modern.jpg'
    ],
    colors: [
      { name: 'Classic Warm Beige', hex: '#E3DAC9', inStock: true },
      { name: 'Linen Ivory', hex: '#F0ECE1', inStock: true }
    ],
    sizes: [
      { name: '50" W x 84" L (Single Panel)', dimensions: 'Includes Drapery Hooks', price: 3499 },
      { name: '50" W x 96" L (Single Panel)', dimensions: 'Includes Drapery Hooks', price: 3899 },
      { name: '50" W x 108" L (Single Panel)', dimensions: 'Includes Drapery Hooks', price: 4399 }
    ],
    specifications: {
      material: '100% European Flax Linen face with Thermal Triple-Pass Backing',
      draperyHeading: 'Pinch Pleat Header with Adjustable Hooks',
      gsm: '380 GSM Total Weight',
      certifications: ['OEKO-TEX Standard 100', 'Thermal Acoustic Certified'],
      careInstructions: ['Dry clean recommended or spot clean with damp cloth']
    },
    highlights: ['Tailored pinch-pleat heading', 'Weighted hem for crisp, tailored fall', 'Reduces outside glare by up to 100%']
  },
  {
    id: 'ct-02',
    name: 'Modern Contrast Blackout Linen Drapes',
    slug: 'modern-contrast-blackout-linen-drapes',
    category: 'curtains',
    categoryName: 'Linen Curtains',
    tagline: 'Bold contrast borders with deep serene blackout mood.',
    description: 'Framed with dark architectural contrast borders to sculpt modern windows. Includes 100% thermal blackout backing for deep, undisturbed sleep.',
    price: 4199,
    originalPrice: 5399,
    rating: 5.0,
    reviewCount: 96,
    badge: 'Best Seller',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/curtains-elegant-modern.jpg',
      '/assets/products/curtains-pinch-pleat-beige.jpg'
    ],
    colors: [
      { name: 'Oatmeal & Charcoal Border', hex: '#333333', inStock: true }
    ],
    sizes: [
      { name: '50" W x 84" L', dimensions: 'Single Panel with Hooks', price: 3799 },
      { name: '50" W x 96" L', dimensions: 'Single Panel with Hooks', price: 4199 }
    ],
    specifications: {
      material: '100% Linen with Blackout Liner',
      draperyHeading: '3-in-1 Rod Pocket & Back Tab'
    }
  },

  // Soft Toys
  {
    id: 'st-01',
    name: 'Adorable Soft Koala Nursery Plush',
    slug: 'adorable-soft-koala-nursery-plush',
    category: 'soft-toys',
    categoryName: 'Soft Toys',
    tagline: 'Cloud-soft heirloom animal companion in baby-safe velour.',
    description: 'Designed to be a cherished bedtime friend. Handcrafted from buttery-soft hypoallergenic velour with hand-embroidered facial details for absolute infant safety.',
    price: 1899,
    originalPrice: 2299,
    rating: 5.0,
    reviewCount: 88,
    badge: 'Cloud Soft',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/toys-koala-plush.jpg',
      '/assets/products/toys-celestial-companions.jpg'
    ],
    colors: [
      { name: 'Gentle Koala Grey', hex: '#B8B5B0', inStock: true }
    ],
    sizes: [
      { name: 'Heirloom Huggable (14" Tall)', dimensions: 'Suitable from 0+ months', price: 1899 }
    ],
    specifications: {
      material: '100% GOTS Certified Organic Cotton Velour Shell',
      fill: 'Hypoallergenic Virgin Recycled Polyfill',
      certifications: ['EN71 Toy Safety Certified', 'ASTM F963 Safe'],
      careInstructions: ['Machine wash gentle in laundry bag, air dry flat']
    },
    highlights: ['Zero hard plastic eyes or buttons', 'Safe from newborn age (0+)', 'Comes in a keepsake cotton drawstring pouch']
  },
  {
    id: 'st-02',
    name: 'Aesthetic Avocado Soft Doll Companion',
    slug: 'aesthetic-avocado-soft-doll-companion',
    category: 'soft-toys',
    categoryName: 'Soft Toys',
    tagline: 'Whimsical aesthetic bedroom and nursery cuddle friend.',
    description: 'Whimsical, charming, and cloud-soft. Designed with delicate smiling embroidery and weighted base for cozy bedroom shelves and bedtime cuddles.',
    price: 1499,
    originalPrice: 1999,
    rating: 4.9,
    reviewCount: 64,
    badge: 'Best Seller',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/toys-avocado-plush.jpg',
      '/assets/products/toys-celestial-companions.jpg'
    ],
    colors: [
      { name: 'Avocado Green & Warm Taupe', hex: '#7A9A60', inStock: true }
    ],
    sizes: [
      { name: 'Medium Plush (12" Height)', dimensions: 'Suitable from 0+ months', price: 1499 }
    ],
    specifications: {
      material: 'Ultra-Soft Organic Micro-Velour',
      fill: 'Hypoallergenic Recycled Cloud Fibers'
    }
  },
  {
    id: 'st-03',
    name: 'Celestial Cloud Nursery Plushies Collection',
    slug: 'celestial-cloud-nursery-plushies-collection',
    category: 'soft-toys',
    categoryName: 'Soft Toys',
    tagline: 'Dreamy soft nursery companions for soothing bedtime rituals.',
    description: 'Superbly tactile and comforting companions. Created with calming botanical wash fabric to make sleep time gentle and peaceful.',
    price: 2199,
    originalPrice: 2799,
    rating: 5.0,
    reviewCount: 42,
    badge: 'Signature',
    featured: false,
    inStock: true,
    images: [
      '/assets/products/toys-celestial-companions.jpg',
      '/assets/products/toys-koala-plush.jpg'
    ],
    colors: [
      { name: 'Oatmeal & Pastel Cloud', hex: '#EDE6DB', inStock: true }
    ],
    sizes: [
      { name: 'Set of 2 Companions', dimensions: 'Suitable from 0+ months', price: 2199 }
    ],
    specifications: {
      material: '100% Organic Velour Cotton',
      fill: 'Recycled Hypoallergenic Fibers'
    }
  }
];
