import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles';
import logo from '../../assets/logo.jpeg';
import { ShoppingCart, SignIn, User } from 'phosphor-react';
import { useState } from 'react';

export const Header = () => {
  const [authenticated] = useState(false);

  return (
    <HeaderContainer>
      <div className='container'>
        <img src={logo} />

        <HeaderButtonsContainer>
          {authenticated ? (
            <HeaderButton variant='yellow'>
              <User size={20} weight='fill' />
              Cíntia Oliveira
            </HeaderButton>
          ) : (
            <HeaderButton variant='yellow'>
              <SignIn size={20} weight='fill' alt='Entrar' />
            </HeaderButton>
          )}
          <HeaderButton variant='yellow'>
            <ShoppingCart size={20} weight='fill' />
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
};
