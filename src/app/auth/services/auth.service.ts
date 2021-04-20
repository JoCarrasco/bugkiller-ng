import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserLoginForm, IUserRegisterForm } from '../models/user.model';
import { AUTH_API_ENDPOINTS as endpoints } from '../static';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(userAuthForm: IUserLoginForm): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(endpoints.LOGIN, userAuthForm);
  }

  register(userAuthForm: IUserRegisterForm): Observable<any> {
    return this.http.post(endpoints.REGISTER, userAuthForm);
  }
}
