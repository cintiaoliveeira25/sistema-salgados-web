export interface Product {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

export interface ProductProps {
  products: Product;
}