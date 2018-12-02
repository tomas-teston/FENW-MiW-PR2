import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-admin-reservas',
  templateUrl: './admin-reservas.component.html',
  styleUrls: ['./admin-reservas.component.css']
})
export class AdminReservasComponent implements OnInit {
  @Input() dateToISO: number;
  @Output() back: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    this.back.emit();
  }

}
