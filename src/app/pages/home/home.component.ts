import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from "@ngrx/store";
import * as authActions from 'src/app/auth/state/actions/auth.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  authenticationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor(private store$: Store) { }

  ngOnInit(): void { }

  onSubmit() {
    console.log('Test: Submit button clicked');
    this.store$.dispatch(authActions.Login({ params: this.authenticationForm.value }));
  }

  watchValue(): void {
    console.log(this.authenticationForm.value);
  }
}
