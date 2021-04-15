import { CORE_STATUSES as Statuses } from "src/app/core/static";

export interface IUserAuthenticationForm {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IUserState {
  data: IUser;
  status: Statuses
}
