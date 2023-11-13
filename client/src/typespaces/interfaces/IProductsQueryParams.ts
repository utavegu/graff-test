import { SortingTypes } from '../enums/SortingTypes';

export interface IProductsQueryParams {
  sort: SortingTypes;
  page: number;
  colors?: string;
}
