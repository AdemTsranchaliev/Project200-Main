// Angular
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// RXJS
import { Subscription } from 'rxjs';
// Services
import { BookingsService } from './bookings.service';

export interface Bookings {
  id: number;
  customerName: string;
  reservationDate: string;
  reservationStatus: string;
}

@Component({
  selector: 'app-bookings-table',
  templateUrl: './bookings-table.component.html',
  styleUrls: ['./bookings-table.component.css']
})
export class BookingsTableComponent implements OnInit, AfterViewInit {
  // Subscriptions
  private subscriptions: Subscription[] = [];

  displayedColumns: string[] = ['id', 'customerName', 'reservationDate', 'reservationStatus'];
  // Tab Data Sources
  dataSource = new MatTableDataSource<Bookings>();
  newReservations = new MatTableDataSource<Bookings>();
  confirmedReservations = new MatTableDataSource<Bookings>();
  inProgressReservations = new MatTableDataSource<Bookings>();
  completedReservations = new MatTableDataSource<Bookings>();
  canceledReservations = new MatTableDataSource<Bookings>();

  // Paginator
  @ViewChild('paginator1') paginator1!: MatPaginator;
  @ViewChild('paginator2') paginator2!: MatPaginator;
  @ViewChild('paginator3') paginator3!: MatPaginator;
  @ViewChild('paginator4') paginator4!: MatPaginator;
  @ViewChild('paginator5') paginator5!: MatPaginator;
  @ViewChild('paginator6') paginator6!: MatPaginator;

  constructor(
    private bookingsService: BookingsService
  ) { }

  ngOnInit(): void {
    // Get All Bookings Data
    this.getAllBookings();
  }

  ngAfterViewInit() {
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
    this.newReservations.data = this.filterReservations('new');
    this.confirmedReservations.data = this.filterReservations('confirmed');
    this.inProgressReservations.data = this.filterReservations('inProgress');
    this.completedReservations.data = this.filterReservations('completed');
    this.canceledReservations.data = this.filterReservations('canceled');
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
}