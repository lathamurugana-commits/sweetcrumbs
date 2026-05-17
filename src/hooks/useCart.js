import { useState, useCallback } from 'react';

/**
 * Custom hook for shopping cart state management
 */
export default function useCart() {
  const [items, setItems] = useState([]);

  const addItem = useCallback((cake) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === cake.id);
      if (existing) {
        return prev.map(item =>
          item.id === cake.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...cake, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(item => item.id !== id));
    } else {
      setItems(prev =>
        prev.map(item => (item.id === id ? { ...item, quantity } : item))
      );
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return { items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice };
}
