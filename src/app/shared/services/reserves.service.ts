import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservesService {
  private baseurl = 'http://fenw.etsisi.upm.es:5555/reservations';

  constructor(private http: HttpClient) { }

  getAllReservationsByLogedUser() {
    return this.http.get<Reservation[]>(this.baseurl, {
      observe: 'response',
      headers: new HttpHeaders({'Authorization': sessionStorage.getItem('token')})
    });
  }

  getAllReservationsByAllUsersInDate(DateToIso: number) {
    return this.http.get<Reservation[]>(this.baseurl + '/' + DateToIso, {
      observe: 'response',
      headers: new HttpHeaders({'Authorization': sessionStorage.getItem('token')})
    });
  }
}
