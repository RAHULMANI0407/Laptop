
export enum Category {
  LAPTOP = 'Laptop',
  ACCESSORY = 'Accessory'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  specs: string[];
  image: string;
  description: string;
  isNew?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
}
