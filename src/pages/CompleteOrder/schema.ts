import * as Yup from 'yup';
import { PaymentMethods } from '../../models/enum/paymentMethods';

export const schema = Yup.object().shape({
  cep: Yup.string().min(1, 'Informe o CEP'),
  street: Yup.string().min(1, 'Informe o nome da rua'),
  number: Yup.string().required('Informe o número'),
  complement: Yup.string(),
  district: Yup.string().required('Informe o oairro'),
  city: Yup.string().min(1, 'Informe a aidade'),
  uf: Yup.string().min(1, 'Informe a UF'),
  paymentMethod: Yup.mixed<PaymentMethods>().oneOf(Object.values(PaymentMethods)).required('Escolha um método de pagamento'),
});
