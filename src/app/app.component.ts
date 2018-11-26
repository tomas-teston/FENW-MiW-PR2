import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sideBarIsOpened: boolean;

  constructor() {}

  toggleSideBar() {
    this.sideBarIsOpened = !this.sideBarIsOpened;
  }
}
