import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http: HttpClient) { }

  getBookings() {
    return this.http.get('assets/API/bookings/bookings-list.json');
  }
}
