import { Category, Product } from './types';

export const SHOP_NAME = "TechNova";
export const SHOP_PHONE = "+91 98765 43210";
export const SHOP_EMAIL = "sales@technova.in";
export const SHOP_ADDRESS = "123 Silicon Valley Rd, Hitech City, Hyderabad, 500081";

export const PRODUCTS: Product[] = [
  {
    id: 'l1',
    name: 'MacBook Air M3',
    category: Category.LAPTOP,
    price: 114900,
    specs: ['Apple M3 Chip', '8GB Unified Memory', '256GB SSD', '13.6" Liquid Retina'],
    image: 'https://picsum.photos/seed/macbook/400/300',
    description: 'Supercharged by M3. The world’s most popular laptop is faster and more capable than ever.',
    isNew: true
  },
  {
    id: 'l2',
    name: 'Dell XPS 13 Plus',
    category: Category.LAPTOP,
    price: 159990,
    specs: ['Intel Core i7-1360P', '16GB RAM', '512GB SSD', '13.4" OLED Touch'],
    image: 'https://picsum.photos/seed/dellxps/400/300',
    description: 'Twice as powerful as before. Features a seamless glass wrist rest and zero-lattice keyboard.'
  },
  {
    id: 'l3',
    name: 'ASUS ROG Strix G16',
    category: Category.LAPTOP,
    price: 134990,
    specs: ['Intel i7-13650HX', 'RTX 4060 8GB', '16GB DDR5', '16" 165Hz FHD+'],
    image: 'https://picsum.photos/seed/rog/400/300',
    description: 'Draw more frames and win more games with the power of the brand new Strix G16.'
  },
  {
    id: 'l4',
    name: 'HP Spectre x360',
    category: Category.LAPTOP,
    price: 145000,
    specs: ['Intel Core i7-1355U', '16GB RAM', '1TB SSD', '13.5" 3K2K OLED'],
    image: 'https://picsum.photos/seed/spectre/400/300',
    description: 'Crafted to combine performance and beauty. The 2-in-1 design lets you work how you want.'
  },
  {
    id: 'l5',
    name: 'Lenovo ThinkPad X1 Carbon',
    category: Category.LAPTOP,
    price: 189990,
    specs: ['Intel Core i7 vPro', '32GB LPDDR5', '1TB NVMe', '14" WUXGA'],
    image: 'https://picsum.photos/seed/thinkpad/400/300',
    description: 'The gold standard in business laptops. Ultralight, durable, and packed with security features.'
  },
  {
    id: 'a1',
    name: 'Logitech MX Master 3S',
    category: Category.ACCESSORY,
    price: 9995,
    specs: ['8000 DPI Sensor', 'Quiet Clicks', 'MagSpeed Wheel', 'USB-C Charging'],
    image: 'https://picsum.photos/seed/mouse/400/300',
    description: 'An icon remastered. Feel every moment of your workflow with even more precision.',
    isNew: true
  },
  {
    id: 'a2',
    name: 'Keychron K2 V2',
    category: Category.ACCESSORY,
    price: 8499,
    specs: ['Mechanical Keys', 'Wireless/Wired', 'Mac/Windows', 'RGB Backlight'],
    image: 'https://picsum.photos/seed/keyboard/400/300',
    description: 'A super tactile wireless mechanical keyboard for all your heavy typing needs.'
  },
  {
    id: 'a3',
    name: 'Sony WH-1000XM5',
    category: Category.ACCESSORY,
    price: 26990,
    specs: ['Noise Cancelling', '30hr Battery', 'Crystal Clear Calls', 'Multipoint Connection'],
    image: 'https://picsum.photos/seed/headset/400/300',
    description: 'The best noise cancelling headphones, redefined with a distraction-free listening experience.'
  },
  {
    id: 'a4',
    name: 'Thule Crossover 2',
    category: Category.ACCESSORY,
    price: 12500,
    specs: ['Durable Nylon', 'RFID Protection', '15.6" Laptop Compt', 'Water Resistant'],
    image: 'https://picsum.photos/seed/bag/400/300',
    description: 'A durable everyday backpack designed to keep everything organized and protected.'
  }
];
