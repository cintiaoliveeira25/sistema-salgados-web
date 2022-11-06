export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUser {
  id: number
  name: string
  email: string
}

export interface ISingIn {
  email: string,
  password: string,
}