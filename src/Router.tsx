import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { CompleteOrder } from './pages/CompleteOrder';
import { Home } from './pages/Home/index';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/complete' element={<CompleteOrder />} />
      </Route>
    </Routes>
  );
};
