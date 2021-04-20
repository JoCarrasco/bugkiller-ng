import { CORE_STATE as status } from "src/app/core/static";
import { Action, on, createReducer } from "@ngrx/store";
import { IAuthState } from "../../models/auth.model";
import * as AppState from '../../../core/state/app.state';
import * as authActions from "../actions/auth.actions";

export interface AuthState extends AppState.State {
  auth: IAuthState;
}

const initalAuthState: IAuthState = {
  callState: status.UNINITIALIZED,
  result: null
}

export const auth = createReducer<IAuthState>(
  initalAuthState,
  on(authActions.Login, (state) => {
    return {
      ...state,
      callState: status.LOADING
    }
  }),
  on(authActions.LoginFailure, (state, action) => {
    console.log(action);
    return {
      ...state,
      callState: action.error
    }
  }),
  on(authActions.LoginSuccess, (state, action) => {
    return {
      ...state,
      result: action.params,
      callState: status.LOADED
    }
  })
);

export function authReducer(state: IAuthState | undefined, action: Action) {
  return auth(state, action);
}
