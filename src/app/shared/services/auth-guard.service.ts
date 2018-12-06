import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ToastErrorSettings } from '../config/configToastError.model';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router, private toastr: ToastrService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.auth.isLogin()) {
      this.toastr.info(route.data['titleMessage'], route.data['message'], ToastErrorSettings.TOAST_ERROR_SETINGS);
      this.router.navigate([route.data['url'][0]]);
      return false;
    }
    return true;
  }
}
