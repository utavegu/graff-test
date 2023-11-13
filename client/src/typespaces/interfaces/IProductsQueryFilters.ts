import { SortingTypes } from '../enums/SortingTypes';

export interface IProductsQueryFilters {
  sort: SortingTypes;
  page: number;
  colors: { [key: string]: boolean };
}
