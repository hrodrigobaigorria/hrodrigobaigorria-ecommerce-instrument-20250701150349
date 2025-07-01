import React, { useState, useMemo, useCallback } from 'react';
import LandingPageTemplate from '../components/templates/LandingPageTemplate';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'instruments' | 'vinyls' | 'cds';
}

const productsData: Product[] = [
  {
    id: 'inst-guitar',
    name: 'Acoustic Guitar',
    description: '6-string acoustic guitar with wooden body',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=400&q=80',
    category: 'instruments',
  },
  {
    id: 'inst-piano',
    name: 'Digital Piano',
    description: '88-key professional digital piano',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=400&q=80',
    category: 'instruments',
  },
  {
    id: 'vinyl-beatles',
    name: 'The Beatles - Abbey Road',
    description: 'Classic vinyl album by The Beatles',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
    category: 'vinyls',
  },
  {
    id: 'vinyl-pinkfloyd',
    name: 'Pink Floyd - The Dark Side of the Moon',
    description: 'Iconic album on vinyl',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=400&q=80',
    category: 'vinyls',
  },
  {
    id: 'cd-taylorswift',
    name: 'Taylor Swift - 1989',
    description: 'Popular music CD',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
    category: 'cds',
  },
  {
    id: 'cd-adele',
    name: 'Adele - 25',
    description: 'Grammy-winning album CD',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80',
    category: 'cds',
  },
];

const carouselItems = [
  {
    id: 'carousel1',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Guitar concert',
    caption: 'Find Your Perfect Instrument',
  },
  {
    id: 'carousel2',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Vinyl collection',
    caption: 'Vinyls for True Music Lovers',
  },
  {
    id: 'carousel3',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80',
    alt: 'CDs on shelf',
    caption: 'Classic and New CDs',
  },
];

export default function HomePage() {
  const [cartItems, setCartItems] = useState<{ id: string; name: string; price: number; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleAddToCart = useCallback((productId: string) => {
    setCartItems((items) => {
      const itemIndex = items.findIndex((item) => item.id === productId);
      if (itemIndex !== -1) {
        const newItems = [...items];
        newItems[itemIndex].quantity += 1;
        return newItems;
      }
      const product = productsData.find((p) => p.id === productId);
      if (!product) return items;
      return [...items, { id: product.id, name: product.name, price: product.price, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const handleRemoveFromCart = useCallback((itemId: string) => {
    setCartItems((items) => items.filter((item) => item.id !== itemId));
  }, []);

  const handleClearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query.toLowerCase());
    setSelectedCategory(null);
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = productsData;
    if (searchQuery) {
      filtered = filtered.filter((p) => p.name.toLowerCase().includes(searchQuery) || p.description.toLowerCase().includes(searchQuery));
    }
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    return filtered;
  }, [searchQuery, selectedCategory]);

  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <LandingPageTemplate
      products={filteredProducts}
      carouselItems={carouselItems}
      cartItems={cartItems}
      onAddToCart={handleAddToCart}
      onRemoveFromCart={handleRemoveFromCart}
      onClearCart={handleClearCart}
      onSearch={handleSearch}
      onCartClick={() => setIsCartOpen((open) => !open)}
      isCartOpen={isCartOpen}
      cartItemCount={cartItemCount}
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
    />
  );
}
