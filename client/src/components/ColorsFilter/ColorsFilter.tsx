import { ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import { filtersSlice } from '../../store/filters.slice';
import { colorsDict } from '../../dictionaries/colorsDict';
import styles from './ColorsFilter.module.css';

const ColorsFilter = () => {
  // TODO: Массив уникальных цветов, по хорошему, пока замокаю
  const allColors = ['black', 'blue', 'green', 'white', 'purple'];

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    filtersSlice.setColors({ name: event.target.name, value: event.target.checked });
    filtersSlice.setPage(1);
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filterHeading}>Цвет</div>
      <ul className={styles.colorsFilterList}>
        {allColors.map((color, i) => (
          <li
            className={styles.colorsFilterItem}
            key={i}
          >
            <label className={styles.colorsFilterLabel}>
              <input
                className="visually-hidden"
                type="checkbox"
                name={color}
                checked={filtersSlice.filters.colors[color]}
                onChange={handleInputChange}
              />
              <span
                className={classNames(styles.customCheckbox, color === 'white' && styles.сolorVariantWhite)}
                style={{ backgroundColor: color }}
              ></span>
              <span className={styles.colorsDesc}>{colorsDict[color]}</span>
            </label>
          </li>
        ))}
      </ul>
      <button
        className={styles.resetFiltersButton}
        onClick={() => {
          for (const key in filtersSlice.filters.colors) {
            filtersSlice.setColors({ name: key, value: false });
            filtersSlice.setPage(1);
          }
        }}
      >
        Сбросить параметры
      </button>
    </div>
  );
};

export default observer(ColorsFilter);
