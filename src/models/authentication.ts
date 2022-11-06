import { DateTime } from 'luxon'
import { IUser } from './user'

export interface IAuthData {
  user?: IUser
  refreshToken?: string
  accessToken?: string
  webToken?: string
  expires?: string
  refreshTokenExpires: DateTime
}

export interface IWebToken {
  token: string
  createdAt: string
  expirationDate: string
}

export interface IRefreshToken {
  refreshTokenId: string
  token: string
  expiresIn: DateTime
  created: DateTime
}

export interface IAuthenticatedUser {
  user: IUser
  webToken: IWebToken
  refreshToken: IRefreshToken
}