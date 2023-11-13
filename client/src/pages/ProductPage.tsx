import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { productsSlice } from '../store/products.slice';
import { basketSlice } from '../store/basket.slice';

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      productsSlice.fetchTargetProduct(id);
    }
  }, [id]);

  if (productsSlice.isLoading) {
    return <div>Загрузка данных о товаре...</div>;
  }

  const product = productsSlice?.product;

  return (
    <>
      <button onClick={() => navigate(-1)}>Назад</button>
      {productsSlice.error && <div>Ошибка загрузки данных о товаре: {productsSlice.error.message}</div>}
      {product && (
        <div>
          <p>Название: </p>
          <p>Описание: {product?.desc}</p>
          <p>Цена: {product?.price}</p>
          <p>
            <img
              src={product?.image}
              alt={productsSlice.product?.name}
            />
          </p>
          <p>Цвета: {product?.colors}</p>
          <button
            onClick={() => {
              basketSlice.pushProductInBasket(product);
            }}
          >
            В корзину
          </button>
        </div>
      )}
    </>
  );
};

export default observer(ProductPage);
