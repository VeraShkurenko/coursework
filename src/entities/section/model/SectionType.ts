import type { ProductType } from '../../product/model/ProductType';

export type SectionType = {
  id: string | undefined;
  title: string;
  items: ProductType[];
};
