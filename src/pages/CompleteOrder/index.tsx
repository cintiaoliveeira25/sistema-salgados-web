import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { ICreateAddress } from '../../models/address';
import { CompleteOrderForm } from './components/CompleteOrderForm';
import { SelectedProducts } from './components/SelectedProducts';
import { schema } from './schema';
import { CompleteOrderContainer } from './styles';

export const CompleteOrder = () => {
  const confirmOrderForm = useForm<ICreateAddress>({
    resolver: yupResolver(schema),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = confirmOrderForm;
  const navigate = useNavigate();
  const { cleanCart } = useCart();

  const handleConfirmOrder = (data: ICreateAddress) => {
    navigate('/orderConfirmed', {
      state: data,
    });
    cleanCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer className='container' onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompleteOrderForm />
        <SelectedProducts />
      </CompleteOrderContainer>
    </FormProvider>
  );
};
