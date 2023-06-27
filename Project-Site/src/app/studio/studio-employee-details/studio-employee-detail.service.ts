import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudioEmployeeDetailService {

  constructor(private http: HttpClient) { }

  getEmployeeById() {
    return this.http.get('assets/API/employees/studio-employee-detail.json');
  }
}
