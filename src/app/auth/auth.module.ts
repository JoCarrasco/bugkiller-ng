import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthReducers } from './state/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/effects/auth.effects';
import { authReducer } from './state/reducers/auth.reducer';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
