import $api from '..';
import { IProduct } from '../../typespaces/interfaces/IProduct';
import { IProductWithWrapper } from '../../typespaces/interfaces/IProductWithWrapper';
import { IProductsWithWrapper } from '../../typespaces/interfaces/IProductsWithWrapper';

export default class ProductsService {
  static async fetchProducts(params?: URLSearchParams): Promise<IProductsWithWrapper['data']> {
    const productWithWrapper = await $api.request({
      method: 'get',
      url: `/products`,
      params,
    });
    // TODO: Адаптер бы сюда (и ниже тоже)
    return productWithWrapper.data.data;
  }

  static async fetchProductById(id: IProduct['_id']): Promise<IProductWithWrapper['data']> {
    const productWithWrapper = await $api.request({
      method: 'get',
      url: `/products/${id}`,
    });
    return productWithWrapper.data.data;
  }
}
