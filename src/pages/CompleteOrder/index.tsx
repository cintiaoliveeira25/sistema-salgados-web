import { CompleteOrderForm } from './components/CompleteOrderForm';
import { SelectedProducts } from './components/SelectedProducts';
import { CompleteOrderContainer } from './styles';

export const CompleteOrder = () => {
  return (
    <CompleteOrderContainer className='container'>
      <CompleteOrderForm />
      <SelectedProducts />
    </CompleteOrderContainer>
  );
};
