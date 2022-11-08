import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Login } from './pages/Login/index';
import { Home } from './pages/Home/index';
import { Registrar } from './pages/Registrar/index';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registrar' element={<Registrar />} />
      </Route>
    </Routes>
  );
};
