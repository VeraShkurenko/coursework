import React, { createContext, useContext, useState, useCallback } from 'react';
import type { NotificationType } from '../model/NotificationType';

interface NotificationContextType {
  addNotification: (message: string, type?: NotificationType['type']) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const addNotification = useCallback((message: string, type: NotificationType['type'] = 'success') => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);

    // Автоматичне видалення через 3 секунди
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  }, []);

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      {/* Відображення черги повідомлень */}
      <div className="notification-container">
        {notifications.map((n) => (
          <div key={n.id} className={`notification-toast toast-${n.type}`}>
            {n.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('useNotification must be used within NotificationProvider');
  return context;
};