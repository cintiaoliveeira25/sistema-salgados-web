export interface IConfig {
  baseURL: string
  timeout: number
  timeoutErrorMessage: string
  MAX_CONTENT_SIZE: number
  REDIRECT_URL: string
}

export const config: IConfig = {
  baseURL: 'http://localhost:5000/api/',
  timeout: 30000,
  timeoutErrorMessage: '',
  MAX_CONTENT_SIZE: 10 * 1024 * 1024,
  REDIRECT_URL: 'http://localhost:3000/authenticate'
}