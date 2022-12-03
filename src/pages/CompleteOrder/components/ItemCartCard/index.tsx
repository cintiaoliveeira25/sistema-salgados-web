import { Trash } from 'phosphor-react';
import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText } from '../../../../components/Typography';
import { CartItem } from '../../../../context/CartContext';
import { useCart } from '../../../../hooks/useCart';
import { formatMoney } from '../../../../utils/formatMoney';
import { ActionsContainer, ItemCartCardContainer, RemoveButton } from './styles';

interface ProductCartCardProps {
  product: CartItem;
}

export const ItemCartCard = ({ product }: ProductCartCardProps) => {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  console.log(product.uniPrice, product.quantity);



  const productTotal = product.uniPrice * product.quantity;

  const formattedPrice = formatMoney(productTotal);

  const handleIncrease = () => {
    changeCartItemQuantity(product.id, 'increase');
  };

  const handleDecrease = () => {
    changeCartItemQuantity(product.id, 'decrease');
  };

  const handleRemove = () => {
    removeCartItem(product.id);
  };

  return (
    <ItemCartCardContainer>
      <div>
        <img src={`/products/${product.photo}`} />
        <div>
          <RegularText color='subtitle'>{product.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={product.quantity}
              size='small'
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </ItemCartCardContainer>
  );
};
