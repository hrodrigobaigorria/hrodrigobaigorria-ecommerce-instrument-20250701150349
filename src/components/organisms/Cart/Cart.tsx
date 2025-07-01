import React from 'react';
import { Button } from '../../atoms/Button';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export function Cart({ items, onRemoveItem, onClearCart }: CartProps) {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return <p className="text-center text-gray-600">Your cart is empty.</p>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-orange-600">Shopping Cart</h2>
      <ul className="divide-y divide-gray-200 mb-4">
        {items.map(item => (
          <li key={item.id} className="py-2 flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold text-orange-500">${(item.price * item.quantity).toFixed(2)}</span>
              <Button variant="secondary" onClick={() => onRemoveItem(item.id)} aria-label={`Remove ${item.name} from cart`}>Remove</Button>
            </div>
          </li>
        ))}
      </ul>
      <footer className="flex justify-between items-center font-bold text-lg border-t border-gray-300 pt-2">
        <span>Total:</span>
        <span className="text-orange-600">${totalPrice.toFixed(2)}</span>
      </footer>
      <div className="mt-4 flex justify-end">
        <Button variant="secondary" onClick={onClearCart}>Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
