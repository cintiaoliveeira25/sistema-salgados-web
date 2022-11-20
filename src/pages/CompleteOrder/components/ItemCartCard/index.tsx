import { Trash } from 'phosphor-react';
import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText } from '../../../../components/Typography';
import { ActionsContainer, ItemCartCardContainer, RemoveButton } from './styles';

export const ItemCartCard = () => {
  return (
    <ItemCartCardContainer>
      <div>
        <img />
        <div>
          <RegularText color='subtitle'>Teste</RegularText>
          <ActionsContainer>
            <QuantityInput />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,99</p>
    </ItemCartCardContainer>
  );
};
