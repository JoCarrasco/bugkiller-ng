import { userReducer } from './user.reducer';
import { ActionReducerMap } from "@ngrx/store";
import { authReducer, AuthState } from "./auth.reducer";

export const AuthReducers: ActionReducerMap<AuthState> = {
  user: userReducer,
  auth: authReducer
};
