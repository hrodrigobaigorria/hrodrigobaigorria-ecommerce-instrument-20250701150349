import React from 'react';
import { ProductCard } from '../../molecules/ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductGridProps {
  products: Product[];
  onAddToCart: (productId: string) => void;
  categoryFilter?: string;
}

export function ProductGrid({ products, onAddToCart, categoryFilter }: ProductGridProps) {
  const filteredProducts = categoryFilter ? products.filter(p => p.category === categoryFilter) : products;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </section>
  );
}

export default ProductGrid;
