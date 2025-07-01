import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
  className?: string;
}

export function Image({ alt, src, className = '', ...props }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-md shadow-md object-cover transition-transform duration-300 hover:scale-105 ${className}`}
      loading="lazy"
      {...props}
    />
  );
}

export default Image;
