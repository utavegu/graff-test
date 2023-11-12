import { IRequest } from '../typespaces/interfaces/IRequest';
import { SortingTypes } from '../typespaces/enums/SortingTypes';

export const getProductsQueryParams = (request: IRequest) => {
  return {
    // Колхозная валидация на коленке о_О, привет Joi и class-validator
    sort:
      !!request.query?.sort &&
      (request.query?.sort === SortingTypes.POPULARITY ||
        request.query?.sort === SortingTypes.PRICE_ASC ||
        request.query?.sort === SortingTypes.PRICE_DESC)
        ? request.query?.sort
        : SortingTypes.POPULARITY,
  };
};
