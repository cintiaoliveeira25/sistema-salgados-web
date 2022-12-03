export interface Product {
  id: number;
  tags: string[];
  name: string;
  description: string;
  warning: string;
  photo: string;
  price: number;
  uniPrice: number;
}

export interface ProductProps {
  products: Product;
}
