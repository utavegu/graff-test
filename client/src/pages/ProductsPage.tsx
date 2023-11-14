import Wrapper from '../layouts/Wrapper/Wrapper';
import Sorting from '../components/Sorting/Sorting';
import Pagination from '../components/Pagination';
import ColorsFilter from '../components/ColorsFilter';
import ProductsList from '../components/ProductsList/ProductsList';

const ProductsPage = () => {
  return (
    <Wrapper>
      <h2>Смартфоны</h2>
      <section>
        <Sorting />
        <Pagination />
      </section>
      {/* Не отображается на мобилке */}
      <section style={{ display: 'none' }}>
        <ColorsFilter />
      </section>
      <section>
        <ProductsList />
      </section>
    </Wrapper>
  );
};

export default ProductsPage;
