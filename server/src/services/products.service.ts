import { mockDatabase } from '../mockDatabase';
import { IProductsService } from '../typespaces/interfaces/IProductsService';
import { IProduct } from '../typespaces/interfaces/IProduct';

export class ProductsService implements IProductsService {
  async fetchProducts(): Promise<IProduct[]> {
    try {
      // TODO: асинхронный запрос в базу
      return await mockDatabase.products;
    } catch (error) {
      throw error;
    }
  }

  async fetchTargetProduct(id: string): Promise<IProduct> {
    try {
      // TODO: асинхронный запрос в базу
      return await mockDatabase.products[Number(id)];
    } catch (error) {
      throw error;
    }
  }
}

const productsService = new ProductsService();
export { productsService };
