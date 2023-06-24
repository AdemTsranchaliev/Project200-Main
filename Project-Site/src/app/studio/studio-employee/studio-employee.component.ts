// Angular
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// RXJS
import { Subscription } from 'rxjs';
// Services
import { StudioEmployeeService } from './studio-employee.service';

@Component({
  selector: 'app-studio-employee',
  templateUrl: './studio-employee.component.html',
  styleUrls: ['./studio-employee.component.css']
})
export class StudioEmployeeComponent implements OnInit, AfterViewInit {
  // Subscriptions
  private subscriptions: Subscription[] = [];

  // Displayed Columns
  displayedColumns: string[] = ['id', 'name', 'role'];

  // Employees Data
  employeesDataSource = new MatTableDataSource();

  // Paginator
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private employeeService: StudioEmployeeService
  ) { }

  ngOnInit(): void {
    // Get All Employees
    this.getAllEmployees();
  }

  ngAfterViewInit() {
    // Pagination
    this.employeesDataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }

  /**
 * This method create request to get all Salon Employees
 */
  getAllEmployees() {
    const employeesSubscription = this.employeeService.getEmployees().subscribe((response: any) => {
      this.employeesDataSource.data = response;
    });
    this.subscriptions.push(employeesSubscription);
  }
}
