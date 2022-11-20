import { ShoppingCart } from 'phosphor-react';
import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText, TitleText } from '../../../../components/Typography';
import { formatMoney } from '../../../../utils/formatMoney';
import {
  AddCartWrapper,
  CardFooter,
  Description,
  Name,
  ProductCardContainer,
  Tags,
} from './styles';
import { ProductProps } from './types';

export const ProductCard = ({ products }: ProductProps) => {
  const { tags, id, price, name, description } = products;

  const formattedPrice = formatMoney(price);

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

      <CardFooter>
        <div>
          <RegularText size='l'>R$</RegularText>
          <TitleText size='m' color='text' as='strong'>
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart weight='fill' size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </ProductCardContainer>
  );
};
