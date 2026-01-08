import React, { createContext, useState, useEffect, type ReactNode } from 'react';
import type { UserType } from '../../entities/user/model/UserType';
import type { ProductType } from '../../entities/product/model/ProductType';
import type ToastData from './ToastData';

export interface CartItem extends ProductType {
  quantity: number;
}


export interface ModalConfig {
  title: string;
  message: string;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
}

interface AppContextType {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
  users: UserType[];
  register: (userData: UserType) => void;
  login: (email: string, password: string) => boolean;
  

  favorites: number[]; 
  toggleFavorite: (id: number) => void;
  

  cart: CartItem[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  clearCart: () => void;
  

  toastQueue: ToastData[]; 
  showToast: (data: ToastData) => void;


  modal: ModalConfig | null;
  showModal: (config: ModalConfig) => void;
  hideModal: () => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  // --- СТАН: КОРИСТУВАЧІ ТА АВТОРИЗАЦІЯ ---
  const [user, setUser] = useState<UserType | null>(() => {
    const savedUser = localStorage.getItem('active_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [users, setUsers] = useState<UserType[]>(() => {
    const savedUsers = localStorage.getItem('registered_users');
    return savedUsers ? JSON.parse(savedUsers) : [
      { id: 1, email: 'admin@makeup.com', name: 'Адміністратор', password: '123' }
    ];
  });

  // --- СТАН: ОБРАНЕ ТА КОШИК ---
  const [favorites, setFavorites] = useState<number[]>(() => {
    const savedFavs = localStorage.getItem('favorites');
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // --- СТАН: ПОВІДОМЛЕННЯ ТА МОДАЛКИ ---
  const [toastQueue, setToastQueue] = useState<Array<ToastData>>([]);
  const [modal, setModal] = useState<ModalConfig | null>(null);

  // --- ЕФЕКТИ: ПОСТІЙНЕ ЗБЕРЕЖЕННЯ ---
  useEffect(() => {
    localStorage.setItem('active_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('registered_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // --- ЛОГІКА ПОВІДОМЛЕНЬ (TOASTS) ---
  const showToast = (data: ToastData) => {
    setToastQueue(prev => [data, ...prev]);
  };

  useEffect(() => {
    if (toastQueue.length > 0) {
      const lastToast = toastQueue[toastQueue.length - 1];
      const timer = setTimeout(() => {
        setToastQueue(prev => prev.slice(0, prev.length - 1));
      }, lastToast.timeout ?? 2000);
      return () => clearTimeout(timer);
    }
  }, [toastQueue]);

  // --- ЛОГІКА МОДАЛЬНИХ ВІКОН ---
  const showModal = (config: ModalConfig) => setModal(config);
  const hideModal = () => setModal(null);

  // --- ФУНКЦІЇ АВТОРИЗАЦІЇ ---
  const register = (userData: UserType) => {
    const isExist = users.find(u => u.email === userData.email);
    if (isExist) {
      showToast({ message: "Користувач з таким email вже існує", timeout: 3000 });
      return;
    }
    const newUser = { ...userData, id: Date.now() };
    setUsers(prev => [...prev, newUser]);
    showToast({ message: "Реєстрація успішна! Тепер увійдіть.", timeout: 2000 });
  };

  const login = (email: string, password: string): boolean => {
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      showToast({ message: `Вітаємо, ${foundUser.name}!`, timeout: 2000 });
      return true;
    }
    showToast({ message: "Невірний email або пароль", timeout: 2000 });
    return false;
  };

  // --- ЛОГІКА ОБРАНОГО ---
  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  // --- ЛОГІКА КОШИКА ---
  const addToCart = (product: ProductType) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast({ message: `"${product.title}" додано до кошика!`, timeout: 2000 });
  };

  const removeFromCart = (id: number) => setCart(prev => prev.filter(item => item.id !== id));

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

  return (
    <AppContext.Provider value={{ 
      user, setUser, users, register, login,
      favorites, toggleFavorite, 
      cart, addToCart, removeFromCart, updateQuantity, clearCart,
      toastQueue, showToast,
      modal, showModal, hideModal 
    }}>
      {children}
    </AppContext.Provider>
  );
};