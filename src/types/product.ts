export type ProductCategory = 'bedsheets' | 'comforters' | 'cushion-covers' | 'curtains' | 'soft-toys';

export interface ProductSpecification {
  material?: string;
  weave?: string;
  threadCount?: string;
  gsm?: string;
  dimensions?: string;
  fill?: string;
  careInstructions?: string[];
  certifications?: string[];
  countryOfOrigin?: string;
  closureType?: string;
  pocketDepth?: string;
  draperyHeading?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  categoryName: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: 'Signature' | 'Best Seller' | 'New Season' | 'Organic Luxury' | 'Cloud Soft' | 'Cloud Loft';
  images: string[];
  colors?: { name: string; hex: string; inStock: boolean }[];
  sizes?: { name: string; dimensions: string; price: number }[];
  inStock: boolean;
  featured: boolean;
  specifications: ProductSpecification;
  story?: string;
  highlights?: string[];
}

export interface CategoryInfo {
  id: ProductCategory;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  heroImage: string;
  cardImage: string;
  badge: string;
  featureList: string[];
}

export interface CartItem {
  product: Product;
  selectedColor?: string;
  selectedSize?: string;
  quantity: number;
}
