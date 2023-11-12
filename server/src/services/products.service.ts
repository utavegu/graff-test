import { mockDatabase } from '../mockDatabase';
import { ProductModel } from '../schemas/product.schema';
import { getProductsSortingConditions } from '../helpers/getProductsSortingConditions';
import { IProductsService } from '../typespaces/interfaces/IProductsService';
import { IProduct } from '../typespaces/interfaces/IProduct';
import { IProductsQueryParams } from '../typespaces/interfaces/IProductsQueryParams';

export class ProductsService implements IProductsService {
  async fetchProducts(
    queryParams: IProductsQueryParams,
  ): Promise<{ products: IProduct[]; pages: number }> {
    try {
      const { sort, page = 1 } = queryParams;
      const productsPerPage = 2;
      const offset = (Number(page) - 1) * productsPerPage;
      const total = await ProductModel.find().count();
      const pages = Math.ceil(total / productsPerPage);
      const products = await ProductModel.find()
        .limit(productsPerPage)
        .skip(offset)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .sort(getProductsSortingConditions(sort))
        .select('-__v');
      return { products, pages };
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
