import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sliderbar',
  templateUrl: './sliderbar.component.html',
  styleUrls: ['./sliderbar.component.css']
})
export class SliderbarComponent implements OnInit, OnDestroy {
  @Input() isOpen: boolean;
  @Input() modeLogin: false;
  subscription: Subscription;

  data: Array<{urlLink: string, classTab: string, name: string, classIcon: string, labelText: string, show: boolean}> = [
    {
      urlLink: '',
      classTab: 'tabHome',
      name: 'panelHome',
      classIcon: 'fa fa-home',
      labelText: 'Inicio',
      show: true
    },
    {
      urlLink: '/services',
      classTab: 'tabServicios',
      name: 'panelServicios',
      classIcon: 'fas fa-table-tennis',
      labelText: 'Servicios',
      show: true
    },
    {
      urlLink: '/instalaciones',
      classTab: 'tabInstalaciones',
      name: 'panelInstalaciones',
      classIcon: 'far fa-building',
      labelText: 'Instalaciones',
      show: true
    },
    {
      urlLink: '/reservas',
      classTab: 'tabReservar',
      name: 'panelReservas',
      classIcon: 'far fa-calendar-alt',
      labelText: 'Reservar',
      show: true
    },
    {
      urlLink: '/login',
      classTab: 'tabLogin',
      name: 'panelLogin',
      classIcon: 'fa fa-user',
      labelText: 'Login',
      show: true
    },
    {
      urlLink: '/logout',
      classTab: 'tabLogout',
      name: 'panelUnlogin',
      classIcon: 'fa fa-power-off',
      labelText: 'Logout',
      show: false
    }
  ];

  constructor(private loginService: AuthService) {}

  getToggled() {
    return this.isOpen;
  }

  modeLoginEvent() {
    this.data.map((elem) => {
      if (elem.name === 'panelLogin') {
        elem.show = false;
      } else if (elem.name === 'panelUnlogin') {
        elem.show = true;
      }
      return elem;
    });
  }

  modeNoLoginEvent() {
    this.data.map((elem) => {
      if (elem.name === 'panelLogin') {
        elem.show = true;
      } else if (elem.name === 'panelUnlogin') {
        elem.show = false;
      }
      return elem;
    });
  }

  ngOnInit(): void {
    (this.loginService.isLogin()) ? this.modeLoginEvent() : this.modeNoLoginEvent();
    this.subscription = this.loginService.getChangeModeObservable()
      .subscribe(item => (item) ? this.modeLoginEvent() : this.modeNoLoginEvent());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
