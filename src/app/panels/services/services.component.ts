import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  dataClases = {
    headValues: ['Horas/semana', 'Socio', 'No Socio'],
    content: [
      {
        nameRow: '1',
        infoRow: ['50€', '60€']
      },
      {
        nameRow: '2',
        infoRow: ['70€', '80€']
      },
      {
        nameRow: '3',
        infoRow: ['90€', '100€']
      }
    ]
  };

  dataCompeticion = {
    headValues: ['Horas/semana', 'Socio', 'No Socio'],
    content: [
      {
        nameRow: '1',
        infoRow: ['150€', '160€']
      },
      {
        nameRow: '2',
        infoRow: ['170€', '180€']
      },
      {
        nameRow: '3',
        infoRow: ['190€', '200€']
      }
    ]
  };

  dataPista = {
    headValues: ['Horas', 'Socio', 'No Socio'],
    content: [
      {
        nameRow: '1',
        infoRow: ['5€', '7€']
      },
      {
        nameRow: '2',
        infoRow: ['7€', '10€']
      },
      {
        nameRow: '3',
        infoRow: ['10€', '12€']
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
