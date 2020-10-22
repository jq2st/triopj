import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http: HttpClient) { }

  get token() {
    const expDate = new Date(localStorage.getItem('fbd-token-exp'))
    if (new Date() > expDate) {
      this.logout()
      return null
    }
    return localStorage.getItem('fbd-token')
  }

  login(user) {
    user.returnSecureToken = true
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseConfig.apiKey, user)
      .pipe(
        tap(this.setToken)
      )
  }

  logout() {
    this.setToken(null)
  }

  isAuth() {
    return !!this.token
  }

  private setToken(resp) {
    if (resp) {
      const expDate = new Date(new Date().getTime() + +resp.expiresIn * 1000)
      localStorage.setItem('fbd-token', resp.idToken)
      localStorage.setItem('fbd-token-exp', expDate.toString())
    }
    else {
      localStorage.clear()
    }
  }

}
