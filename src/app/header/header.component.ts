import {Component, Input, OnInit} from '@angular/core';
import {SliderbarComponent} from '../sliderbar/sliderbar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() sliderbar: SliderbarComponent;

  constructor() { }

  ngOnInit() {
  }

  toogle() {
    this.sliderbar.toggledSlider();
  }

}
