import { ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText, TitleText } from '../../../../components/Typography';
import { useCart } from '../../../../hooks/useCart';
import { formatMoney } from '../../../../utils/formatMoney';
import {
  AddCartWrapper,
  CardFooter,
  Description,
  Name,
  ProductCardContainer,
  Tags,
  Warning,
} from './styles';
import { ProductProps } from './types';

export const ProductCard = ({ products }: ProductProps) => {
  const [quantity, setQuantity] = useState(10);
  const { addProductToCart } = useCart();

  const { tags, id, price, name, description, warning } = products;
  const formattedPrice = formatMoney(price);

  const handleIncrease = () => {
    setQuantity((state) => state + 5);
  }

  const handleDecrease = () => {
    setQuantity((state) => state - 5);
  }

  const handleAddToCart = () => {
    const productToAdd = {
      ...products,
      quantity,
    };
    addProductToCart(productToAdd);
  }

  return (
    <ProductCardContainer>
      <img src={`/products/${products.photo}`} />

      <Tags>
        {tags.map((tag) => (
          <span key={`${id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{name}</Name>
      <Description>{description}</Description>
      <Warning>{warning}</Warning>

      <CardFooter>
        <div>
          <RegularText size='l'>R$</RegularText>
          <TitleText size='m' color='text' as='strong'>
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight='fill' size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </ProductCardContainer>
  );
};
