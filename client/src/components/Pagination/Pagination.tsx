import { observer } from 'mobx-react-lite';
import { productsSlice } from '../../store/products.slice';
import { filtersSlice } from '../../store/filters.slice';
import styles from './Pagination.module.css';
import classNames from 'classnames';

const Pagination = () => {
  const pagesCount = productsSlice.productsData?.pages;

  return (
    <div className={styles.pagination}>
      <button
        className={classNames([styles.paginationButton, styles.buttonPrev])}
        disabled={filtersSlice.filters.page <= 1}
        onClick={() => {
          filtersSlice.setPage(filtersSlice.filters.page - 1);
        }}
        title="Предыдущая страница"
      >
        <span className="visually-hidden">Предыдущая страница</span>
      </button>

      <span className={styles.pageNumber}>{filtersSlice.filters.page}</span>

      <button
        className={classNames([styles.paginationButton, styles.buttonNext])}
        disabled={Number(filtersSlice.filters.page) >= pagesCount}
        onClick={() => {
          filtersSlice.setPage(filtersSlice.filters.page + 1);
        }}
        title="Следующая страница"
      >
        <span className="visually-hidden">Следующая страница</span>
      </button>
    </div>
  );
};

export default observer(Pagination);
