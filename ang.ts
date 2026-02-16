import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from "./employee/employee";
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [EmployeeComponent,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
   title ='employee-crud';
}
