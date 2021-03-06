import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ToastErrorSettings } from '../../shared/config/configToastError.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  errorUser = false;
  errorPassword = false;

  onLogin(form: NgForm) {
    const usuario = form.value.usuario;
    const password = form.value.password;

    if (usuario.length === 0 || password.length === 0) {
      this.errorInputs(true);
      this.toastr.error('Introduce usuario y contraseña', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
    } else {
      this.errorInputs(false);
      this.authService.doLogin(usuario, password).subscribe(
        resp => {
          if (resp) {
            this.toastr.success('Bienvenido ' + usuario, 'Login correcto', ToastErrorSettings.TOAST_ERROR_SETINGS);
            sessionStorage.setItem('token', resp.headers.get('Authorization'));
            this.authService.changeMode();
            this.router.navigate(['/']);
          } else {
            this.toastr.error('Tu usuario y/o contraseña son incorrectos.', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
          }
        },
        error => {
          if (error.status === 400) {
            this.toastr.error('Introduce usuario y contraseña.', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
          } else if (error.status === 401) {
            this.toastr.error('Usuario y/o contraseña inválidos.', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
          } else if (error.status === 500) {
            this.toastr.error('Pongase en contacto con el administrador del sistema.', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
          }
        }
      );
    }
  }

  errorInputs(state: boolean) {
    this.errorUser = state;
    this.errorPassword = state;
  }
}
