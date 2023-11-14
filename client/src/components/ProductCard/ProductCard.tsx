import { FC } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { prettifyCost } from '../../helpers/prettifyCost';
import { basketSlice } from '../../store/basket.slice';
import Button from '../Button/Button';
import ColorVariant from '../ColorVariant/ColorVariant';
import { IProduct } from '../../typespaces/interfaces/IProduct';
import styles from './ProductCard.module.css';

interface PropTypes {
  product: Omit<IProduct, 'popularity' | 'desc'>;
}

const ProductCard: FC<PropTypes> = ({ product }) => {
  const { _id, image, name, colors, price } = product;
  return (
    <li className={styles.productCard}>
      <div className={styles.imageContainer}>
        <a
          href={image}
          target="_blank"
          rel="noreferrer"
        >
          {/* Вот тут прилетает растровая графика, потому имеет смысл проводить ретинизацию, чтобы на Айфонах не было мыльной картинки. Но не в рамках этого задания. */}
          <img
            src={image}
            alt={name}
          />
        </a>
      </div>
      <div className={styles.information}>
        <Link to={`/products/${_id}`}>
          <h3 className={styles.productName}>{name}</h3>
        </Link>
        <ul className={styles.colorsList}>
          {colors?.map((color, i) => (
            <ColorVariant
              key={i}
              color={color}
            />
          ))}
        </ul>
        <div className={styles.price}>{prettifyCost(price)}₽</div>
        <Link
          className={classnames(styles.notMobile, styles.detailButtonWrapper)}
          to={`/products/${_id}`}
        >
          <Button variant="secondary">Подробнее</Button>
        </Link>
        <Button
          className={styles.addOnCartButton}
          variant="primary"
          onClick={() => {
            basketSlice.pushProductInBasket(product);
          }}
        >
          В корзину
        </Button>
      </div>
    </li>
  );
};

export default ProductCard;
