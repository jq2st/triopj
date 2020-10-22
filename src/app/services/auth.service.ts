import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  get token() {
    return ''
  }

  login(user) {
    return this.http.post('', user)
  }

  logout() {

  }

  isAuth() {
    return !!this.token
  }

  private setToken() {

  }

}
