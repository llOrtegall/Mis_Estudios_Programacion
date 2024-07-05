import { Dispatch, SetStateAction } from 'react'

export interface IUser {
  username: string;
  email: string;
}

export interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}
