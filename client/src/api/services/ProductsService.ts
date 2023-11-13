import $api from '..';
import {
  IProduct,
  IProductWithWrapper,
  IProductsQueryParams,
  IProductsWithWrapper,
} from '../../typespaces/interfaces/products';

export default class ProductsService {
  static async fetchProducts(params?: IProductsQueryParams): Promise<IProductsWithWrapper['data']> {
    const productWithWrapper = await $api.request({
      method: 'get',
      url: `/products`,
      params,
    });
    return productWithWrapper.data;
  }

  static async fetchProductById(id: IProduct['_id']): Promise<IProductWithWrapper['data']> {
    const productWithWrapper = await $api.request({
      method: 'get',
      url: `/products/${id}`,
    });
    return productWithWrapper.data;
  }
}
