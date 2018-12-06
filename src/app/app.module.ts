import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SliderbarComponent } from './core/sliderbar/sliderbar.component';
import { SharedModule } from './shared/shared.module';
import { ServicesComponent } from './panels/services/services.component';
import { InstalacionesComponent } from './panels/instalaciones/instalaciones.component';
import { ReservasComponent } from './panels/reservas/reservas.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminReservasComponent } from './panels/reservas/admin-reservas/admin-reservas.component';
import { ReservesService } from './shared/services/reserves.service';
import { SigninComponent } from './auth/signin/signin.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { DataTableComponent } from './shared/components/dataTable/data-table.component';

import { AuthService } from './shared/services/auth.service';
import { AuthGuardServiceNegative } from './shared/services/auth-guard-negative.service';
import { AuthGuardService } from './shared/services/auth-guard.service';

// JwT Auth
import { JwtModule } from '@auth0/angular-jwt';

// Toast
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Bootstrap 4 componets
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SliderbarComponent,
    ServicesComponent,
    InstalacionesComponent,
    ReservasComponent,
    LoginComponent,
    LogoutComponent,
    SigninComponent,
    AdminReservasComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    NgbModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return sessionStorage.getItem('token');
        }
      }
    }),
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuardService, AuthGuardServiceNegative, ReservesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
