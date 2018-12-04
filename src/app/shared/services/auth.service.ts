import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseurl = 'http://fenw.etsisi.upm.es:5555';
  private modeLogin = false;
  private modeLoginChange: Subject<boolean> = new Subject();

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  doLogin(username, password) {
    return this.http.get(this.baseurl + '/users/login?username=' + username + '&password=' + password, {observe: 'response'});
  }

  isLogin() {
    const token = sessionStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  doLogout() {
    sessionStorage.removeItem('token');
    this.changeMode();
  }

  getChangeModeObservable() {
    return this.modeLoginChange.asObservable();
  }

  changeMode() {
    this.modeLogin = this.isLogin();
    this.modeLoginChange.next(this.modeLogin);
  }

  getUser(username: string) {
    return this.http.get(this.baseurl + '/users/' + username);
  }

  registerUser(user: User) {
    return this.http.post(this.baseurl + '/users', user, {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response'
    });
  }
}
