/* eslint-disable @typescript-eslint/no-empty-function */
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles';
// import logo from '../../assets/logo.jpeg';
import logo from '../../assets/logo.jpg';
import { ShoppingCart, SignIn, User } from 'phosphor-react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../services/contexts/login';
import { useUser } from '../../hooks/user';

export const Header = () => {
  const { authenticated, user, setAuthDataContext } = useUser();

  useEffect(() => {}, [authenticated]);

  const handleLogout = (): void => {
    setAuthDataContext(null);
    logout();
  };

  return (
    <HeaderContainer>
      <div className='container'>
        <NavLink to='/'>
          <img className='logo-image' src={logo} />
        </NavLink>

        <HeaderButtonsContainer>
          {authenticated ? (
            <>
              <HeaderButton variant='yellow'>
                <User size={20} weight='fill' />
                {user?.name}
              </HeaderButton>
              <NavLink to='/login'>
                <HeaderButton variant='yellow' onClick={handleLogout}>
                  <SignIn size={20} weight='fill' alt='Logout' />
                </HeaderButton>
              </NavLink>
            </>
          ) : (
            <NavLink to='/login'>
              <HeaderButton variant='yellow'>
                <SignIn size={20} weight='fill' alt='Entrar' />
              </HeaderButton>
            </NavLink>
          )}
          <HeaderButton variant='yellow'>
            <ShoppingCart size={20} weight='fill' />
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
};
