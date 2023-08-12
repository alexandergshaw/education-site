// data.ts
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    reviews: string[]; // Add reviews array
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 10.99,
      reviews: ['Great product!', 'Highly recommended'],
    },
    // Add more products with reviews
  ];
  