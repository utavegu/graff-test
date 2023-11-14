import Wrapper from '../layouts/Wrapper/Wrapper';
import Sorting from '../components/Sorting';
import Pagination from '../components/Pagination';
import ColorsFilter from '../components/ColorsFilter';
import ProductsList from '../components/ProductsList/ProductsList';

const ProductsPage = () => {
  return (
    <Wrapper>
      <Sorting />
      <Pagination />
      <ColorsFilter />
      <ProductsList />
    </Wrapper>
  );
};

export default ProductsPage;
