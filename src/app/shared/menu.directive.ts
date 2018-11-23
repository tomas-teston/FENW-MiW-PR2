import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMenu]'
})
export class MenuDirective {
  @HostBinding('class.on') isOpen = false;

  @HostListener('click') toogleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }
}
