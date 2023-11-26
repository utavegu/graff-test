import { ProductModel } from '../schemas/product.schema';
import { getProductsSortingConditions } from '../helpers/getProductsSortingConditions';
import { generateColorsFilter } from '../helpers/generateColorsFilter';
import { generatePagination } from '../helpers/generatePagination';
import { mockDatabase } from '../mockDatabase';
import { PRODUCTS_PER_PAGE } from '../constants/products.constants';
import { IProductsService } from '../typespaces/interfaces/IProductsService';
import { IProduct } from '../typespaces/interfaces/IProduct';
import { IProductsQueryParams } from '../typespaces/interfaces/IProductsQueryParams';

export class ProductsService implements IProductsService {
  async fetchProducts(
    queryParams: IProductsQueryParams,
  ): Promise<{ products: IProduct[]; pages: number }> {
    try {
      const { sort, page = 1, colors } = queryParams;
      const total = await ProductModel.find(
        generateColorsFilter(colors),
      ).count();
      const pagination = generatePagination(page, total);
      const products = await ProductModel.find(generateColorsFilter(colors))
        .limit(PRODUCTS_PER_PAGE)
        .skip(pagination.offset)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .sort(getProductsSortingConditions(sort))
        .select('-__v');
      return { products, pages: pagination.pages };
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
      const productsInDb = await ProductModel.find().select('name');

      const mockDbProductsName = mockDatabase.products.map(
        (product) => product.name,
      );

      const intersection = productsInDb.filter((element) => {
        return mockDbProductsName.includes(element.name);
      });

      if (!intersection.length) {
        const products = await ProductModel.insertMany(mockDatabase.products);
        return products;
      }
      throw new Error();
    } catch (error) {
      throw error;
    }
  }

  async clearProductsCollection() {
    try {
      await ProductModel.deleteMany();
      return;
    } catch (error) {
      throw error;
    }
  }
}

const productsService = new ProductsService();
export { productsService };
