import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { productsSlice } from '../store/products.slice';
import { filtersSlice } from '../store/filters.slice';
import { getColorsString } from '../helpers/getColorsString';

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
  }, [filtersSlice.filters.page, filtersSlice.filters.sort, filtersSlice.filters.colors]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.size) {
      productsSlice.fetchProducts(queryParams);
    }
  }, [location.search]);

  if (productsSlice.isLoading) {
    return <div>Загрузка товаров...</div>;
  }

  if (productsSlice.error) {
    return <div>Ошибка загрузки товаров! Попробуйте позже</div>;
  }

  return (
    <ul>
      {!!productsSlice?.productsData?.products?.length &&
        productsSlice.productsData.products.map((product, i) => (
          <li key={i}>
            <p>Название: {product.name}</p>
            <p>Цена: {product.price}</p>
            <p>Цвета: {product.colors}</p>
            <p>Популярность: {product.popularity}</p>
            <hr />
          </li>
        ))}
    </ul>
  );
};

export default observer(ProductsList);
