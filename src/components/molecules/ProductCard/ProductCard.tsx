import React from 'react';
import { Button } from '../../atoms/Button';
import { Image } from '../../atoms/Image';
import { Text } from '../../atoms/Text';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col hover:shadow-2xl transition-shadow duration-300">
      <div className="aspect-w-1 aspect-h-1 mb-4 overflow-hidden rounded-md">
        <Image src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <Text content={product.name} className="text-lg font-semibold mb-1 text-gray-900" />
      <Text content={product.description} className="text-sm text-gray-600 mb-2 flex-grow" />
      <div className="flex items-center justify-between">
        <span className="text-orange-500 font-bold text-lg">${product.price.toFixed(2)}</span>
        <Button variant="primary" onClick={() => onAddToCart(product.id)} aria-label={`Add ${product.name} to cart`}>Add to Cart</Button>
      </div>
    </div>
  );
}

export default ProductCard;
