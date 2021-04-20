import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAuthState } from '../../models/auth.model';
import * as authActions from '../../state/actions/auth.actions';
import { getAuthError } from '../../state/selectors/auth.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage$: Observable<string>;
  authenticationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private store$: Store<IAuthState>) { }

  ngOnInit(): void {
    this.errorMessage$ = this.store$.select(getAuthError);
  }

  onSubmit() {
    this.store$.dispatch(authActions.Login({ params: this.authenticationForm.value }));
  }
}
