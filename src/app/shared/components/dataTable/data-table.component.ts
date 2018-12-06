import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() dataModel;
  @HostBinding('class.text_center') @Input() isTextCenter: boolean;

  constructor() { }

  ngOnInit() {
  }

}
