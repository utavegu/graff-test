import { IProduct } from './IProduct';

export interface IProductsWithWrapper {
  success: boolean;
  data: {
    products: IProduct[];
    pages: number;
  };
}
