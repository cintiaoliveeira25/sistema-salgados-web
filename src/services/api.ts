import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { config } from '../config';
import { IAuthenticatedUser } from '../models/authentication';
import { HttpStatusCode } from '../models/status';
import { getAuthData, hasTokenExpired, removeAuthData, saveAuthData } from './localStorage/authentication';

export const api = axios.create(config);

api.interceptors.request.use(async (conf: AxiosRequestConfig | any) => {
  const axiosConf = conf;
  let authData = getAuthData();
  const hasExpired = hasTokenExpired();
  

  if (hasExpired && authData?.refreshToken) {
    try {
      const response = await axios.post(`${config.baseURL}users/refresh`, {
        grantType: 'refresh_token',
        refreshToken: authData?.refreshToken,
      });
      if (response.status === HttpStatusCode.OK) {
        const { refreshToken, webToken, user } = response.data as IAuthenticatedUser;

        saveAuthData({
          user: user,
          refreshToken: refreshToken.token,
          accessToken: webToken.token,
          expires: webToken.expirationDate,
          refreshTokenExpires: refreshToken.expiresIn,
        });

        authData = {
          accessToken: webToken.token,
          expires: webToken.expirationDate,
          refreshTokenExpires: refreshToken.expiresIn,
        };
      }
    } catch (error) {
      removeAuthData();
      return Promise.reject(error);
    }
  }

  axiosConf.headers.Authorization = `Bearer ${authData?.accessToken}`;
  axiosConf.headers['Content-Type'] = 'application/json';
  return axiosConf;
},
(err: AxiosError) => Promise.reject(err),
);

api.interceptors.response.use(
  (response: AxiosResponse<AxiosError>) => response,
  async (err): Promise<Array<any>> => {
    if (err.response.status === 401) {
      location.href = '/login';
    }

    if (err.response.status !== 500) {
      if (err.response.data) {
        const errors = Object.values(err.response.data.errors);
        if (errors.length > 0) {
          return errors.map((errorMsg) =>
            toast.error(Array.isArray(errorMsg) ? errorMsg[0] : errorMsg),
          );
        }
      }
    }
    toast.error('Houve um erro na solicitação');
    return Promise.reject(err);
  },
);
