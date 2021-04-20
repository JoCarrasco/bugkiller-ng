import { createAction, props } from "@ngrx/store";
import { IAuthError } from "../../models/error.model";
import { IUser, IUserLoginForm } from "../../models/user.model";

const TYPE = '[Auth]';

export const Login = createAction(`${TYPE} Login`, props<{ params: IUserLoginForm }>());
export const LoginFailure = createAction(`${TYPE} Login Failure`, props<{ error: IAuthError }>());
export const LoginSuccess = createAction(`${TYPE} Login Success`, props<{ params: IUser }>());