import { observer } from 'mobx-react-lite';
import { filtersSlice } from '../store/filters.slice';
import { ChangeEvent } from 'react';

const ColorsFilter = () => {
  // TODO: Массив уникальных цветов, по хорошему, пока замокаю
  const allColors = ['black', 'blue', 'green', 'white', 'purple'];

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    filtersSlice.setColors({ name: event.target.name, value: event.target.checked });
    filtersSlice.setPage(1);
  };

  return (
    <>
      <ul>
        {allColors.map((color, i) => (
          <li key={i}>
            {/* TODO: Словарь! */}
            {color}
            <input
              type="checkbox"
              name={color}
              checked={filtersSlice.filters.colors[color]}
              onChange={handleInputChange}
            />
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          for (const key in filtersSlice.filters.colors) {
            filtersSlice.setColors({ name: key, value: false });
            filtersSlice.setPage(1);
          }
        }}
      >
        Сбросить фильтры
      </button>
    </>
  );
};

export default observer(ColorsFilter);
