// ProductDetail.tsx
import React from 'react';
import { Product } from '../data';

interface ProductDetailProps {
  product: Product | null;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  if (!product) {
    return <div>No product selected</div>;
  }

  return (
    <div>
      <h2>Product Detail</h2>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>

      <h3>Reviews</h3>
      <ul>
        {product.reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
