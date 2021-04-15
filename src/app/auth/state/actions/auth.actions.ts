import { createAction, props } from "@ngrx/store";
import { ILogin } from "../../models/login.model";

const TYPE = '[AUTH]';

export const Login = createAction(`${TYPE} Login`, props<{params: ILogin}>());
