import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { CompleteOrder } from './pages/CompleteOrder';
import { Home } from './pages/Home/index';
import { Login } from './pages/Login/index';
import { OrderConfirmed } from './pages/OrderConfirmed';
import { Registrar } from './pages/Registrar/index';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registrar' element={<Registrar />} />
        <Route path="/completeOrder" element={<CompleteOrder />} />
        <Route path="/orderConfirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  );
};
