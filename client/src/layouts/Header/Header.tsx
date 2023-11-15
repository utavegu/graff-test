import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { basketSlice } from '../../store/basket.slice';
import Wrapper from '../Wrapper/Wrapper';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        {/* Это логотип франшизы и, по хорошему, должен быть картинкой, приходящей из админки, с вытекающей из этого фортификацией стилей... Но не в рамках этого ТЗ */}
        <Link to="/">
          <h1 className={styles.mainHeading}>graff.shop</h1>
        </Link>
        {/* TODO: По клику открывать модалку и мапить туда все товары из basketSlice?.basket*/}
        <button
          className={styles.cart}
          title="Открыть корзину"
        >
          <span className="visually-hidden">Открыть корзину</span>
          <span className={styles.productsCount}>{basketSlice?.basket.length}</span>
        </button>
      </Wrapper>
    </header>
  );
};

export default observer(Header);
