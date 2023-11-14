import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ProductsPage from '../pages/ProductsPage';
import ProductPage from '../pages/ProductPage';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout />}
      >
        <Route
          index
          element={
            <Navigate
              to="products"
              replace
            />
          }
        />
        <Route
          path="/products"
          element={<ProductsPage />}
        />
        <Route
          path="/products/:id"
          element={<ProductPage />}
        />
        <Route
          path="*"
          element={<b>Поздравляем, вы попали на секретную страницу! Только тут самые лучшие распродажи!</b>}
        />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
