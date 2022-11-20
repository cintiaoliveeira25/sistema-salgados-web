import { PaymentMethodInput } from '../PaymentMethodInput';
import { PaymentMethodOptionsContainer } from './styles';

export const PaymentMethodOptions = () => {
  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMethodOptionsContainer>
  );
};
