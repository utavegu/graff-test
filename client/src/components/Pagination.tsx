import { observer } from 'mobx-react-lite';
import { productsSlice } from '../store/products.slice';
import { filtersSlice } from '../store/filters.slice';

/*
  TODOs:
  - Стилизация
  - Убрать DRY из установки оффсета. Сделай кейсом и прокидывай нужный параметр из енумки (следующая, предыдущая, конкретная (таргет)), остальное пусть сам вычисляет
  - На перспективу: Если страниц слишком много, центральные значения не отображать
  */

const Pagination = () => {
  const pagesCount = productsSlice.productsData?.pages;
  const pagesBookmarks = new Array(pagesCount).fill('');

  return (
    <div>
      {pagesCount > 1 && (
        <div>
          <button
            disabled={filtersSlice.filters.page <= 1}
            onClick={() => {
              filtersSlice.setPage(filtersSlice.filters.page - 1);
            }}
          >
            Предыдущая страница
          </button>
          {pagesBookmarks.map((_, i) => (
            <button
              key={i}
              style={filtersSlice.filters.page === i + 1 ? { border: '1px solid red' } : { border: '1px solid black' }}
              onClick={() => {
                filtersSlice.setPage(i + 1);
              }}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={Number(filtersSlice.filters.page) >= pagesCount}
            onClick={() => {
              filtersSlice.setPage(filtersSlice.filters.page + 1);
            }}
          >
            Следующая страница
          </button>
        </div>
      )}
    </div>
  );
};

export default observer(Pagination);
