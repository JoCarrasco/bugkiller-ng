import { IUserState } from "../../models/user.model";
import { userReducer } from './user.reducer';
import { ActionReducerMap } from "@ngrx/store";

interface IUserAppState {
  user: IUserState
}

export const userReducers: ActionReducerMap<IUserAppState> = {
  user: userReducer
};
