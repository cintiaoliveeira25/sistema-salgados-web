import { DateTime } from 'luxon';
import { IAuthData } from '../../models/authentication';
import { deleteAllData, getData, saveData } from './utils';

export const saveAuthData = (authData: IAuthData): void => {
  const json = JSON.stringify(authData);
  saveData('access_data', json);
};

export const removeAuthData = (): void => deleteAllData();

export const getAuthData = (): IAuthData => getData<IAuthData>('access_data');

export const hasTokenExpired = (): boolean => {
  const token = getAuthData()

  if (!token || !token.expires) {
    return true
  }
  const tokenDate = DateTime.fromISO(token.expires)
  const utcDate = DateTime.utc()
  const hasExpired =
    tokenDate.minus({ seconds: 15 }) <= utcDate || !token?.accessToken
  return hasExpired
};