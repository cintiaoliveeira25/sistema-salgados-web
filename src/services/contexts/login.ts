import { toast } from 'react-toastify';
import { HttpStatusCode } from '../../models/status';
import { ICreateUser, IUser } from '../../models/user';
import { api } from '../api';
import { removeAuthData, saveAuthData } from '../localStorage/authentication';

export const createUser = async (createUser: ICreateUser): Promise<boolean> => {
  const result = await api.post('Users/register', createUser);
  return result.status === HttpStatusCode.OK;
};

export const getCurrentUserDetails = async (): Promise<IUser> => {
  const { data } = await api.get('Users/me')
  return data as IUser
}

export const doLogin = async (email: string, password: string): Promise<boolean> => {
  const data = {
    email,
    password,
    grantType: 'password',
  };

  const result = await api.post('Users/authenticate', data);
  const { refreshToken, webToken, user } = result.data;
  saveAuthData({
    user: user,
    refreshToken: refreshToken.token,
    accessToken: webToken.token,
    expires: webToken.expirationDate,
    refreshTokenExpires: refreshToken.expiresIn,
  });

  if (result.status === HttpStatusCode.Unauthorized) {
    toast.error('Usuário ou senha inválidos.');
  }

  if (result.status === HttpStatusCode.BadRequest) {
    toast.error('Houve um erro ao tentar efetuar o login.\n Entre em contato com um administrador.');
  }

  if (result.status === HttpStatusCode.OK) {
    toast.success(`Bem vindo, ${user?.name}`);
  }

  return true;
};

export const logout = async (): Promise<void> => {
  removeAuthData()
}
