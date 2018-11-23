import { NgModule } from '@angular/core';
import { MenuDirective } from './menu.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MenuDirective
  ],
  exports: [
    CommonModule,
    MenuDirective
  ]
})
export class SharedModule {}
