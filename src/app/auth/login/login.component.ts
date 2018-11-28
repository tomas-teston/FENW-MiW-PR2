import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ToastErrorSettings } from '../../shared/config/configToastError.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router, private toastr: ToastrService) { }

  errorUser = false;
  errorPassword = false;

  onLogin(form: NgForm) {
    const usuario = form.value.usuario;
    const password = form.value.password;

    if (usuario.length === 0 || password.length === 0) {
      this.errorInputs(true);
      this.toastr.error('Introduce usuario y contraseña', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
    } else {
      this.loginService.doLogin(usuario, password).subscribe(
        resp => {
          if (resp) {
            sessionStorage.setItem('token', resp.headers.get('Authorization'));
            this.loginService.changeMode();
            this.router.navigate(['/']);
          } else {
            this.toastr.error('Tu usuario y/o contraseña son incorrectos.', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
          }
        },
        error => {
          this.toastr.error('Tu usuario y/o contraseña son incorrectos.', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
        }
      );
    }
  }

  errorInputs(state: boolean) {
    this.errorUser = state;
    this.errorPassword = state;
  }
}
