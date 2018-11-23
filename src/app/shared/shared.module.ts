import { NgModule } from '../../../node_modules/@angular/core';
import { SliderbarDirective } from './sliderbar.directive';
import { CommonModule } from '../../../node_modules/@angular/common';

@NgModule({
  declarations: [
    SliderbarDirective
  ],
  exports: [
    CommonModule,
    SliderbarDirective
  ]
})
export class SharedModule {}
