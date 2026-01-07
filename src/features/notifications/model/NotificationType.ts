export interface NotificationType {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}