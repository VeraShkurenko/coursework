import React, { createContext, useState, type ReactNode } from 'react';
import type { UserType } from '../../entities/user/model/UserType';
import type { ProductType } from '../../entities/product/model/ProductType';

// 1. Додаємо інтерфейс для товару в кошику (товар + кількість)
export interface CartItem extends ProductType {
  quantity: number;
}

// 2. Визначаємо типи для всього глобального стану
interface AppContextType {
  // Користувач
  user: UserType | null;
  setUser: (user: UserType | null) => void;
  
  // Обране (Favorites)
  favorites: number[]; 
  toggleFavorite: (id: number) => void;
  
  // Кошик (Cart)
  cart: CartItem[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  clearCart: () => void;
  
  // Повідомлення
  showToast: (config: { message: string; timeout: number }) => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  // --- Логіка Обраного ---
  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  // --- Логіка Кошика ---
  const addToCart = (product: ProductType) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        // Якщо товар вже є, просто збільшуємо кількість
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Якщо товару немає, додаємо новий об'єкт з кількістю 1
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast({ message: `"${product.title}" додано до кошика!`, timeout: 2000 });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      }
      return item;
    }));
  };

  const clearCart = () => setCart([]);

  // --- Логіка Повідомлень ---
  const showToast = (config: { message: string; timeout: number }) => {
    // Тут можна замінити на гарний UI компонент пізніше
    console.log(`TOAST: ${config.message}`);
  };

  return (
    <AppContext.Provider value={{ 
      user, setUser, 
      favorites, toggleFavorite, 
      cart, addToCart, removeFromCart, updateQuantity, clearCart,
      showToast 
    }}>
      {children}
    </AppContext.Provider>
  );
};