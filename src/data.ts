import type { Product } from './types';

export interface CategoryMeta {
  id: string;
  label: string;
  emoji: string;
}

export const CATEGORIES: CategoryMeta[] = [
  { id: 'all', label: 'All', emoji: '✨' },
  { id: 'electronics', label: 'Electronics', emoji: '🎧' },
  { id: 'home', label: 'Home & Living', emoji: '🏡' },
  { id: 'fashion', label: 'Fashion', emoji: '👗' },
  { id: 'beauty', label: 'Beauty', emoji: '💄' },
  { id: 'outdoors', label: 'Sports & Outdoors', emoji: '🏕️' },
];

export const CAT_LABEL: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.label]),
);

export const PRODUCTS: Product[] = [
  // Electronics
  { id: 'e1', name: 'Aurora Wireless Headphones', category: 'electronics', price: 89.99, listPrice: 129.99, rating: 4.7, reviews: 2314, emoji: '🎧', colors: ['#a5b4fc', '#e0e7ff'], blurb: '40-hour battery, hybrid ANC and a featherlight fit for all-day listening.', badge: 'Best Seller' },
  { id: 'e2', name: 'Pulse Smartwatch S2', category: 'electronics', price: 129.0, rating: 4.5, reviews: 1187, emoji: '⌚', colors: ['#bae6fd', '#e0f2fe'], blurb: 'Sleep, swim and sprint tracking with a 10-day battery and AMOLED display.', badge: 'New' },
  { id: 'e3', name: 'Nebula Mini Speaker', category: 'electronics', price: 45.5, listPrice: 59.0, rating: 4.3, reviews: 892, emoji: '🔊', colors: ['#c4b5fd', '#ede9fe'], blurb: 'Room-filling 360° sound in a palm-sized, splash-proof speaker.' },
  { id: 'e4', name: 'Volt 65W GaN Charger', category: 'electronics', price: 29.99, rating: 4.8, reviews: 3402, emoji: '🔌', colors: ['#6ee7b7', '#d1fae5'], blurb: 'Two-port GaN charger that powers a laptop and a phone at full speed.' },
  { id: 'e5', name: 'Echo Mechanical Keyboard', category: 'electronics', price: 79.0, rating: 4.6, reviews: 754, emoji: '⌨️', colors: ['#fbcfe8', '#fce7f3'], blurb: 'Low-profile mechanical switches with satisfying tactile feedback.' },

  // Home & Living
  { id: 'h1', name: 'Cloudweave Throw Blanket', category: 'home', price: 34.0, rating: 4.8, reviews: 1520, emoji: '🧶', colors: ['#fde68a', '#fef3c7'], blurb: 'Oversized, cloud-soft throw woven from recycled cotton fleece.' },
  { id: 'h2', name: 'Kyoto Ceramic Mug Set', category: 'home', price: 24.5, rating: 4.6, reviews: 642, emoji: '☕', colors: ['#fda4af', '#ffe4e6'], blurb: 'Four hand-glazed stoneware mugs with a speckled matte finish.' },
  { id: 'h3', name: 'Mist Aroma Diffuser', category: 'home', price: 39.99, rating: 4.4, reviews: 988, emoji: '🌿', colors: ['#bbf7d0', '#f0fdf4'], blurb: 'Quiet ultrasonic mist with soft ambient light and 8-hour runtime.' },
  { id: 'h4', name: 'Linen Cloud Bedding Set', category: 'home', price: 89.0, listPrice: 109.0, rating: 4.7, reviews: 431, emoji: '🛏️', colors: ['#d6d3d1', '#f5f5f4'], blurb: 'Stone-washed French linen that gets softer with every wash.' },
  { id: 'h5', name: 'Ray LED Floor Lamp', category: 'home', price: 59.0, rating: 4.5, reviews: 322, emoji: '💡', colors: ['#fdba74', '#ffedd5'], blurb: 'Warm dimmable LED floor lamp with a slim oak-finish stand.' },

  // Fashion
  { id: 'f1', name: 'Everyday Canvas Tote', category: 'fashion', price: 28.0, rating: 4.5, reviews: 1203, emoji: '👜', colors: ['#d8b4fe', '#f3e8ff'], blurb: 'Heavy 16oz organic canvas that carries groceries and laptops alike.', badge: 'Eco' },
  { id: 'f2', name: 'Merino Wool Beanie', category: 'fashion', price: 22.0, rating: 4.6, reviews: 517, emoji: '🧢', colors: ['#93c5fd', '#dbeafe'], blurb: 'Non-itch merino rib knit that packs down to pocket size.' },
  { id: 'f3', name: 'Trim Leather Belt', category: 'fashion', price: 35.0, rating: 4.4, reviews: 289, emoji: '👔', colors: ['#d4a373', '#faedcd'], blurb: 'Full-grain leather with a reversible brushed brass buckle.' },
  { id: 'f4', name: 'Striped Cotton Tee', category: 'fashion', price: 19.99, listPrice: 24.0, rating: 4.3, reviews: 2044, emoji: '👕', colors: ['#99f6e4', '#ccfbf1'], blurb: 'Breathable combed cotton in a classic striped cut.', badge: 'Best Seller' },

  // Beauty
  { id: 'b1', name: 'Glow Vitamin C Serum', category: 'beauty', price: 26.0, listPrice: 32.0, rating: 4.7, reviews: 3120, emoji: '🧴', colors: ['#f9a8d4', '#fce7f3'], blurb: '15% vitamin C serum that evens tone and boosts morning glow.', badge: 'Best Seller' },
  { id: 'b2', name: 'Rosewater Face Mist', category: 'beauty', price: 16.5, rating: 4.5, reviews: 878, emoji: '🌹', colors: ['#fecdd3', '#fff1f2'], blurb: 'Steam-distilled rose water to refresh skin any time of day.' },
  { id: 'b3', name: 'Shea Velvet Body Butter', category: 'beauty', price: 18.0, rating: 4.6, reviews: 1042, emoji: '🧼', colors: ['#fcd34d', '#fef9c3'], blurb: 'Whipped shea and cocoa butter for 48-hour hydration.' },

  // Sports & Outdoors
  { id: 's1', name: 'Trailmate Water Bottle', category: 'outdoors', price: 24.0, rating: 4.8, reviews: 1567, emoji: '🥤', colors: ['#7dd3fc', '#e0f2fe'], blurb: 'Insulated 24oz bottle that keeps drinks icy for 24 hours.', badge: 'New' },
  { id: 's2', name: 'Zen Grip Yoga Mat', category: 'outdoors', price: 42.0, rating: 4.6, reviews: 733, emoji: '🧘', colors: ['#bef264', '#ecfccb'], blurb: 'Grippy 6mm mat with alignment lines, carry strap included.' },
  { id: 's3', name: 'Adventure Lunch Tote', category: 'outdoors', price: 30.0, rating: 4.4, reviews: 415, emoji: '🍱', colors: ['#9ca3af', '#f3f4f6'], blurb: 'Leak-proof insulated tote that keeps lunch cool till 5pm.' },
  { id: 's4', name: 'Basecamp LED Lantern', category: 'outdoors', price: 27.5, rating: 4.5, reviews: 602, emoji: '🔦', colors: ['#fbbf24', '#fffbeb'], blurb: 'Collapsible 300-lumen lantern with 72-hour runtime.' },
];
