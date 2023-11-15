import { prettifyCost } from '../../helpers/prettifyCost';
import { basketSlice } from '../../store/basket.slice';
import styles from './Basket.module.css';

export function Basket() {
  return (
    <ul className={styles.basketList}>
      {basketSlice?.basket?.length ? (
        basketSlice.basket.map((product, i) => (
          <li
            className={styles.basketItem}
            key={i}
          >
            {product.name} за {prettifyCost(product?.price)} ₽ &nbsp;
            <button
              className={styles.removeProductButton}
              onClick={() => {
                basketSlice?.removeProduct(i);
              }}
              title="Удалить товар из корзины"
            >
              <span className="visually-hidden">Удалить товар из корзины</span>
            </button>
          </li>
        ))
      ) : (
        <div>В корзине пусто!</div>
      )}
    </ul>
  );
}
