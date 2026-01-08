// src/entities/user/model/UserType.ts

export interface UserType {
  id: number;
  email: string;
  name: string;
  password?: string; 
  phone?: string;   
  city?: string;   
}