import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
  // Status Configurations
  statusList: string[] = ['нов', 'потвърден', 'в ход', 'отказан', 'завършен'];
  isStatusConfirmed: boolean = true;
  initStatus: boolean = true;
  initStatusFallBack: boolean = false;
  isServiceHourStart = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleStatusConfirmed(): void {
    this.isStatusConfirmed = !this.isStatusConfirmed;
    this.initStatus = false;
    this.initStatusFallBack = this.isStatusConfirmed;
  }
}
