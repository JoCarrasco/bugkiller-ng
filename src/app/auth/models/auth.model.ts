import { CORE_STATE } from "src/app/core/static";
import { IAuthError } from "./error.model";
import { IUser } from "./user.model";

export interface IAuthState {
  result: IUser | null,
  callState: CORE_STATE | IAuthError
}
