import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSliderbar]'
})
export class SliderbarDirective {
  @HostBinding('class.on') isOpen = false;

  @HostListener('click') toogleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }
}
