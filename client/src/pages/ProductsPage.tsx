import Sorting from '../components/Sorting';
import Pagination from '../components/Pagination';
import ColorsFilter from '../components/ColorsFilter';
import ProductsList from '../components/ProductsList';

const ProductsPage = () => {
  return (
    <>
      <Sorting />
      <Pagination />
      <ColorsFilter />
      <ProductsList />
    </>
  );
};

export default ProductsPage;
