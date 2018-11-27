import {Component, OnInit} from '@angular/core';
import {LoginService} from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  sideBarIsOpened: boolean;

  constructor(private loginService: LoginService) {}

  toggleSideBar() {
    this.sideBarIsOpened = !this.sideBarIsOpened;
  }

  ngOnInit() {}
}
