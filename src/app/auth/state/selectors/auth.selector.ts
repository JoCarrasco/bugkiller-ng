import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CORE_STATE } from "src/app/core/static";
import { IAuthState } from "../../models/auth.model";
import { IAuthError } from "../../models/error.model";

export const selectAuth = createFeatureSelector<IAuthState>('auth');

export const getAuthError = createSelector(
  selectAuth,
  state => getError(state.callState)
);

function getError(callState: CORE_STATE | IAuthError): string | null {
  console.log(callState);
  const callStateCopy = <unknown>callState as IAuthError;
  console.log(callStateCopy);
  if (callStateCopy.code !== undefined) { 
    console.log('IS ERROR');
    return callStateCopy.message;
  } 
  return null;
  // return null;
}
