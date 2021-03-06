import { Action, createReducer, on } from "@ngrx/store";
import { CORE_STATE as statuses } from "src/app/core/static";
import { AUTH_USER_INITIAL_STATE as userInitialState } from "../static/constants";
import * as userActions from "../actions/user.actions";
import { IUserState } from "../../models/user.model";

const user = createReducer(
  userInitialState,
  on(userActions.SetUser, (state, payload) => {
    return {
      ...state,
      date: payload.user,
      status: statuses.LOADED
    };
  }),
  on(userActions.LoadingUser, (state) => {
    return {
      ...state,
      data: null,
      status: statuses.LOADING
    }
  }),
  on(userActions.ResetUser, (state) => {
    return {
      ...state,
      data: null,
      status: statuses.UNINITIALIZED
    }
  })
);

export function userReducer(state: IUserState | undefined, action: Action) {
  return user(state, action);
}
