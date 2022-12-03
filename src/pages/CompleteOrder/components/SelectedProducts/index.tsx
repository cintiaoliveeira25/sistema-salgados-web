import { TitleText } from '../../../../components/Typography';
import { useCart } from '../../../../hooks/useCart';
import { ConfirmationSection } from '../ConfirmationSection';
import { ItemCartCard } from '../ItemCartCard';
import { DetailsContainer, SelectedProductsContainer } from './styles';

export const SelectedProducts = () => {
  const { cartItems } = useCart();

  return (
    <SelectedProductsContainer>
      <TitleText size='xs' color='title'>
        Itens selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <ItemCartCard key={item.id} product={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedProductsContainer>
  );
};
