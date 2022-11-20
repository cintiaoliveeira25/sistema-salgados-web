import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { PaymentMethodOptions } from '../PaymentMethodOptions';
import { SectionTitle } from '../SectionTitle';
import { TitleText } from './../../../../components/Typography';
import { AddressForm } from './../AddressForm/index';
import { CompleteOrderFormContainer, FormSectionContainer } from './styles';

export const CompleteOrderForm = () => {
  const { colors } = useTheme();

  return (
    <CompleteOrderFormContainer>
      <TitleText size='xs' color='title'>
        Complete seu pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          title='Endereço de Entrega'
          subtitle='Informe o endereço onde deseja receber seu pedido.'
          icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
        />

        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          title='Pagamento'
          subtitle='Escolha a forma que deseja pagar.'
          icon={<CurrencyDollar color={colors['brand-orange']} size={22} />}
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  );
};
