import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('Nome é um campo obrigatório.'),
  email: Yup.string().email('Digite um endereço de e-mail válido.').required('Email é um campo obrigatório.'),
  password: Yup.string().required('Senha é um campo obrigatório.'),
  confirmPassword: 
    Yup.string()
      .required('Confirme sua senha.')
      .oneOf([Yup.ref('password')], 'As senhas não correspondem.'),
});
