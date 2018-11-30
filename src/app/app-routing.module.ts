import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './shared/services/auth-guard.service';
import { AuthGuardServiceNegative as AuthGuardNegative } from './shared/services/auth-guard-negative.service';

import { HomeComponent } from './core/home/home.component';
import { ServicesComponent } from './panels/services/services.component';
import { InstalacionesComponent } from './panels/instalaciones/instalaciones.component';
import { ReservasComponent } from './panels/reservas/reservas.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { SigninComponent } from './auth/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'services',
    component: ServicesComponent,
    pathMatch: 'full'
  },
  {
    path: 'instalaciones',
    component: InstalacionesComponent,
    pathMatch: 'full'
  },
  {
    path: 'reservas',
    component: ReservasComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: {
      url: ['login'],
      titleMessage: 'Login requerido',
      message: 'Para reservar necesitas estar logeado'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardNegative],
    data: {
      url: ['/']
    }
  },
  {
    path: 'logout',
    component: LogoutComponent,
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardNegative],
    data: {
      url: ['/']
    }
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
