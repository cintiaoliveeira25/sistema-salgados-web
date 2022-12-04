import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import { InfoWithIcon } from '../../components/InfoWithIcon';
import { RegularText, TitleText } from '../../components/Typography';
import { OrderConfirmedContainer, OrderDetailsContainer, OrderDetailsWrapper } from './styles';
import { useTheme } from 'styled-components';
import confirmedOrderIllustration from '../../assets/delivery.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ICreateAddress } from '../../models/address';
import { paymentMethods } from '../CompleteOrder/components/PaymentMethodOptions';

interface LocationType {
  state: ICreateAddress;
}

export const OrderConfirmed = () => {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, []);

  if (!state) return <></>;

  return (
    <OrderConfirmedContainer className='container'>
      <div>
        <TitleText size='l' color='cart'>
          Uhu! Pedido confirmado
        </TitleText>
        <RegularText size='l' color='subtitle'>
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <OrderDetailsWrapper>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight='fill' />}
            iconBg={colors['brand-orange']}
            text={
              <RegularText>
                Entrega em {state.street}, {state.number}
                <br />
                {state.district} - {state.city}. {state.uf}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight='fill' />}
            iconBg={colors['base-error']}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>23/11/2022 - 15:30 </strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight='fill' />}
            iconBg={colors['brand-bege-strong']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} />
      </OrderDetailsWrapper>
    </OrderConfirmedContainer>
  );
};
