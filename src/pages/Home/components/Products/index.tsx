import { TitleText } from '../../../../components/Typography'
import { ProductsContainer, ProductsList } from './styles'
import { ProductCard } from './../ProductCard/index';
import { products } from '../../../../data/products';

export const Products = () => {
  return (
    <ProductsContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos Produtos
      </TitleText>

      <ProductsList>
        {products.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
      </ProductsList>
    </ProductsContainer>
  )
}