import React, { createContext, useContext, useState, useCallback } from 'react';

// 1. Оголошуємо типи прямо тут (не імпортуємо їх ззовні)
export interface NotificationType {
  id: number;
  message: string;
  type: 'success' | 'error';
}

interface NotificationContextType {
  addNotification: (message: string, type?: 'success' | 'error') => void;
}

// 2. Створюємо контекст
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

// 3. Створюємо Провайдер
export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const addNotification = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);

    // Видаляємо повідомлення з черги через 3 секунди
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  }, []);

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      
      {/* Візуальна черга повідомлень */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        {notifications.map((n) => (
          <div key={n.id} style={{
            padding: '12px 24px',
            backgroundColor: n.type === 'success' ? '#28a745' : '#dc3545',
            color: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            animation: 'slideIn 0.3s ease-out'
          }}>
            {n.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

// 4. Експортуємо хук для використання в компонентах
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};