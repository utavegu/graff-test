import { useState } from 'react';
import Wrapper from '../../layouts/Wrapper/Wrapper';
import Sorting from '../../components/Sorting/Sorting';
import Pagination from '../../components/Pagination/Pagination';
import ColorsFilter from '../../components/ColorsFilter/ColorsFilter';
import ProductsList from '../../components/ProductsList/ProductsList';
import Modal from '../../components/Modal/Modal';
import styles from './ProductsPage.module.css';

const ProductsPage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <Wrapper>
      <div className={styles.productsPage}>
        <section className={styles.headingSection}>
          <h2 className={styles.pageHeading}>Смартфоны</h2>
          <button
            className={styles.showFilterButton}
            onClick={() => {
              setIsModalOpened(true);
            }}
            title="Показать фильтр по цветам"
          >
            <span className="visually-hidden">Показать фильтр по цветам</span>
          </button>
        </section>
        <section className={styles.controlsSection}>
          <Sorting />
          <Pagination />
        </section>
        <section className={styles.colorsFilterSection}>
          <ColorsFilter />
        </section>
        <section className={styles.catalogSection}>
          <ProductsList />
        </section>
      </div>
      <Modal
        isOpened={isModalOpened}
        setIsOpened={setIsModalOpened}
      >
        <ColorsFilter />
      </Modal>
    </Wrapper>
  );
};

export default ProductsPage;
