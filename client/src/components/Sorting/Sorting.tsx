import { useState, ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import { filtersSlice } from '../../store/filters.slice';
import { SortingTypes } from '../../typespaces/enums/SortingTypes';
import styles from './Sorting.module.css';

const Sorting = () => {
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    // TODO: По хорошему, конечно, провалидировать, отсеяв левые значения и не обманывать TS. Можно накидать через класс, на подобии DTO.
    filtersSlice.setSort(event.target.name as SortingTypes);
    filtersSlice.setPage(1);
  };

  const [priceView, setPriceView] = useState({
    isShowAscPriceSorting: true,
    isShowDescPriceSorting: false,
  });

  return (
    <ul className={styles.sorting}>
      <li className={styles.sortingItem}>
        <label>
          <input
            className="visually-hidden"
            type="radio"
            name={SortingTypes.POPULARITY}
            checked={filtersSlice.filters.sort === SortingTypes.POPULARITY}
            onChange={handleChangeInput}
          />
          <span
            className={classNames([
              styles.sortingItemDesc,
              filtersSlice.filters.sort === SortingTypes.POPULARITY && styles.active,
            ])}
          >
            По популярности
          </span>
        </label>
      </li>

      {priceView.isShowAscPriceSorting && (
        <li className={styles.sortingItem}>
          <label>
            <input
              className="visually-hidden"
              type="radio"
              name={SortingTypes.PRICE_ASC}
              checked={filtersSlice.filters.sort === SortingTypes.PRICE_ASC}
              onChange={handleChangeInput}
              onClick={() => setPriceView({ isShowAscPriceSorting: false, isShowDescPriceSorting: true })}
            />
            <span
              className={classNames([
                styles.sortingItemDesc,
                filtersSlice.filters.sort === SortingTypes.PRICE_DESC && styles.active,
              ])}
            >
              По цене
            </span>
            <span
              className={classNames([
                styles.sortingIcon,
                filtersSlice.filters.sort === SortingTypes.PRICE_DESC && styles.desc,
              ])}
              title='Сначала дорогие'
            ></span>
          </label>
        </li>
      )}

      {priceView.isShowDescPriceSorting && (
        <li className={styles.sortingItem}>
          <label>
            <input
              className="visually-hidden"
              type="radio"
              name={SortingTypes.PRICE_DESC}
              checked={filtersSlice.filters.sort === SortingTypes.PRICE_DESC}
              onChange={handleChangeInput}
              onClick={() => setPriceView({ isShowAscPriceSorting: true, isShowDescPriceSorting: false })}
            />
            <span
              className={classNames([
                styles.sortingItemDesc,
                filtersSlice.filters.sort === SortingTypes.PRICE_ASC && styles.active,
              ])}
            >
              По цене
            </span>
            <span
              className={classNames([
                styles.sortingIcon,
                filtersSlice.filters.sort === SortingTypes.PRICE_ASC && styles.asc,
              ])}
              title='Сначала дешевые'
            ></span>
          </label>
        </li>
      )}
    </ul>
  );
};

export default observer(Sorting);
