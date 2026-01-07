export type ProductType = {
  id: number;
  title: string;
  type: string;
  price: string;
  oldPrice?: string; // Переконайтеся, що це поле також є
  img: string;
  // Додаємо "SALE" у список дозволених значень
  label?: "DEAL" | "HIT" | "NEW" | "SALE"; 
};