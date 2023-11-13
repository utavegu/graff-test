import { makeAutoObservable } from 'mobx';
import ProductsService from '../api/services/ProductsService';
import { IProduct } from '../typespaces/interfaces/IProduct';
import { IProductsWithWrapper } from '../typespaces/interfaces/IProductsWithWrapper';

class ProductsSlice {
  product = null as unknown as IProduct;
  productsData = null as unknown as IProductsWithWrapper['data'];
  isLoading = false;
  error = null as Error | null;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  setError(error: Error | null) {
    this.error = error;
  }

  setProduct(product: IProduct) {
    this.product = product;
  }

  setProductsData(products: IProductsWithWrapper['data']) {
    this.productsData = products;
  }

  async fetchProducts(filters: URLSearchParams) {
    try {
      this.setLoading(true);
      this.setError(null);
      const productsData = await ProductsService.fetchProducts(filters);
      if (productsData) {
        this.setProductsData(productsData);
      }
    } catch (error) {
      console.error(error);
      this.setError(error as Error);
    } finally {
      this.setLoading(false);
    }
  }

  async fetchTargetProduct(id: IProduct['_id']) {
    try {
      this.setLoading(true);
      this.setError(null);
      const product = await ProductsService.fetchProductById(id);
      if (product) {
        this.setProduct(product);
      }
    } catch (error) {
      console.error(error);
      this.setError(error as Error);
    } finally {
      this.setLoading(false);
    }
  }
}

const productsSlice = new ProductsSlice();
export { productsSlice };
