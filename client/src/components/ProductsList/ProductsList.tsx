import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { productsSlice } from '../../store/products.slice';
import { filtersSlice } from '../../store/filters.slice';
import { getColorsString } from '../../helpers/getColorsString';
import ProductCard from '../ProductCard/ProductCard';
import Skeleton from '../Skeleton/Skeleton';
import styles from './ProductsList.module.css';

const ProductsList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Это базовый вариант. А так ещё можно подхватывать параметры из URL, парсить их и делать запрос (чтобы пользователь мог делиться ссылкой на выборку). Также можно чистить параметры от левых, чтобы мамкины хакеры в строку чего не надо не прописывали, от пустого colors и т.д.
  useEffect(() => {
    navigate({
      pathname: '',
      search: `?sort=${filtersSlice.filters.sort}&page=${filtersSlice.filters.page}&colors=${getColorsString(
        filtersSlice.filters.colors
      )}`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersSlice.filters.page, filtersSlice.filters.sort, filtersSlice.filters.colors]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.size) {
      productsSlice.fetchProducts(queryParams);
    }
  }, [location.search]);

  if (productsSlice.error) {
    return <div>Ошибка загрузки товаров! Попробуйте позже</div>;
  }

  return (
    <ul className={styles.productsList}>
      {productsSlice.isLoading ? (
        ['', '', '', '', ''].map(() => <Skeleton />)
      ) : productsSlice?.productsData?.products?.length ? (
        productsSlice.productsData.products.map((product, i) => (
          <ProductCard
            key={i}
            product={product}
          />
        ))
      ) : (
        <div className={styles.productsNotFound}>Товары не найдены!</div>
      )}
    </ul>
  );
};

export default observer(ProductsList);
