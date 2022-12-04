import { PaymentMethods } from './enum/paymentMethods';

export interface ICreateAddress {
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  uf: string;
  paymentMethod: PaymentMethods;
}
