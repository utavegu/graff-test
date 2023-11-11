import { IProduct } from './IProduct';

export interface IProductsService {
  fetchProducts(): Promise<IProduct[]>;
  fetchTargetProduct(id: string): Promise<IProduct>;
}
