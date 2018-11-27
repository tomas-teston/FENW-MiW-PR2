import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router, private toastr: ToastrService) { }

  onLogin(form: NgForm) {
    const usuario = form.value.usuario;
    const password = form.value.password;

    this.loginService.doLogin(usuario, password).subscribe(
      resp => {
        if (resp) {
          console.log(resp.headers.get('Authorization'));
          sessionStorage.setItem('token', resp.headers.get('Authorization'));
          this.loginService.changeMode();
          // this.toastr.success('Hello world!', 'Toastr fun!');
          this.router.navigate(['/']);
        } else {
          console.log('Error');
        }
      },
      error => {
        console.log('Error');
      });
  }
}
