// Angular
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// RXJS
import { Subscription } from 'rxjs';
// Services
import { BookingService } from './booking.service';
// Models
import { Booking } from '../shared/Models/booking.model';


@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.css']
})
export class BookingTableComponent implements OnInit, AfterViewInit {
  // Subscriptions
  private subscriptions: Subscription[] = [];

  displayedColumns: string[] = ['id', 'customerName', 'reservationDate', 'reservationStatus', 'details'];
  // Tab Data Sources
  dataSource = new MatTableDataSource<Booking>();
  newReservations = new MatTableDataSource<Booking>();
  confirmedReservations = new MatTableDataSource<Booking>();
  inProgressReservations = new MatTableDataSource<Booking>();
  completedReservations = new MatTableDataSource<Booking>();
  canceledReservations = new MatTableDataSource<Booking>();

  // Paginator
  @ViewChild('paginator1') paginator1!: MatPaginator;
  @ViewChild('paginator2') paginator2!: MatPaginator;
  @ViewChild('paginator3') paginator3!: MatPaginator;
  @ViewChild('paginator4') paginator4!: MatPaginator;
  @ViewChild('paginator5') paginator5!: MatPaginator;
  @ViewChild('paginator6') paginator6!: MatPaginator;

  constructor(
    private bookingsService: BookingService
  ) { }

  ngOnInit(): void {
    // Get All Bookings Data
    this.getAllBookings();
  }

  ngAfterViewInit() {
    // Pagination
    this.dataSource.paginator = this.paginator1;
    this.newReservations.paginator = this.paginator2;
    this.confirmedReservations.paginator = this.paginator3;
    this.inProgressReservations.paginator = this.paginator4;
    this.completedReservations.paginator = this.paginator5;
    this.canceledReservations.paginator = this.paginator6;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }

  /**
   * This method create request to get all Bookings for Bookings Page
   */
  getAllBookings() {
    const bookingsSubscription = this.bookingsService.getBookings().subscribe((response: any) => {
      this.dataSource.data = response;
      this.setTabs();
    });
    this.subscriptions.push(bookingsSubscription);
  }

  setTabs() {
    this.newReservations.data = this.filterReservations('нов');
    this.confirmedReservations.data = this.filterReservations('потвърден');
    this.inProgressReservations.data = this.filterReservations('в ход');
    this.completedReservations.data = this.filterReservations('завършен');
    this.canceledReservations.data = this.filterReservations('отказан');
  }

  filterReservations(status: string) {
    return this.dataSource.data.filter((reservation) => reservation.reservationStatus === status);
  }

  _setDataSource(indexNumber: any) {

    setTimeout(() => {
      switch (indexNumber) {
        case 0:
          !this.dataSource.paginator ? this.dataSource.paginator = this.paginator1 : null;
          break;
        case 1:
          !this.newReservations.paginator ? this.newReservations.paginator = this.paginator2 : null;
          break;
        case 2:
          !this.confirmedReservations.paginator ? this.confirmedReservations.paginator = this.paginator3 : null;
          break;
        case 3:
          !this.inProgressReservations.paginator ? this.inProgressReservations.paginator = this.paginator4 : null;
          break;
        case 4:
          !this.completedReservations.paginator ? this.newReservations.paginator = this.paginator5 : null;
          break;
        case 5:
          !this.canceledReservations.paginator ? this.newReservations.paginator = this.paginator6 : null;
          break;
      }
    });
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'нов':
        return 'blue';
      case 'потвърден':
        return 'green';
      case 'в ход':
        return 'orange';
      case 'отказан':
        return 'red';
      case 'завършен':
        return 'purple';
      default:
        return '';
    }
  }
}
