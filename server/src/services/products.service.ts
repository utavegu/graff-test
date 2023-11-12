import { mockDatabase } from '../mockDatabase';
import { ProductModel } from '../schemas/product.schema';
import { IProductsService } from '../typespaces/interfaces/IProductsService';
import { IProduct } from '../typespaces/interfaces/IProduct';

export class ProductsService implements IProductsService {
  async fetchProducts(): Promise<IProduct[]> {
    try {
      const products = await ProductModel.find().select('-__v');
      return products;
    } catch (error) {
      throw error;
    }
  }

  // TODO: Валидация, что приехал ID Монги (если успеешь, можно и через мидлвару)
  async fetchTargetProduct(id: string): Promise<IProduct> {
    try {
      const product = await ProductModel.findById(id).select('-__v');
      if (product) {
        return product;
      }
      throw new Error();
    } catch (error) {
      throw error;
    }
  }

  async addProducts(): Promise<IProduct[]> {
    try {
      const products = await ProductModel.insertMany(mockDatabase.products);
      return products;
    } catch (error) {
      throw error;
    }
  }
}

const productsService = new ProductsService();
export { productsService };
