import { useState, ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { filtersSlice } from '../store/filters.slice';
import { SortingTypes } from '../typespaces/enums/SortingTypes';

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
    <ul>
      <li>
        <label>
          <input
            className="visually-hidden"
            type="radio"
            name={SortingTypes.POPULARITY}
            checked={filtersSlice.filters.sort === SortingTypes.POPULARITY}
            onChange={handleChangeInput}
            onClick={() => {
              console.log('1');
            }}
          />
          {/* <span className={`${s.custom_radio} ${s.list}`} title="Карточки"></span> */}
          <span className="visually-hidden">По популярности</span>
        </label>
      </li>
      {priceView.isShowAscPriceSorting && (
        <li>
          <label>
            <input
              className="visually-hidden"
              type="radio"
              name={SortingTypes.PRICE_ASC}
              checked={filtersSlice.filters.sort === SortingTypes.PRICE_ASC}
              onChange={handleChangeInput}
              onClick={() => setPriceView({ isShowAscPriceSorting: false, isShowDescPriceSorting: true })}
            />
            {/* <span className={`${s.custom_radio} ${s.module}`} title="Список"></span> */}
            <span className="visually-hidden">Цена - сначала дешевые</span>
          </label>
        </li>
      )}
      {priceView.isShowDescPriceSorting && (
        <li>
          <label>
            <input
              className="visually-hidden"
              type="radio"
              name={SortingTypes.PRICE_DESC}
              checked={filtersSlice.filters.sort === SortingTypes.PRICE_DESC}
              onChange={handleChangeInput}
              onClick={() => setPriceView({ isShowAscPriceSorting: true, isShowDescPriceSorting: false })}
            />
            {/* <span className={`${s.custom_radio} ${s.module}`} title="Список"></span> */}
            <span className="visually-hidden">Цена - сначала дорогие</span>
          </label>
        </li>
      )}
    </ul>
  );
};

export default observer(Sorting);
