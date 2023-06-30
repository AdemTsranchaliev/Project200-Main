// Angular
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// RXJS
import { Subscription } from 'rxjs';
// Services
import { StudioEmployeeDetailService } from './studio-employee-detail.service';

@Component({
  selector: 'app-studio-employee-details',
  templateUrl: './studio-employee-details.component.html',
  styleUrls: ['./studio-employee-details.component.css']
})
export class StudioEmployeeDetailsComponent implements OnInit, AfterViewInit {
  // Subscriptions
  private subscriptions: Subscription[] = [];

  // Displayed Columns
  displayedColumns: string[] = ['id', 'from', 'rating'];

  // Employee Data
  employeeDataSource: any;
  employeeReviewsDataSource = new MatTableDataSource();

  // Paginator
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private employeeDatailService: StudioEmployeeDetailService
  ) { }

  ngOnInit(): void {
    // Get Current Employee
    this.getCurrentEmployee();
  }

  ngAfterViewInit() {
    // Pagination
    this.employeeReviewsDataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }

  /**
 * This method create request to get Current Salon Employee By ID
 */
  getCurrentEmployee() {
    const employeeSubscription = this.employeeDatailService.getEmployeeById().subscribe((response: any) => {
      this.employeeDataSource = response;
      this.employeeReviewsDataSource.data = response.reviews
    });
    this.subscriptions.push(employeeSubscription);
  }
}
