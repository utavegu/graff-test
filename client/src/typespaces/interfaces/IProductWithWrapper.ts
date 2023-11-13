import { IProduct } from './IProduct';

export interface IProductWithWrapper {
  success: boolean;
  data: IProduct;
}
