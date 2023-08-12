// ProductList.tsx
import React from 'react';
import { Product } from '../data';

interface ProductListProps {
  products: Product[];
  onItemClick: (productId: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onItemClick }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <button onClick={() => onItemClick(product.id)}>{product.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
