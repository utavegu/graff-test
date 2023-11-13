import { makeAutoObservable } from 'mobx';
import { SortingTypes } from '../typespaces/enums/SortingTypes';
import { IProductsQueryFilters } from '../typespaces/interfaces/IProductsQueryFilters';

class FiltersSlice {
  filters = {
    sort: SortingTypes.POPULARITY,
    page: 1,
    // TODO: Тоже нужно формировать динамически, запросив с бэка уникальный массив цветов
    colors: {
      black: false,
      blue: false,
      green: false,
      white: false,
      purple: false,
    },
  } as IProductsQueryFilters;

  constructor() {
    makeAutoObservable(this);
  }

  setSort(sortingType: IProductsQueryFilters['sort']) {
    this.filters.sort = sortingType;
  }

  setPage(page: IProductsQueryFilters['page']) {
    this.filters.page = page;
  }

  setColors(color: { name: string; value: boolean }) {
    this.filters.colors = { ...this.filters.colors, [color.name]: color.value };
  }
}

const filtersSlice = new FiltersSlice();
export { filtersSlice };
