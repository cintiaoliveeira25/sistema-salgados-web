import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles';
import logo from '../../assets/logo.jpeg';
import { ShoppingCart, SignIn, User } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getCurrentUserDetails, logout } from '../../services/contexts/login';
import { useUser } from '../../hooks/user';

export const Header = () => {
  const { authenticated, setAuthDataContext } = useUser();
  const [user, setUser] = useState('');

  const getCurrentUser = async () => {
    const result = await getCurrentUserDetails();
    setUser(result?.name);
    console.log(result);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  console.log(authenticated);

  const handleLogout = (): void => {
    setAuthDataContext(null);
    logout();
  }

  return (
    <HeaderContainer>
      <div className='container'>
        <img className='logo-image' src={logo} />

        <HeaderButtonsContainer>
          {authenticated ? (
            <>
              <HeaderButton variant='yellow'>
                <User size={20} weight='fill' />
                {user}
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