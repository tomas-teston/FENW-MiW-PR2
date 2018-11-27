import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseurl = 'http://fenw.etsisi.upm.es:5555';
  private modeLogin = false;
  private modeLoginChange: Subject<boolean> = new Subject();

  constructor(private http: HttpClient) { }

  doLogin(username, password) {
    return this.http.get(this.baseurl + '/users/login?username=' + username + '&password=' + password, {observe: 'response'});
  }

  isLogin() {
    return (sessionStorage.getItem('token') !== null);
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
    // this.modeLoginChange.emit(this.isLogin());
  }
}
