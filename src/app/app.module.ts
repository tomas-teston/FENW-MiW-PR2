import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SliderbarComponent } from './core/sliderbar/sliderbar.component';
import { SharedModule } from './shared/shared.module';
import { ServicesComponent } from './panels/services/services.component';
import { InstalacionesComponent } from './panels/instalaciones/instalaciones.component';
import { ReservasComponent } from './panels/reservas/reservas.component';
import { LoginComponent } from './auth/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './shared/services/login.service';
import { LogoutComponent } from './auth/logout/logout.component';

// JwT Auth
import { AuthGuardService } from './shared/services/auth-guard.service';
import { JwtModule } from '@auth0/angular-jwt';

// Toast
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


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
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return sessionStorage.getItem('token');
        }
      }
    })
  ],
  providers: [LoginService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
