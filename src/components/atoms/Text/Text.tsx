import React from 'react';

interface TextProps {
  content: string;
  className?: string;
}

export function Text({ content, className = '' }: TextProps) {
  return <p className={`${className} text-gray-800`}>{content}</p>;
}

export default Text;
