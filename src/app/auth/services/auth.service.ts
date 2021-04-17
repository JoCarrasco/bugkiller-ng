import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserAuthenticationForm } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(userAuthForm: IUserAuthenticationForm): Observable<{ token: string }> {
    console.log('Auth service clicked');
    return this.http.post<{ token: string }>('', userAuthForm);
  }
}
