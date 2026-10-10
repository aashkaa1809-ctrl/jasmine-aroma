import { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  // Bedsheets
  {
    id: 'bs-01',
    name: '500TC Organic Sateen Sheet Set',
    slug: '500tc-organic-sateen-sheet-set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheets',
    tagline: 'Luminous drape with a silk-like hand feel for restorative nights.',
    description: 'Woven from handpicked long-staple organic cotton yarns with a four-over-one sateen structure. Breathable, sumptuous, and designed to drape effortlessly over deep pillow-top mattresses.',
    price: 4999,
    originalPrice: 6499,
    rating: 4.9,
    reviewCount: 128,
    badge: 'Signature',
    featured: true,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Sanctuary Ivory', hex: '#FAF5EC', inStock: true },
      { name: 'Warm Cashmere', hex: '#E2D7C8', inStock: true },
      { name: 'Misty Sage', hex: '#9CA894', inStock: true },
      { name: 'Midnight Charcoal', hex: '#1F1F1F', inStock: true }
    ],
    sizes: [
      { name: 'Queen Set (90" x 102")', dimensions: 'Fitted Sheet + Flat Sheet + 2 Pillowcases', price: 4499 },
      { name: 'King Set (108" x 102")', dimensions: 'Fitted Sheet + Flat Sheet + 2 Pillowcases', price: 4999 },
      { name: 'Super King Set (114" x 108")', dimensions: 'Fitted Sheet + Flat Sheet + 2 Pillowcases', price: 5499 }
    ],
    specifications: {
      material: '100% GOTS Certified Organic Long-Staple Cotton',
      weave: 'Lustrous Sateen Weave',
      threadCount: '500 Thread Count (Single-Ply)',
      pocketDepth: '18" Deep Pockets with 360° Elastic Band',
      certifications: ['GOTS Certified Organic', 'OEKO-TEX Standard 100 Class 1'],
      countryOfOrigin: 'Crafted with master weavers in India & Portugal',
      careInstructions: [
        'Machine wash cold on gentle cycle with plant-based detergent',
        'Tumble dry low or line dry in the shade',
        'Warm iron if desired while slightly damp'
      ]
    },
    story: 'We selected single-ply yarns from certified organic cultivars to provide the natural lustre of silk combined with the breathability of pure cotton.',
    highlights: [
      'Four-over-one weave creates a gentle silky sheen',
      'Resistant to pilling and friction even after 100+ washes',
      'Includes envelope closure on pillowcases to keep inserts hidden'
    ]
  },
  {
    id: 'bs-02',
    name: 'Crisp Hotel Percale Sheet Set',
    slug: 'crisp-hotel-percale-sheet-set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheets',
    tagline: 'Cool-to-the-touch, matte finish reminiscent of five-star Mediterranean villas.',
    description: 'Engineered for warm sleepers and lovers of crisp, hotel-grade cotton. Classic one-over-one percale weave promotes continuous airflow for undisturbed, temperate sleep.',
    price: 4299,
    originalPrice: 5299,
    rating: 4.8,
    reviewCount: 94,
    badge: 'Best Seller',
    featured: true,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Optical White', hex: '#FFFFFF', inStock: true },
      { name: 'French Sand', hex: '#EAE5D9', inStock: true },
      { name: 'Pale Stone', hex: '#D2CEC4', inStock: true }
    ],
    sizes: [
      { name: 'Queen Set (90" x 102")', dimensions: 'Fitted + Flat + 2 Pillowcases', price: 3999 },
      { name: 'King Set (108" x 102")', dimensions: 'Fitted + Flat + 2 Pillowcases', price: 4299 }
    ],
    specifications: {
      material: '100% Long-Staple Combed Cotton',
      weave: 'One-Over-One Crisp Percale',
      threadCount: '400 Thread Count',
      pocketDepth: '16" Mattress Pocket',
      certifications: ['OEKO-TEX Standard 100'],
      careInstructions: ['Wash warm, tumble dry gentle, warm iron']
    },
    highlights: ['Exceptional breathability', 'Crisp tactile texture', 'Zero synthetic blends']
  },
  {
    id: 'bs-03',
    name: 'Botanical Jacquard Pure Cotton Set',
    slug: 'botanical-jacquard-pure-cotton-set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheets',
    tagline: 'Subtle tone-on-tone botanical motif woven directly into the heirloom fabric.',
    description: 'A masterpiece of jacquard loom artistry. Delicate jasmine petal outlines are woven directly into the organic cotton matrix, creating sensory depth and an exquisite bedroom focal point.',
    price: 5799,
    originalPrice: 7299,
    rating: 5.0,
    reviewCount: 63,
    badge: 'Organic Luxury',
    featured: false,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Pearl Jasmine', hex: '#F7F4EC', inStock: true },
      { name: 'Smoky Taupe', hex: '#B8ABA0', inStock: true }
    ],
    sizes: [
      { name: 'King Set (108" x 102")', dimensions: 'Fitted + Flat + 2 Pillowcases', price: 5799 },
      { name: 'Super King (114" x 108")', dimensions: 'Fitted + Flat + 2 Pillowcases', price: 6299 }
    ],
    specifications: {
      material: '100% Organic Jacquard Combed Cotton',
      weave: 'Artisanal Jacquard Weave',
      threadCount: '450 Thread Count',
      pocketDepth: '18" Deep Pocket',
      certifications: ['GOTS Certified', 'OEKO-TEX Standard 100']
    }
  },

  // Comforters
  {
    id: 'cm-01',
    name: 'Cloud All-Season Comforter',
    slug: 'cloud-all-season-comforter',
    category: 'comforters',
    categoryName: 'Plush Comforters',
    tagline: 'Weightless warmth that adapts to your body temperature through all 4 seasons.',
    description: 'Engineered with boxed baffle-wall chambers that lock the micro-cloud fiber clusters evenly across the quilt. Enclosed in a 400TC organic sateen casing with piped satin edges.',
    price: 6999,
    originalPrice: 8999,
    rating: 4.9,
    reviewCount: 156,
    badge: 'Signature',
    featured: true,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4550?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Pure Cloud White', hex: '#FFFFFF', inStock: true },
      { name: 'Oatmeal Natural', hex: '#EBE5DA', inStock: true }
    ],
    sizes: [
      { name: 'Queen (90" x 90")', dimensions: 'All-Season Loft 350 GSM', price: 6499 },
      { name: 'King (104" x 92")', dimensions: 'All-Season Loft 350 GSM', price: 6999 }
    ],
    specifications: {
      material: '400TC Organic Cotton Sateen Shell',
      fill: 'Hypoallergenic Virgin Micro-Cloud Fiber Clusters (350 GSM)',
      weave: 'Boxed Baffle-Box Stitching',
      certifications: ['OEKO-TEX Standard 100 Class 1', 'Hypoallergenic Certified'],
      careInstructions: ['Machine wash cold gentle, tumble dry low with dryer balls']
    },
    highlights: ['Zero cold spots with 12" baffle boxes', '8 corner & side anchoring loops', 'Ultra-breathable shell']
  },
  {
    id: 'cm-02',
    name: 'Mulberry Silk Infused Duvet',
    slug: 'mulberry-silk-infused-duvet',
    category: 'comforters',
    categoryName: 'Plush Comforters',
    tagline: 'Grade 6A Mulberry silk batting for the pinnacle of luxury thermal regulation.',
    description: 'Long-strand natural mulberry silk hand-stretched and layered within a whisper-quiet organic cotton jacquard shell. Naturally hypoallergenic, dust-mite resistant, and moisture-wicking.',
    price: 9499,
    originalPrice: 11999,
    rating: 5.0,
    reviewCount: 82,
    badge: 'Organic Luxury',
    featured: true,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1540518614846-7ede433c4550?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Silk Pearl', hex: '#FAF7F0', inStock: true }
    ],
    sizes: [
      { name: 'King (104" x 92")', dimensions: 'Grade 6A Mulberry Silk 300 GSM', price: 9499 },
      { name: 'Super King (110" x 98")', dimensions: 'Grade 6A Mulberry Silk 300 GSM', price: 10499 }
    ],
    specifications: {
      material: '500TC Jacquard Shell',
      fill: '100% Long-Strand Mulberry Silk (Grade 6A)',
      certifications: ['OEKO-TEX Standard 100', 'OEKO-TEX Made in Green']
    }
  },
  {
    id: 'cm-03',
    name: 'Artisan Channel-Stitched Quilt',
    slug: 'artisan-channel-stitched-quilt',
    category: 'comforters',
    categoryName: 'Plush Comforters',
    tagline: 'Linear channel quilting with vintage stone-washed texture.',
    description: 'An essential layering piece for contemporary beds. Fluff-washed for instant lived-in comfort with modern minimalist horizontal channel quilting.',
    price: 5499,
    originalPrice: 6999,
    rating: 4.8,
    reviewCount: 71,
    badge: 'New Season',
    featured: false,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Mineral Slate', hex: '#6F777B', inStock: true },
      { name: 'Sand Dunes', hex: '#DED3C4', inStock: true }
    ],
    sizes: [
      { name: 'King (102" x 90")', dimensions: '250 GSM Lightweight Quilt', price: 5499 }
    ],
    specifications: {
      material: '100% Stone-Washed Cotton',
      fill: 'Bonded Cotton/Microfiber Blend'
    }
  },

  // Cushion Covers
  {
    id: 'cc-01',
    name: 'Belgian Textured Flax Linen Cushion Cover',
    slug: 'belgian-textured-flax-linen-cushion-cover',
    category: 'cushion-covers',
    categoryName: 'Cushion Covers',
    tagline: 'Raw-edged tactile richness in natural earthy tones.',
    description: 'Spun from heavy French flax fibers with a distinct slub texture. Features an artisanal 1-inch tailored flange edge and a discreet hidden zipper closure on the back.',
    price: 1499,
    originalPrice: 1999,
    rating: 4.9,
    reviewCount: 112,
    badge: 'Signature',
    featured: true,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Natural Flax', hex: '#D4C6B1', inStock: true },
      { name: 'Burnt Ochre', hex: '#B87A4F', inStock: true },
      { name: 'Olive Grove', hex: '#68705C', inStock: true },
      { name: 'Washed Charcoal', hex: '#2C2B2A', inStock: true }
    ],
    sizes: [
      { name: 'Square 18" x 18" (45x45 cm)', dimensions: 'Set of 2 Covers', price: 1499 },
      { name: 'Square 20" x 20" (50x50 cm)', dimensions: 'Set of 2 Covers', price: 1799 },
      { name: 'Lumbar 14" x 24" (35x60 cm)', dimensions: 'Set of 2 Covers', price: 1599 }
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
    name: 'Botanical Jasmine Embroidered Cover',
    slug: 'botanical-jasmine-embroidered-cover',
    category: 'cushion-covers',
    categoryName: 'Cushion Covers',
    tagline: 'Hand-guided thread embroidery capturing delicate floral branches.',
    description: 'Each piece is detailed with fine silk-finish thread embroidery over an ivory organic cotton-linen blend. Brings bespoke atelier craftsmanship into your living room.',
    price: 1899,
    originalPrice: 2499,
    rating: 5.0,
    reviewCount: 47,
    badge: 'Best Seller',
    featured: true,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Ivory / Gold Leaf', hex: '#FAF4E8', inStock: true },
      { name: 'Sage / Pale Silver', hex: '#C2CCC0', inStock: true }
    ],
    sizes: [
      { name: 'Square 18" x 18"', dimensions: 'Set of 2 Covers', price: 1899 },
      { name: 'Square 20" x 20"', dimensions: 'Set of 2 Covers', price: 2199 }
    ],
    specifications: {
      material: '60% Organic Cotton, 40% Belgian Linen',
      closureType: 'Concealed Zipper'
    }
  },
  {
    id: 'cc-03',
    name: 'Minimalist Matte Velvet Sham',
    slug: 'minimalist-matte-velvet-sham',
    category: 'cushion-covers',
    categoryName: 'Cushion Covers',
    tagline: 'Sumptuous short-pile cotton velvet with a modern matte finish.',
    description: 'Rich, plush, and wonderfully tactile. Our matte cotton velvet catches ambient lighting softly without overly glossy reflections.',
    price: 1699,
    originalPrice: 2199,
    rating: 4.8,
    reviewCount: 39,
    badge: 'New Season',
    featured: false,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Obsidian Black', hex: '#111111', inStock: true },
      { name: 'Warm Taupe', hex: '#8B7E74', inStock: true }
    ],
    sizes: [
      { name: 'Square 18" x 18"', dimensions: 'Set of 2 Covers', price: 1699 }
    ],
    specifications: {
      material: '100% Cotton Velvet'
    }
  },

  // Curtains
  {
    id: 'ct-01',
    name: 'Flax Linen Blackout Curtain Panel',
    slug: 'flax-linen-blackout-curtain-panel',
    category: 'curtains',
    categoryName: 'Linen Curtains',
    tagline: '100% light-blocking with the organic textured beauty of pure linen.',
    description: 'Combines the relaxed luxury of French flax linen on the room-facing side with a hidden triple-pass thermal blackout backing. Insulates against summer heat, cold drafts, and morning sunlight.',
    price: 3899,
    originalPrice: 4999,
    rating: 4.9,
    reviewCount: 142,
    badge: 'Signature',
    featured: true,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Warm Linen Ivory', hex: '#F0ECE1', inStock: true },
      { name: 'Earthy Oatmeal', hex: '#D8CDBE', inStock: true },
      { name: 'Deep Anthracite', hex: '#222222', inStock: true }
    ],
    sizes: [
      { name: '50" W x 84" L (Single Panel)', dimensions: 'Includes Drapery Hooks', price: 3499 },
      { name: '50" W x 96" L (Single Panel)', dimensions: 'Includes Drapery Hooks', price: 3899 },
      { name: '50" W x 108" L (Single Panel)', dimensions: 'Includes Drapery Hooks', price: 4399 }
    ],
    specifications: {
      material: '100% European Flax Linen face with Thermal Triple-Pass Backing',
      draperyHeading: '3-in-1 Header: Rod Pocket, Back Tab, & Pinch Pleat Hook belt',
      gsm: '380 GSM Total Weight',
      certifications: ['OEKO-TEX Standard 100', 'Thermal Acoustic Certified'],
      careInstructions: ['Dry clean recommended or spot clean with damp cloth']
    },
    highlights: ['100% Total Blackout Rating', 'Weighted hem for crisp, tailored fall', 'Reduces outside noise by up to 30%']
  },
  {
    id: 'ct-02',
    name: 'Airy Sheer Belgian Voile Drapes',
    slug: 'airy-sheer-belgian-voile-drapes',
    category: 'curtains',
    categoryName: 'Linen Curtains',
    tagline: 'Diffuses harsh sunlight into a warm, gentle cinematic glow.',
    description: 'Light as a summer whisper. Woven with open-slub linen yarns that filter sunlight while maintaining daytime privacy and gentle airflow.',
    price: 2699,
    originalPrice: 3499,
    rating: 4.8,
    reviewCount: 96,
    badge: 'Best Seller',
    featured: true,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF', inStock: true },
      { name: 'Chalk Ivory', hex: '#F9F7F1', inStock: true }
    ],
    sizes: [
      { name: '50" W x 84" L', dimensions: 'Single Panel with Rod Pocket', price: 2299 },
      { name: '50" W x 96" L', dimensions: 'Single Panel with Rod Pocket', price: 2699 }
    ],
    specifications: {
      material: '100% Open-Weave Flax Voile',
      draperyHeading: 'Rod Pocket & Back Tab'
    }
  },

  // Soft Toys
  {
    id: 'st-01',
    name: 'Celestial Cloud-Soft Bunny Companion',
    slug: 'celestial-cloud-soft-bunny-companion',
    category: 'soft-toys',
    categoryName: 'Soft Toys',
    tagline: 'Heirloom nursery companion in ultra-soft organic cotton velour.',
    description: 'Designed to be a cherished forever friend. Meticulously handcrafted from buttery-soft organic cotton velour with hand-embroidered facial details for absolute infant safety.',
    price: 1899,
    originalPrice: 2299,
    rating: 5.0,
    reviewCount: 88,
    badge: 'Cloud Soft',
    featured: true,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Honey Oat', hex: '#E0D4C3', inStock: true },
      { name: 'Powder Cloud', hex: '#F4EFE6', inStock: true }
    ],
    sizes: [
      { name: 'Standard Heirloom (14" Tall)', dimensions: 'Suitable from 0+ months', price: 1899 }
    ],
    specifications: {
      material: '100% GOTS Certified Organic Cotton Velour',
      fill: 'Hypoallergenic Virgin Recycled Polyfill',
      certifications: ['EN71 Toy Safety Certified', 'ASTM F963 Safe', 'GOTS Organic'],
      careInstructions: ['Machine wash gentle in laundry bag, air dry flat']
    },
    highlights: ['Zero hard plastic eyes or buttons', 'Safe from newborn age (0+)', 'Comes in a keepsake cotton drawstring pouch']
  },
  {
    id: 'st-02',
    name: 'Gentle Elephant Sleep Huggable',
    slug: 'gentle-elephant-sleep-huggable',
    category: 'soft-toys',
    categoryName: 'Soft Toys',
    tagline: 'An adorable calming plush with gentle weighted base for soothing sleep.',
    description: 'Designed with long floppy ears and a soft huggable shape. The calming botanical washed organic fabric makes bedtime a cozy, comforting ritual.',
    price: 2199,
    originalPrice: 2799,
    rating: 4.9,
    reviewCount: 54,
    badge: 'Best Seller',
    featured: true,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Gentle Stone Grey', hex: '#C4BEB6', inStock: true }
    ],
    sizes: [
      { name: 'Medium Huggable (16" Length)', dimensions: 'Suitable from 0+ months', price: 2199 }
    ],
    specifications: {
      material: '100% Organic Cotton Velour',
      fill: 'Hypoallergenic Recycled Cloud Fibers'
    }
  }
];
