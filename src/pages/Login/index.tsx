import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import signIn from '../../assets/sign_in.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ErrorsType } from '../../models/errors';
import { doLogin } from '../../services/contexts/login';
import { ISingIn } from './../../models/user';
import { schema } from './schema';
import { AsideContent, Form, FormContent, IntroTitle, LoginContainer, MainContent } from './styles';

export const Login = () => {
  const { register, handleSubmit, formState } = useForm<ISingIn>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const { errors } = formState as unknown as ErrorsType;

  const handleLogin = async (data: ISingIn) => {
    console.log(data)
    const authenticated = await doLogin(data.email, data.password);
    if (authenticated) {
      navigate('/');
    }
  }

  return (
    <LoginContainer>
      <AsideContent>
        <img src={signIn} />
      </AsideContent>
      <MainContent>
        <FormContent>
          <IntroTitle size='s'>Entrar</IntroTitle>
          <Form onSubmit={handleSubmit(handleLogin)}>
            <Input type='text' {...register('email')} placeholder='Email' error={errors.email?.message} />
            <Input type='password' {...register('password')} placeholder='Senha' error={errors.password?.message} />
            <Button>Entrar</Button>
          </Form>
        </FormContent>
      </MainContent>
    </LoginContainer>
  );
};
