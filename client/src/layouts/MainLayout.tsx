import { Outlet } from 'react-router-dom';
import Wrapper from './Wrapper/Wrapper';
import Header from './Header/Header';

const MainLayout = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
};

export default MainLayout;
