import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import { InfoWithIcon } from '../../components/InfoWithIcon';
import { RegularText, TitleText } from '../../components/Typography';
import { OrderConfirmedContainer, OrderDetailsContainer, OrderDetailsWrapper } from './styles';
import { useTheme } from 'styled-components';
import confirmedOrderIllustration from '../../assets/delivery.svg';

export const OrderConfirmed = () => {
  const { colors } = useTheme();

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
                Entrega em Rua João Manoel, 1032
                <br />
                Vila Maria - Porto Alegre. RS
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
                <strong>Cartão de crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} />
      </OrderDetailsWrapper>
    </OrderConfirmedContainer>
  );
};
