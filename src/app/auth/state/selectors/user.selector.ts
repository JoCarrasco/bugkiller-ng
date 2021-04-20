import { CORE_STATE as statuses } from "src/app/core/static";
import { IUserState } from "../../models/user.model";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const userState = createFeatureSelector<IUserState>('user');

export const isUserLoading = createSelector(
  userState,
  (state: IUserState) => state.status === statuses.LOADING
);

export const isUnathorized = createSelector(
  userState,
  (state: IUserState) => state.status === statuses.LOADED
)