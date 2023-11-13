import { IProductsQueryFilters } from '../typespaces/interfaces/IProductsQueryFilters';

export const getColorsString = (colorsObj: IProductsQueryFilters['colors']) => {
  const colors = [];
  for (const key in colorsObj) {
    if (colorsObj[key]) {
      colors.push(key);
    }
  }
  if (colors.length) {
    return colors.join(',');
  }
  return '';
};
