import styled from 'styled-components';
import { TitleText } from '../../../../components/Typography';

export const IntroContainer = styled.section`
  width: 100%;
  height: 35rem;
  background: ${({ theme }) => theme.colors['base-background']};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
`;

export const IntroContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 0.5rem;
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;

export const IntroAbout = styled.div`
  margin-top: 0.5rem;
  width: 80%;

  @media (min-width: 1200px) {
    margin-top: 0.5rem;
    width: 100%;
  }
`;

export const ImageContent = styled.div`
`;
