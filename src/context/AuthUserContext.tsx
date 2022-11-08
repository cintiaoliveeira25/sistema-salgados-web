/* eslint-disable no-unused-vars */
import React, { createContext, useCallback, useState } from 'react'
import { IUser } from '../models/user'

export interface IUserContext {
  authenticated: boolean
  user?: IUser
  handleSetUserContext(user: IUser | undefined): void
}

interface IProps {
  children: React.ReactNode
}

export const AuthUserContext = createContext<IUserContext>({} as IUserContext)

export const AuthUserProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser | undefined>()
  const [authenticated, setAuthenticated] = useState<boolean>(!!user)

  const handleSetUserContext = useCallback((_user: IUser | undefined) => {
    setAuthenticated(!!_user)
    setUser(_user)
  }, [])

  return (
    <AuthUserContext.Provider
      value={{
        authenticated,
        user,
        handleSetUserContext: handleSetUserContext
      }}
    >
      {children}
    </AuthUserContext.Provider>
  )
}
