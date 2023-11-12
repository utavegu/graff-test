import { SortingTypes } from '../enums/SortingTypes';
import { ParsedQs } from 'qs';

export interface IProductsQueryParams {
  sort: SortingTypes;
  page: number;
  colors?: string | ParsedQs | string[] | ParsedQs[];
}
