// Angular
import { Component, OnInit } from '@angular/core';
// RXJS
import { Subscription } from 'rxjs';
// Services
import { StudioEmployeeDetailService } from './studio-employee-detail.service';

@Component({
  selector: 'app-studio-employee-details',
  templateUrl: './studio-employee-details.component.html',
  styleUrls: ['./studio-employee-details.component.css']
})
export class StudioEmployeeDetailsComponent implements OnInit {
  // Subscriptions
  private subscriptions: Subscription[] = [];

  // Employee Data
  employeeData: any;

  constructor(
    private employeeDatailService: StudioEmployeeDetailService
  ) { }

  ngOnInit(): void {
    // Get Current Employee
    this.getCurrentEmployee();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }

  /**
 * This method create request to get Current Salon Employee By ID
 */
  getCurrentEmployee() {
    const employeeSubscription = this.employeeDatailService.getEmployeeById().subscribe((response: any) => {
      this.employeeData = response;
    });
    this.subscriptions.push(employeeSubscription);
  }
}
