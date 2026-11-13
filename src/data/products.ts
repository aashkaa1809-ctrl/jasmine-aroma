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
  {
    id: 'bs-04',
    name: 'Pastel Meadow Floral Cotton Bedsheet Set',
    slug: 'pastel-meadow-floral-cotton-bedsheet-set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheets',
    tagline: 'Soft blush & sage blossom bouquets woven on pristine ivory cotton.',
    description: 'Inspired by spring meadows in full bloom, this luxury bedsheet set features graceful floral sprigs in blush pink, sage green, and honey yellow against a natural ivory base. Soft-washed long-staple cotton guarantees an airy, cloud-soft touch every night.',
    price: 3499,
    originalPrice: 4699,
    rating: 4.9,
    reviewCount: 84,
    badge: 'New Season',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/bedsheet-pastel-meadow-floral.jpg'
    ],
    colors: [
      { name: 'Pastel Meadow', hex: '#E8D3CE', inStock: true },
      { name: 'Spring Sage', hex: '#9EAA96', inStock: true }
    ],
    sizes: [
      { name: 'Queen Set (90" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 3499 },
      { name: 'King Set (108" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 3999 }
    ],
    specifications: {
      material: '100% Super-Combed Glace Cotton',
      weave: 'Silky Percale Matte Finish',
      threadCount: '400 Thread Count',
      certifications: ['OEKO-TEX Standard 100', 'Azo-Free Dyes'],
      countryOfOrigin: 'Proudly Designed & Crafted in India',
      careInstructions: [
        'Machine wash cold, gentle cycle',
        'Tumble dry low or line dry in the shade',
        'Warm iron if desired'
      ]
    },
    story: 'A poetic celebration of fresh morning blooms, designed to bring calm tranquility into modern sanctuaries.',
    highlights: [
      'Soft pastel botanical floral bouquet print',
      'Shrink & fade resistant colorfast reactive dyes',
      'Coordinated pillow covers with neat stitched borders'
    ]
  },
  {
    id: 'bs-05',
    name: 'Vintage Royal Botanical Sand Bedsheet Set',
    slug: 'vintage-royal-botanical-sand-bedsheet-set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheets',
    tagline: 'Ornate heritage block-style botanicals on warm sand-toned cotton.',
    description: 'Featuring timeless royal palmette flourishes and leafy vines on a warm sand background, this set brings regal elegance and old-world grandeur to master suites.',
    price: 3799,
    originalPrice: 4999,
    rating: 4.8,
    reviewCount: 62,
    badge: 'Best Seller',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/bedsheet-vintage-royal-botanical.jpg'
    ],
    colors: [
      { name: 'Royal Sand', hex: '#D5C4A1', inStock: true },
      { name: 'Warm Terracotta', hex: '#C27D60', inStock: true }
    ],
    sizes: [
      { name: 'Queen Set (90" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 3799 },
      { name: 'King Set (108" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 4299 }
    ],
    specifications: {
      material: '100% Long-Staple Pure Cotton',
      weave: 'Heritage Sateen Weave',
      threadCount: '450 Thread Count',
      certifications: ['OEKO-TEX Standard 100'],
      countryOfOrigin: 'Crafted with master textile artisans in India',
      careInstructions: [
        'Machine wash gentle in cold water',
        'Dry in shade to preserve vibrant vintage pigments',
        'Warm iron recommended'
      ]
    },
    story: 'Inspired by the royal courtyards of Rajasthan, recreating regal botanical tapestries for comfortable modern living.',
    highlights: [
      'Intricate royal heritage motifs',
      'Breathable natural cotton fiber matrix',
      'Deep drape with wrinkle-resistant finish'
    ]
  },
  {
    id: 'bs-06',
    name: 'Monochrome Geometric Patchwork Bedsheet Set',
    slug: 'monochrome-geometric-patchwork-bedsheet-set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheets',
    tagline: 'Contemporary chevron, grid, and block patterns in modern black & white.',
    description: 'Bold, chic, and architecturally inspired. This monochrome patchwork bedsheet combines fine stripes, diamond grids, and stylized foliage into a dynamic statement for modern urban bedrooms.',
    price: 3599,
    originalPrice: 4799,
    rating: 4.9,
    reviewCount: 91,
    badge: 'New Season',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/bedsheet-monochrome-geometric-chevron.jpg'
    ],
    colors: [
      { name: 'Monochrome Noir', hex: '#2B2B2B', inStock: true },
      { name: 'Chalk White', hex: '#F4F4F4', inStock: true }
    ],
    sizes: [
      { name: 'Queen Set (90" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 3599 },
      { name: 'King Set (108" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 4099 }
    ],
    specifications: {
      material: '100% Breathable Long-Staple Cotton',
      weave: 'Smooth Percale Weave',
      threadCount: '400 Thread Count',
      certifications: ['OEKO-TEX Certified', 'Eco-Reactive Pigment Print'],
      countryOfOrigin: 'Made in India',
      careInstructions: [
        'Wash with like colors',
        'Machine wash cold cycle',
        'Tumble dry low'
      ]
    },
    story: 'Designed for minimalists who appreciate contemporary geometry balanced with the warmth of natural cotton.',
    highlights: [
      'Modern Scandinavian-inspired geometric collage',
      'High-contrast color fastness with zero bleed',
      'Ultra-crisp and cooling hand-feel'
    ]
  },
  {
    id: 'bs-07',
    name: 'Pastel Mosaic Hearts & Tiles Bedsheet Set',
    slug: 'pastel-mosaic-hearts-and-tiles-bedsheet-set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheets',
    tagline: 'Playful pastel geometric tiles with charming heart medallions in blush & cyan.',
    description: 'Infuse warmth and gentle romance into your bedroom. A delightful mosaic of pastel pink, sky blue, cream, and mustard geometric squares highlighted by tender heart motifs.',
    price: 3299,
    originalPrice: 4399,
    rating: 4.8,
    reviewCount: 47,
    badge: 'Cloud Soft',
    featured: false,
    inStock: true,
    images: [
      '/assets/products/bedsheet-pastel-mosaic-heart.jpg'
    ],
    colors: [
      { name: 'Pastel Blush Mosaic', hex: '#E2B6B6', inStock: true },
      { name: 'Sky Cyan', hex: '#A8CCD7', inStock: true }
    ],
    sizes: [
      { name: 'Queen Set (90" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 3299 },
      { name: 'King Set (108" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 3799 }
    ],
    specifications: {
      material: '100% Super-Soft Brushed Cotton',
      weave: 'Soft-Touch Percale Weave',
      threadCount: '400 Thread Count',
      certifications: ['Skin-Safe OEKO-TEX Standard 100'],
      countryOfOrigin: 'India',
      careInstructions: [
        'Gentle cycle machine wash',
        'Do not bleach',
        'Warm iron if needed'
      ]
    },
    story: 'Created to bring joyful whimsy, cozy charm, and peaceful relaxation to every guest room and master suite.',
    highlights: [
      'Whimsical heart & tile patchwork',
      'Cozy brushed cotton finish',
      'Hypoallergenic and highly breathable'
    ]
  },
  {
    id: 'bs-08',
    name: 'Midnight Navy Botanical Blossom Bedsheet Set',
    slug: 'midnight-navy-botanical-blossom-bedsheet-set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheets',
    tagline: 'Rich midnight navy canvas illuminated with coral and ivory flora.',
    description: 'Deep, dramatic, and luxurious. An enchanting dark indigo navy background adorned with blooming coral roses, cream peonies, and forest foliage for a lavish, moody aesthetic.',
    price: 3899,
    originalPrice: 5199,
    rating: 5.0,
    reviewCount: 112,
    badge: 'Signature',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/bedsheet-midnight-navy-blossom.jpg'
    ],
    colors: [
      { name: 'Midnight Navy', hex: '#1B263B', inStock: true },
      { name: 'Coral Blossom', hex: '#E07A5F', inStock: true }
    ],
    sizes: [
      { name: 'Queen Set (90" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 3899 },
      { name: 'King Set (108" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 4399 },
      { name: 'Super King Set (114" x 108")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 4899 }
    ],
    specifications: {
      material: '100% Premium Combed Cotton',
      weave: 'Lustrous Sateen Weave',
      threadCount: '500 Thread Count',
      certifications: ['OEKO-TEX Standard 100', 'Azo-Free Reactive Dyeing'],
      countryOfOrigin: 'Made in India',
      careInstructions: [
        'Machine wash cold inside-out',
        'Tumble dry low',
        'Iron on reverse side'
      ]
    },
    story: 'A rich midnight floral inspired by starlit botanical gardens, exuding warmth, intimacy, and hotel-suite elegance.',
    highlights: [
      'Rich saturated midnight tones',
      'Silk-like sateen handfeel',
      'Fade-proof reactive dye technology'
    ]
  },
  {
    id: 'bs-09',
    name: 'Coastal Blue Scallop Fan Botanical Bedsheet Set',
    slug: 'coastal-blue-scallop-fan-botanical-bedsheet-set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheets',
    tagline: 'Serene Mediterranean blues with graceful fan-scallops and leaves.',
    description: 'Refresh your bed with cool oceanic tranquility. Classic coastal fan motifs intertwined with delicate blue leaves against crisp white cotton create a refreshing seaside retreat in your own home.',
    price: 3699,
    originalPrice: 4899,
    rating: 4.9,
    reviewCount: 78,
    badge: 'Best Seller',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/bedsheet-coastal-blue-scallop-fan.jpg'
    ],
    colors: [
      { name: 'Cerulean Fan', hex: '#2A6F97', inStock: true },
      { name: 'Ocean Mist', hex: '#89C2D9', inStock: true }
    ],
    sizes: [
      { name: 'Queen Set (90" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 3699 },
      { name: 'King Set (108" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 4199 }
    ],
    specifications: {
      material: '100% Long-Staple Cotton',
      weave: 'Breathable Percale Weave',
      threadCount: '450 Thread Count',
      certifications: ['OEKO-TEX Certified'],
      countryOfOrigin: 'Crafted in India',
      careInstructions: [
        'Machine wash cold, gentle cycle',
        'Line dry in shade',
        'Medium iron'
      ]
    },
    story: 'Evoking the refreshing ocean breeze and tiled verandas of coastal Greece and the Italian Riviera.',
    highlights: [
      'Crisp and cooling touch for year-round ease',
      'Art Deco scallop & palm botanical fusion',
      'Generously sized for thick mattresses'
    ]
  },
  {
    id: 'bs-010',
    name: 'Earthy Abstract Arches & Mocha Stripes Bedsheet Set',
    slug: 'earthy-abstract-arches-mocha-stripes-bedsheet-set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheets',
    tagline: 'Warm terracotta, cinnamon, and mocha arches with retro geometric flair.',
    description: 'Bring grounded warmth into your space with mid-century modern bohemian arches, semicircles, and textured neutral striping in tones of terracotta, latte, and warm clay.',
    price: 3599,
    originalPrice: 4699,
    rating: 4.8,
    reviewCount: 53,
    badge: 'New Season',
    featured: false,
    inStock: true,
    images: [
      '/assets/products/bedsheet-earthy-abstract-arches.jpg'
    ],
    colors: [
      { name: 'Terracotta Clay', hex: '#B85D43', inStock: true },
      { name: 'Mocha Latte', hex: '#9C7A5B', inStock: true }
    ],
    sizes: [
      { name: 'Queen Set (90" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 3599 },
      { name: 'King Set (108" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 4099 }
    ],
    specifications: {
      material: '100% Natural Organic Cotton',
      weave: 'Matte Slub Percale',
      threadCount: '400 Thread Count',
      certifications: ['GOTS Certified Organic Fibers', 'OEKO-TEX Standard 100'],
      countryOfOrigin: 'India',
      careInstructions: [
        'Gentle machine wash with mild detergent',
        'Tumble dry low',
        'Warm iron'
      ]
    },
    story: 'Designed for grounding serenity, drawing palette inspiration from sunset desert clays and raw ceramic pottery.',
    highlights: [
      'Modern abstract arch artwork',
      '100% natural organic handfeel',
      'Non-toxic earthy mineral dyes'
    ]
  },
  {
    id: 'bs-011',
    name: 'Sapphire Foliage & White Garden Bedsheet Set',
    slug: 'sapphire-foliage-white-garden-bedsheet-set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheets',
    tagline: 'Regal sapphire royal blue backdrop with lush ivory leaf cascades.',
    description: 'A stunning high-contrast botanical masterpiece. Graceful white fern leaves and trailing branches cascade over deep sapphire blue cotton, giving your bed an oasis-like grandeur.',
    price: 3799,
    originalPrice: 4999,
    rating: 4.9,
    reviewCount: 88,
    badge: 'Signature',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/bedsheet-sapphire-botanical-garden.jpg'
    ],
    colors: [
      { name: 'Sapphire Royal Blue', hex: '#1D3557', inStock: true },
      { name: 'Porcelain White', hex: '#F1FAEE', inStock: true }
    ],
    sizes: [
      { name: 'Queen Set (90" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 3799 },
      { name: 'King Set (108" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 4299 }
    ],
    specifications: {
      material: '100% Combed Compact Cotton',
      weave: 'Silky Sateen Weave',
      threadCount: '450 Thread Count',
      certifications: ['OEKO-TEX Standard 100 Class 1'],
      countryOfOrigin: 'India',
      careInstructions: [
        'Wash in cold water before first use',
        'Gentle machine wash',
        'Iron damp'
      ]
    },
    story: 'Celebrates nocturnal flora in palace gardens under the moonlight, radiating quiet luxury and peaceful sleep.',
    highlights: [
      'Rich saturated sapphire shade',
      'Silky smooth hand-feel',
      'Color-lock technology ensures zero bleeding'
    ]
  },
  {
    id: 'bs-012',
    name: 'Nordic Triangle Mosaic Quilt-Style Bedsheet Set',
    slug: 'nordic-triangle-mosaic-quilt-style-bedsheet-set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheets',
    tagline: 'Scandi kaleidoscope triangles in teal, mustard, blush, and slate.',
    description: 'Fresh Nordic styling with vibrant geometric harmony. Hundreds of delicate multi-tonal triangles form a kaleidoscopic quilt-style pattern that brightens any contemporary bedroom.',
    price: 3399,
    originalPrice: 4499,
    rating: 4.8,
    reviewCount: 41,
    badge: 'Cloud Soft',
    featured: false,
    inStock: true,
    images: [
      '/assets/products/bedsheet-scandi-triangle-mosaic.jpg'
    ],
    colors: [
      { name: 'Nordic Multi', hex: '#457B9D', inStock: true },
      { name: 'Mustard Ochre', hex: '#E9C46A', inStock: true }
    ],
    sizes: [
      { name: 'Queen Set (90" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 3399 },
      { name: 'King Set (108" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 3899 }
    ],
    specifications: {
      material: '100% Pure Fine Cotton',
      weave: 'Crisp Percale Weave',
      threadCount: '400 Thread Count',
      certifications: ['OEKO-TEX Certified'],
      countryOfOrigin: 'Made in India',
      careInstructions: [
        'Machine wash cold',
        'Tumble dry low',
        'Warm iron if desired'
      ]
    },
    story: 'A joyful Scandinavian design that celebrates geometry, playful colors, and the simple beauty of everyday rest.',
    highlights: [
      'Dynamic geometric triangle layout',
      'Cool and breathable weave for hot sleepers',
      'Pill-resistant durable construction'
    ]
  },
  {
    id: 'bs-013',
    name: 'Golden Sunflower & Yellow Gingham Bedsheet Set',
    slug: 'golden-sunflower-yellow-gingham-bedsheet-set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheets',
    tagline: 'Radiant blooming sunflowers paired with sunny golden gingham checks.',
    description: 'Wake up to perpetual sunshine. Vivid yellow sunflowers and cheerful country gingham checks radiate warmth, uplifting optimism, and cottagecore coziness across your bedroom.',
    price: 3499,
    originalPrice: 4599,
    rating: 5.0,
    reviewCount: 69,
    badge: 'New Season',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/bedsheet-sunflower-gingham-gold.jpg'
    ],
    colors: [
      { name: 'Golden Sunflower', hex: '#F4A261', inStock: true },
      { name: 'Sunny Gingham', hex: '#E76F51', inStock: true }
    ],
    sizes: [
      { name: 'Queen Set (90" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 3499 },
      { name: 'King Set (108" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 3999 }
    ],
    specifications: {
      material: '100% Breathable Combed Cotton',
      weave: 'Soft Percale Finish',
      threadCount: '400 Thread Count',
      certifications: ['OEKO-TEX Standard 100'],
      countryOfOrigin: 'Crafted in India',
      careInstructions: [
        'Machine wash warm gentle cycle',
        'Tumble dry low',
        'Warm iron'
      ]
    },
    story: 'Inspired by summer sunflower fields in full afternoon sun, created to bring cheerful smiles every morning.',
    highlights: [
      'Sunny mood-elevating design',
      'Double-sided contrast pillow covers',
      '100% natural and skin-friendly'
    ]
  },
  {
    id: 'bs-014',
    name: 'English Rose Garden & Houndstooth Bedsheet Set',
    slug: 'english-rose-garden-houndstooth-bedsheet-set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheets',
    tagline: 'Vintage romantic pink cabbage roses atop subtle houndstooth texture.',
    description: 'Classic British country cottage elegance. Romantic blushing cabbage roses and leafy vines bloom gracefully over a refined micro-houndstooth textured background.',
    price: 3699,
    originalPrice: 4899,
    rating: 4.9,
    reviewCount: 95,
    badge: 'Organic Luxury',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/bedsheet-english-rose-houndstooth.jpg'
    ],
    colors: [
      { name: 'Blush English Rose', hex: '#DDA15E', inStock: true },
      { name: 'Rose Petal Pink', hex: '#E8A598', inStock: true }
    ],
    sizes: [
      { name: 'Queen Set (90" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 3699 },
      { name: 'King Set (108" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 4199 },
      { name: 'Super King Set (114" x 108")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 4699 }
    ],
    specifications: {
      material: '100% Organic Long-Staple Cotton',
      weave: 'Silky Sateen Weave',
      threadCount: '450 Thread Count',
      certifications: ['GOTS Certified Organic', 'OEKO-TEX Standard 100'],
      countryOfOrigin: 'India',
      careInstructions: [
        'Machine wash cold gentle',
        'Line dry in shade',
        'Warm iron damp'
      ]
    },
    story: 'A timeless romantic English countryside garden aesthetic brought to life on ultra-soft organic cotton.',
    highlights: [
      'Detailed cabbage rose botanicals',
      'Silky lustrous sateen finish',
      'Generous flap closure pillow covers'
    ]
  },
  {
    id: 'bs-015',
    name: 'Teal Moroccan Damask & Wildflower Bedsheet Set',
    slug: 'teal-moroccan-damask-wildflower-bedsheet-set',
    category: 'bedsheets',
    categoryName: 'Luxury Bedsheets',
    tagline: 'Rich peacock teal with intricate medallion damask and wild blooms.',
    description: 'Luxurious, exotic, and captivating. Deep peacock teal adorned with traditional Moroccan arches, ornate damask cartouches, and delicate ivory wildflower clusters.',
    price: 3899,
    originalPrice: 5199,
    rating: 4.9,
    reviewCount: 83,
    badge: 'Best Seller',
    featured: true,
    inStock: true,
    images: [
      '/assets/products/bedsheet-wildflower-moroccan-damask.jpg'
    ],
    colors: [
      { name: 'Peacock Teal', hex: '#1F4E5B', inStock: true },
      { name: 'Ivory Damask', hex: '#FAF3DD', inStock: true }
    ],
    sizes: [
      { name: 'Queen Set (90" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 3899 },
      { name: 'King Set (108" x 100")', dimensions: '1 Bedsheet + 2 Pillow Covers', price: 4399 }
    ],
    specifications: {
      material: '100% Super-Combed Compact Cotton',
      weave: 'Lustrous Sateen Weave',
      threadCount: '500 Thread Count',
      certifications: ['OEKO-TEX Standard 100 Class 1', 'ISO 9001 Quality'],
      countryOfOrigin: 'Made in India',
      careInstructions: [
        'Machine wash cold gentle cycle',
        'Do not bleach',
        'Warm iron on reverse'
      ]
    },
    story: 'Inspired by the vibrant riads of Marrakech, blending exotic architectural damasks with restful botanical serenity.',
    highlights: [
      'Rich jewel-toned teal foundation',
      'Lavish 500 thread count sateen feel',
      'Durable double-stitched hems'
    ]
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
