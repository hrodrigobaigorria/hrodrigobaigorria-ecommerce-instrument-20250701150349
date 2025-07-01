import React from 'react';
import { Header } from '../../organisms/Header';
import { Carousel } from '../../organisms/Carousel';
import { ProductGrid } from '../../organisms/ProductGrid';
import { Footer } from '../../organisms/Footer';
import { Cart } from '../../organisms/Cart';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface CarouselItem {
  id: string;
  image: string;
  alt: string;
  caption?: string;
}

interface LandingPageTemplateProps {
  products: Product[];
  carouselItems: CarouselItem[];
  cartItems: { id: string; name: string; price: number; quantity: number }[];
  onAddToCart: (id: string) => void;
  onRemoveFromCart: (id: string) => void;
  onClearCart: () => void;
  onSearch: (query: string) => void;
  onCartClick: () => void;
  isCartOpen: boolean;
  cartItemCount: number;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function LandingPageTemplate({
  products,
  carouselItems,
  cartItems,
  onAddToCart,
  onRemoveFromCart,
  onClearCart,
  onSearch,
  onCartClick,
  isCartOpen,
  cartItemCount,
  selectedCategory,
  onCategoryChange,
}: LandingPageTemplateProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={onSearch} onCartClick={onCartClick} cartItemCount={cartItemCount} />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Carousel items={carouselItems} />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Categories</h2>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => onCategoryChange(null)}
              className={`px-4 py-2 rounded-md font-semibold border ${selectedCategory === null ? 'bg-orange-500 text-white' : 'border-orange-500 text-orange-500 hover:bg-orange-100'}`}
            >
              All
            </button>
            <button
              onClick={() => onCategoryChange('instruments')}
              className={`px-4 py-2 rounded-md font-semibold border ${selectedCategory === 'instruments' ? 'bg-orange-500 text-white' : 'border-orange-500 text-orange-500 hover:bg-orange-100'}`}
            >
              Instruments
            </button>
            <button
              onClick={() => onCategoryChange('vinyls')}
              className={`px-4 py-2 rounded-md font-semibold border ${selectedCategory === 'vinyls' ? 'bg-orange-500 text-white' : 'border-orange-500 text-orange-500 hover:bg-orange-100'}`}
            >
              Vinyls
            </button>
            <button
              onClick={() => onCategoryChange('cds')}
              className={`px-4 py-2 rounded-md font-semibold border ${selectedCategory === 'cds' ? 'bg-orange-500 text-white' : 'border-orange-500 text-orange-500 hover:bg-orange-100'}`}
            >
              CDs
            </button>
          </div>
        </section>

        <section aria-label="product grid" className="mb-16">
          <ProductGrid products={products} onAddToCart={onAddToCart} categoryFilter={selectedCategory || undefined} />
        </section>
      </main>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <Cart items={cartItems} onRemoveItem={onRemoveFromCart} onClearCart={onClearCart} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default LandingPageTemplate;
