export type ProductType = {
  id: number;
  title: string;
  type: string;
  price: string;
  oldPrice?: string; 
  img: string;
  label?: "DEAL" | "HIT" | "NEW" | "SALE"; 
};