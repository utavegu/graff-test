import { PRODUCTS_PER_PAGE } from '../constants/products.constants';
import { IProductsQueryParams } from '../typespaces/interfaces/IProductsQueryParams';

export const generatePagination = (
  page: IProductsQueryParams['page'],
  totalProducts: number,
) => {
  const offset = (Number(page) - 1) * PRODUCTS_PER_PAGE;
  const pages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
  return { offset, pages };
};
