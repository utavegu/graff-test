import { IProduct } from './IProduct';
import { IProductsQueryParams } from './IProductsQueryParams';

export interface IProductsService {
  fetchProducts(
    queryParams?: IProductsQueryParams,
  ): Promise<{ products: IProduct[]; pages: number }>;
  fetchTargetProduct(id: string): Promise<IProduct>;
  addProducts(): Promise<IProduct[]>;
}
