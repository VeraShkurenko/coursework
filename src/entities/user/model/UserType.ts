// src/entities/user/model/UserType.ts

export interface UserType {
  id: number;
  email: string;
  name: string;
  password?: string; // Обов'язково додайте це для авторизації
  phone?: string;    // Додаємо поле для телефону
  city?: string;     // Додаємо поле для міста
}