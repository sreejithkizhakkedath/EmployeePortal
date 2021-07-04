import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  employeeList: any;

  ngOnInit() {
    this.service.getEmployeeList().subscribe((resp: any) => {
      console.log(resp);
      this.employeeList = resp;
    });
  }

}
