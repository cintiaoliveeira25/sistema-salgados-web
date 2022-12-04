import { TitleText } from '../../../../components/Typography';
import { ContainerItensProducts, ProductsContainer, ProductsList } from './styles';
import { ProductCard } from './../ProductCard/index';
import { products } from '../../../../data/products';
import { useState } from 'react';
import { ModalProduct } from '../../../../components/Modal';

export const Products = () => {
  const [isAdmin] = useState(true);

  return (
    <ProductsContainer className='container'>
      <ContainerItensProducts>
        <div>
          <TitleText size='l' color='subtitle'>
            Nossos Produtos
          </TitleText>
        </div>
        <div>{isAdmin && <ModalProduct />}</div>
      </ContainerItensProducts>

      <ProductsList>
        {products.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
      </ProductsList>
    </ProductsContainer>
  );
};
