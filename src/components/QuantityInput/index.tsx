import { Minus, Plus } from 'phosphor-react';
import { IconWrapper, QuantityInputContainer } from './styles';
import { QuantityInputProps } from './types';

export const QuantityInput = ({
  onIncrease,
  onDecrease,
  quantity,
  size = 'medium',
}: QuantityInputProps) => {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper onClick={onDecrease} disabled={quantity <= 10}>
        <Minus size={14} weight='fill' />
      </IconWrapper>
      <input type='number' readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight='fill' />
      </IconWrapper>
    </QuantityInputContainer>
  );
};
