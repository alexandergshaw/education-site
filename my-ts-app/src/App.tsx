// App.tsx
import React, { useState } from 'react';
import { products } from './data';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

const App: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

  const handleProductClick = (productId: number) => {
    setSelectedProductId(productId);
  };

  // Find the selected product
  const selectedProduct = products.find(
    (product) => product.id === selectedProductId
  ) || null; // Provide a default value of null if product is not found

  return (
    <div>
      <ProductList products={products} onItemClick={handleProductClick} />
      <ProductDetail product={selectedProduct} />
    </div>
  );
};

export default App;
