import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { ReservesService } from '../../../shared/services/reserves.service';
import { ToastErrorSettings } from '../../../shared/config/configToastError.model';
import { ToastrService } from 'ngx-toastr';
import { Reservation } from '../../../shared/models/reservation.model';
import {DataTableModel} from '../../../shared/models/dataTable.model';
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin-reservas',
  templateUrl: './admin-reservas.component.html',
  styleUrls: ['./admin-reservas.component.css']
})
export class AdminReservasComponent implements OnInit {
  @Input() dateToISO: number;
  @Output() back: EventEmitter<null> = new EventEmitter();
  dateConvert: Date;

  allReservationsAllUsers: Reservation[] = [];
  myReservations: Reservation[] = [];

  myReservesDataTable: DataTableModel = new DataTableModel(['', 'Pista', 'Hora'], []);
  pista1State: DataTableModel = new DataTableModel(['', 'Hora'], []);
  pista2State: DataTableModel = new DataTableModel(['', 'Hora'], []);
  pista3State: DataTableModel = new DataTableModel(['', 'Hora'], []);
  pista4State: DataTableModel = new DataTableModel(['', 'Hora'], []);

  reserveForm: FormGroup;
  pistas = ['1', '2', '3', '4'];
  horas = [];

  constructor(private reservesService: ReservesService, private toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit() {
    this.dateConvert = new Date(this.dateToISO);
    debugger;
    this.reserveForm = new FormGroup({
      pista: new FormControl(),
      hora: new FormControl()
    });
    this.reserveForm = this.fb.group({
      pista: [this.pistas[0]],
      hora: [this.horas[0]]
    });
    // ----
    if (this.dateToISO === undefined) {
      this.back.emit();
    } else {
      this.getAllReservationsByLogedUser();
      this.getAllReservationsByAllUsersInDate();
    }
  }

  getAllReservationsByLogedUser() {
    this.reservesService.getAllReservationsByLogedUser().subscribe(
      resp => {
        if (resp) {
          resp.body.forEach((elem) => {
            this.myReservations.push(elem);
          });
          this.parseMyReserveToDataTable(this.myReservations);
        } else {
          this.toastr.error('Error al buscar sus reservas.', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
        }
      },
      error => {
        this.toastr.error('Error al buscar sus reservas.', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
      }
    );
  }

  getAllReservationsByAllUsersInDate() {
    this.reservesService.getAllReservationsByAllUsersInDate(this.dateToISO).subscribe(
      resp => {
        if (resp) {
          resp.body.forEach((elem) => {
            this.allReservationsAllUsers.push(elem);
          });
          this.parseAllReservesByAllUsers(this.allReservationsAllUsers);
        } else {
          this.toastr.error('Error al buscar sus reservas.', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
        }
      },
      error => {
        this.toastr.error('Error al buscar sus reservas.', 'Error', ToastErrorSettings.TOAST_ERROR_SETINGS);
      }
    );
  }

  parseAllReservesByAllUsers(reservations: Reservation[]) {
    this.allReservationsAllUsers.forEach((reserve) => {
      if (reserve.courtId === 1) {
        this.pista1State.content.push({
          nameRow: '',
          infoRow: [reserve.rsvtime]
        });
      } else if (reserve.courtId === 2) {
        this.pista2State.content.push({
          nameRow: '',
          infoRow: [reserve.rsvtime]
        });
      } else if (reserve.courtId === 3) {
        this.pista3State.content.push({
          nameRow: '',
          infoRow: [reserve.rsvtime]
        });
      } else if (reserve.courtId === 4) {
        this.pista4State.content.push({
          nameRow: '',
          infoRow: [reserve.rsvtime]
        });
      }
    });
    this.loadHours(this.reserveForm.value.pista);
  }

  parseMyReserveToDataTable(reservations: Reservation[]) {
    this.myReservations.forEach(reserve => {
      this.myReservesDataTable.content.push({
        nameRow: '',
        infoRow: [reserve.courtId, reserve.rsvtime]
      });
    });
  }

  loadHours(pista: string) {
    this.horas = [];
    for (let i = 10; i < 23; i++) {
      this.horas.push(i.toString() + ':00');
    }
    this.allReservationsAllUsers.forEach((reservation) => {
      if (reservation.courtId === Number(pista)) {
        this.horas.splice(this.horas.indexOf(reservation.rsvtime), 1);
      }
    });
    this.reserveForm.controls['hora'].patchValue(this.horas[0]);
  }

  goBack() {
    this.back.emit();
  }

  changePista(value) {
    this.loadHours(value);
  }

  onReserve() {
    debugger;
  }

  printDate() {
    const today = new Date(this.dateToISO);
    let dd: string = today.getDate().toString();
    let mm = (today.getMonth() + 1).toString();
    const yyyy = today.getFullYear().toString();

    if (today.getDate() < 10) {
      dd = '0' + dd;
    }

    if((today.getMonth() + 1) < 10) {
      mm = '0' + mm;
    }

    return (mm + '/' + dd + '/' + yyyy);
  }


}
