import { Component } from '@angular/core';

import { AuthService } from '../../shared/services/auth.service';
import { NgForm } from '@angular/forms';
import { ToastErrorSettings } from '../../shared/config/configToastError.model';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  public user: User;
  userUnique = false;
  errorUsuario = false;
  errorCorreo = false;
  errorPassword = false;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
    this.user = new User('', '', '', '', 0);
  }

  onSignin(form: NgForm) {
    this.user.username = form.value.usuario;
    this.user.email = form.value.correo;
    this.user.password = form.value.password;
    this.user.passwordRepeated = form.value.password_rep;
    this.user.birthdate = new Date(form.value.fecha_nac).getTime();

    this.errorUsuario = false;
    this.errorCorreo = false;
    this.errorPassword = false;

    if (this.user.username.length === 0) {
      this.errorUsuario = true;
      this.toastr.error('Introduce usuario', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
    } else if (this.user.email.length === 0) {
      this.errorCorreo = true;
      this.toastr.error('Introduce correo', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
    } else if (!this.checkEmail(this.user.email)) {
      this.errorCorreo = true;
      this.toastr.error('Correo no válido', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
    } else if (this.user.password.length === 0 || this.user.passwordRepeated.length === 0) {
      this.errorPassword = true;
      this.toastr.error('Introduce contraseñas', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
    } else if (this.user.password !== this.user.passwordRepeated) {
      this.errorPassword = true;
      this.toastr.error('Las contraseñas no coinciden', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
    } else {
      this.errorInputs(false);
      this.authService.registerUser(this.user).subscribe(
        resp => {
          if (resp) {
            if (resp.status === 201) {
              this.toastr.success('Bienvenido ' + this.user.username, 'Registrado correctamente', ToastErrorSettings.TOAST_ERROR_SETINGS);
              this.router.navigate(['/login']);
            }
          } else {
            this.toastr.error('Error al registrar usuario', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
          }
        },
        error => {
          if (error.status === 400) {
            this.toastr.error('Error en los datos enviados', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
          } else if (error.status === 409) {
            this.toastr.error('Usuario ya en uso', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
          } else if (error.status === 500) {
            this.toastr.error('Error, contacte con el administrador del sistema.', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
          }
          this.toastr.error('Error al registrar usuario', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
        }
      );
    }
  }

  errorInputs(state) {
    this.errorUsuario = state;
    this.errorCorreo = state;
    this.errorPassword = state;
  }

  checkUsername(form: NgForm) {
    this.authService.getUser(form.value.usuario).subscribe(
      resp => {
        this.userUnique = false;
        this.toastr.error('Usuario ya en uso!', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
      },
      error => {
        if (error.status === 404) {
          this.toastr.success('Usuario libre!', 'Correcto', ToastErrorSettings.TOAST_ERROR_SETINGS);
          this.userUnique = true;
        } else {
          this.userUnique = false;
          this.toastr.error('Error al comprobar usuario.', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
        }
      }
    );
  }

  checkEmail(valor) {
    const reg = /(^[a-zA-Z0-9._-]{1,30})@([a-zA-Z0-9.-]{1,30}$)/;
    return reg.test(valor);
  }

}
