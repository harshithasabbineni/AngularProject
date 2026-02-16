import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './employee.html',
  styleUrls: ['./employee.css']
})
export class EmployeeComponent {

  employees: any[] = [];

  employee = {
    id: 0,
    name: '',
    email: '',
    salary: ''
  };

  isEdit = false;

  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.empService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  submit() {

    if (this.isEdit) {
      this.empService.updateEmployee(this.employee)
        .subscribe(() => {
          this.getAllEmployees();
          this.resetForm();
        });

    } else {
      this.empService.addEmployee(this.employee)
        .subscribe(() => {
          this.getAllEmployees();
          this.resetForm();
        });
    }
  }

  edit(emp: any) {
    this.employee = { ...emp };
    this.isEdit = true;
  }

  delete(id: number) {

    if (confirm('Are you sure?')) {
      this.empService.deleteEmployee(id)
        .subscribe(() => {
          this.getAllEmployees();
        });
    }
  }

  resetForm() {
    this.employee = {
      id: 0,
      name: '',
      email: '',
      salary: ''
    };
    this.isEdit = false;
  }

}
