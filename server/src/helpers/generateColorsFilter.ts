import { IProductsQueryParams } from '../typespaces/interfaces/IProductsQueryParams';

export const generateColorsFilter = (
  colors: IProductsQueryParams['colors'],
) => {
  if (colors) {
    return { colors: { $all: String(colors).split(',') } };
  }
  return {};
};
