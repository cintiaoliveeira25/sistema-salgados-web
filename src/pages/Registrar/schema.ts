import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup.string().email('Digite um endereço de e-mail válido.').required('Email é um campo obrigatório.'),
  password: Yup.string().required('Senha é um campo obrigatório.'),
});
