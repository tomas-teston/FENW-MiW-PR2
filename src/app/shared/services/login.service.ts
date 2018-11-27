import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
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
    this.modeLogin = !this.modeLogin;
    this.modeLoginChange.next(this.modeLogin);
  }
}
