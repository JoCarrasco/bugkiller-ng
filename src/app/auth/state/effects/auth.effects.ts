import { Injectable } from "@angular/core";
import {throwError} from "rxjs";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as authActions from '../actions/auth.actions';
import * as userActions from '../actions/user.actions';
import { AuthService } from "../../services/auth.service";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.Login),
    tap(() => this.store$.dispatch(userActions.LoadingUser())),
    switchMap(action => this.authService.login(action.params).pipe(
      tap(token => {
        localStorage.setItem('accessToken', JSON.stringify(token));
      }),
      map(() => userActions.GetProfile()),
      catchError(error => throwError(error))
    )
  )))

  constructor(private store$: Store, private authService: AuthService, private actions$: Actions) {

  }
}