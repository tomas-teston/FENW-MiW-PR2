import { Component, OnInit } from '@angular/core';
import {CustomDatepickerI18n} from '../../shared/components/datePicker/CustomDatepickerI18n-service';
import {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';
import {I18n} from '../../shared/components/datePicker/I18n-service';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}]
})
export class ReservasComponent implements OnInit {
  model: NgbDateStruct;
  date: {year: number, month: number};
  minDate: NgbDateStruct;
  dateToISO: number;
  selectedDate = false;

  constructor(private calendar: NgbCalendar) {
    this.selectToday();
  }

  ngOnInit() {
    this.minDate = this.calendar.getToday();
  }

  onReservation() {
    this.dateToISO = new Date(this.model.year, this.model.month - 1, this.model.day).getTime();
    this.selectedDate = true;
  }

  back() {
    this.selectedDate = false;
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
