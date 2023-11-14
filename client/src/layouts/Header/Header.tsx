import { Link } from 'react-router-dom';
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
        <button
          className={styles.cart}
          title="Открыть корзину"
        >
          <span className="visually-hidden">Открыть корзину</span>
        </button>
      </Wrapper>
    </header>
  );
};

export default Header;
