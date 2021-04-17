import { createAction, props } from "@ngrx/store";
import { IUser } from "../../models/user.model";

const TYPE = '[USER]';

export const GetProfile = createAction(`${TYPE} Get Profile`);
export const SetUser = createAction(`${TYPE} Set User`, props<{ user: IUser }>());
export const LoadingUser = createAction(`${TYPE} Loading User`);
export const ResetUser = createAction(`${TYPE} Reset User`);
