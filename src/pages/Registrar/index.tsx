import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import signIn from '../../assets/sign_in.svg';
import { Input } from '../../components/Input';
import { RegularText } from '../../components/Typography';
import { ErrorsType } from '../../models/errors';
import { ICreateUser } from '../../models/user';
import { createUser } from '../../services/contexts/login';
import { Button } from './../../components/Button';
import { schema } from './schema';
import { AccountContent, AsideContent, Form, FormContent, IntroTitle, LoginContainer, MainContent } from './styles';

export const Registrar = () => {
  const { register, handleSubmit, formState } = useForm<ICreateUser>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const { errors } = formState as unknown as ErrorsType;

  const handleUserRegister = async (data: ICreateUser) => {
    try {
      const user = await createUser(data);
      if (user) {
        toast.success('Conta criada com sucesso!');
        navigate('/');
      }
    } catch (error) {
      toast.error('Erro ao criar uma conta.')
    }
  }

  return (
    <LoginContainer>
      <AsideContent>
        <img src={signIn} />
      </AsideContent>
      <MainContent>
        <FormContent>
          <IntroTitle size='l'>Criar uma conta</IntroTitle>
          <Form onSubmit={handleSubmit(handleUserRegister)}>
            <Input
              type='text'
              {...register('name')}
              placeholder='Nome'
              error={errors.name?.message}
            />
            <Input
              type='text'
              {...register('email')}
              placeholder='Email'
              error={errors.email?.message}
            />
            <Input
              type='password'
              {...register('password')}
              placeholder='Senha'
              error={errors.password?.message}
            />
            <Input
              type='password'
              {...register('confirmPassword')}
              placeholder='Confirmar Senha'
              error={errors.confirmPassword?.message}
            />
            <Button>Entrar</Button>
            <AccountContent>
              <RegularText as='h5' size='s' color='subtitle'>
                Ja possui uma conta? <NavLink to='/login'>Entre</NavLink>
              </RegularText>
            </AccountContent>
          </Form>
        </FormContent>
      </MainContent>
    </LoginContainer>
  );
};
