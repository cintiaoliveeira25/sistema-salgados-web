import styled from 'styled-components';

export const ProductsContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`;

export const ProductsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`;

export const ContainerItensProducts = styled.div`
  display: flex;
  justify-content: space-between;
`;
