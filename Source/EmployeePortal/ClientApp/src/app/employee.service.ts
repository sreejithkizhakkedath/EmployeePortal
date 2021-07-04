import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeeList() {
    return this.http.get<any>('https://localhost:5001/api/Employees')
  }

}
