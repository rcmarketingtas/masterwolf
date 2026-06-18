export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
  brand: string;
  sku: string;
  inStock: boolean;
  stockCount: number;
  images: string[];
  description: string;
  specifications: Record<string, string>;
  tags: string[];
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  productCount: number;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  company: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}
