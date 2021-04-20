import { CORE_STATE } from "src/app/core/static";

export interface IUserLoginForm {
  email: string;
  password: string;
}

export interface IUserRegisterForm {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  email: string;
  name: string;
}

export interface IUserState {
  data: IUser;
  status: CORE_STATE
}
