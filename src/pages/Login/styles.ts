import styled from 'styled-components';
import { TitleText } from '../../components/Typography';

export const LoginContainer = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const AsideContent = styled.aside`
  flex: 6;
  background: ${({ theme }) => theme.colors['base-white']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 88px;

  img {
    max-width: 320px;
    margin: auto;
  }
`;

export const MainContent = styled.main`
  flex: 8;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors['base-white']};
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;
`;

export const Form = styled.form``;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors['base-subtitle']};
`;

export const AccountContent = styled.div`
  display: flex;
  padding: 0.3rem;
  justify-content: center;
`;
