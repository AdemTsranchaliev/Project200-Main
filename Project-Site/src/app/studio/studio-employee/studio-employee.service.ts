import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudioEmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get('assets/API/employees/studio-employees.json');
  }
}
