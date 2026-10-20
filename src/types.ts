export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  listPrice?: number;
  rating: number;
  reviews: number;
  emoji: string;
  colors: [string, string];
  blurb: string;
  badge?: 'Best Seller' | 'New' | 'Eco';
}

export interface CartLine {
  id: string;
  qty: number;
}

export type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'rating';
