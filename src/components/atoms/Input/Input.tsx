import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = '', ...props }: InputProps) {
  return (
    <div className={`flex flex-col w-full ${className}`}>      
      {label && <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>}
      <input
        className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
        {...props}
      />
    </div>
  );
}

export default Input;
