import { Navigate, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Routes>
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
    </Routes>
  );
}

export default App;
