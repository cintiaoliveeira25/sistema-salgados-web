/* eslint-disable no-unused-vars */
import { useCallback, useContext, useEffect, useState } from 'react'
import { AuthUserContext } from '../context/AuthUserContext'
import { IAuthData } from '../models/authentication'
import { IUser } from '../models/user'
import { getAuthData, saveAuthData } from '../services/localStorage/authentication'

interface IAuthDataContext {
  user?: IUser
  setAuthDataContext(user: IAuthData | null): void
  authenticated: boolean
}

export const useUser = (): IAuthDataContext => {
  const { user, handleSetUserContext, authenticated } = useContext(AuthUserContext);

  const [authDataStringfy, setAuthDataStringfy] = useState<string | null>(JSON.stringify(getAuthData()));

  const handlerSetUserContext = useCallback((authData: IAuthData): void => {
    setAuthDataStringfy(JSON.stringify(authData))
  }, [])

  console.log(authDataStringfy);

  useEffect(() => {
    const authData = authDataStringfy && JSON.parse(authDataStringfy)
    const isAuthenticate = authData && Object.keys(authData).length > 0;

    console.log(authenticated);

    if (isAuthenticate) {
      saveAuthData({ ...authData })
      handleSetUserContext(authData && authData.user)
    }

  }, [authDataStringfy, handleSetUserContext])

  return {
    user,
    setAuthDataContext: handlerSetUserContext,
    authenticated
  }
}
