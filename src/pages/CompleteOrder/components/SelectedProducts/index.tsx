import { TitleText } from '../../../../components/Typography';
import { ConfirmationSection } from '../ConfirmationSection';
import { ItemCartCard } from '../ItemCartCard';
import { DetailsContainer, SelectedProductsContainer } from './styles';

export const SelectedProducts = () => {
  return (
    <SelectedProductsContainer>
      <TitleText size='xs' color='subtitle'>
        Itens selecionados
      </TitleText>

      <DetailsContainer>
        <ItemCartCard />
        <ItemCartCard />
        <ItemCartCard />
        <ItemCartCard />

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedProductsContainer>
  );
};
