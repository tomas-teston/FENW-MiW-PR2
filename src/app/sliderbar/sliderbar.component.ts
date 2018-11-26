import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sliderbar',
  templateUrl: './sliderbar.component.html',
  styleUrls: ['./sliderbar.component.css']
})
export class SliderbarComponent {
  @Input() isOpen: boolean;
  @Output() changeActiveEvent: EventEmitter<null> = new EventEmitter();

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
      urlLink: '/',
      classTab: 'tabReservar',
      name: 'panelReservas',
      classIcon: 'far fa-calendar-alt',
      labelText: 'Reservar',
      show: true
    },
    {
      urlLink: '/',
      classTab: 'tabLogin',
      name: 'panelLogin',
      classIcon: 'fa fa-user',
      labelText: 'Login',
      show: true
    },
    {
      urlLink: '/',
      classTab: 'tabLogout',
      name: 'panelUnlogin',
      classIcon: 'fa fa-power-off',
      labelText: 'Logout',
      show: false
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  getToggled() {
    return this.isOpen;
  }

}
