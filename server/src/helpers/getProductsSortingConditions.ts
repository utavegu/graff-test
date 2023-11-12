import { SortingTypes } from '../typespaces/enums/SortingTypes';

export const getProductsSortingConditions = (sortingType: SortingTypes) => {
  switch (sortingType) {
    case SortingTypes.POPULARITY:
      return { popularity: 'desc' };
    case SortingTypes.PRICE_ASC:
      return { price: 'asc' };
    case SortingTypes.PRICE_DESC:
      return { price: 'desc' };
    default:
      return { popularity: 'desc' };
  }
};
