import { SortingTypes } from '../enums/SortingTypes';

interface IProduct {
  _id: string;
  colors?: string[];
  desc?: string;
  image?: string;
  name: string;
  popularity?: number;
  price: number;
}

interface IProductsWithWrapper {
  success: boolean;
  data: {
    products: IProduct[];
    pages: number;
  };
}

interface IProductWithWrapper {
  success: boolean;
  data: IProduct;
}

interface IProductsQueryParams {
  sort: SortingTypes;
  page: number;
  colors?: string;
}

export type { IProduct, IProductWithWrapper, IProductsWithWrapper, IProductsQueryParams };
