import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { ServicesComponent } from './panels/services/services.component';
import { InstalacionesComponent } from './panels/instalaciones/instalaciones.component';
import { ReservasComponent } from './panels/reservas/reservas.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'services', component: ServicesComponent, pathMatch: 'full'},
  {path: 'instalaciones', component: InstalacionesComponent, pathMatch: 'full'},
  {path: 'reservas', component: ReservasComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'logout', component: LogoutComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
