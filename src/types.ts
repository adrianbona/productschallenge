export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: any;
}

export interface ProductCard {
  title: string;
  description: string;
  price: number;
  className?: string;
  onClick?: () => void;
}
