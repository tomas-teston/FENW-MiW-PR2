import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import {ToastErrorSettings} from '../../shared/config/configToastError.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.loginService.doLogout();
    this.router.navigate(['/']);
  }

}
