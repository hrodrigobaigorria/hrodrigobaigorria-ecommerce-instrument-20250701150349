import React, { useState, useEffect } from 'react';
import { Image } from '../../atoms/Image';
import { Button } from '../../atoms/Button';

interface CarouselItem {
  id: string;
  image: string;
  alt: string;
  caption?: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

export function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-64 sm:h-80 md:h-96">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <Image src={item.image} alt={item.alt} className="w-full h-full object-cover" />
            {item.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 text-center">
                {item.caption}
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        aria-label="Previous slide"
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
      >
        &#8592;
      </button>
      <button
        aria-label="Next slide"
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
      >
        &#8594;
      </button>
    </div>
  );
}

export default Carousel;
