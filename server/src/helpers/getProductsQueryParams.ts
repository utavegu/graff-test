import { IRequest } from '../typespaces/interfaces/IRequest';
import { SortingTypes } from '../typespaces/enums/SortingTypes';
import { IProductsQueryParams } from '../typespaces/interfaces/IProductsQueryParams';
import { ParsedQs } from 'qs';

// Колхозная валидация на коленке о_О, привет Joi и class-validator

const getValidPage = (page: string | ParsedQs | string[] | ParsedQs[]) => {
  if (Number(page)) {
    if (Number(page) <= 0) {
      return 1;
    }
    return Number(page);
  }
  return 1;
};

export const getProductsQueryParams = (
  request: IRequest,
): IProductsQueryParams => {
  return {
    sort:
      !!request.query?.sort &&
      (request.query?.sort === SortingTypes.POPULARITY ||
        request.query?.sort === SortingTypes.PRICE_ASC ||
        request.query?.sort === SortingTypes.PRICE_DESC)
        ? request.query?.sort
        : SortingTypes.POPULARITY,
    page: !!request.query?.page ? getValidPage(request.query?.page) : 1,
    colors: request.query?.colors,
  };
};
