import { EmployeeService } from './../../services/employee.service';
import { EmployeeLogin } from './../../models/employee-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router ) { }
  message: string;
  error: boolean;

  ngOnInit(): void {
  }

   model: EmployeeLogin = new EmployeeLogin;

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    this.employeeService.login(this.model).subscribe(data => {
      if(data.statusCode === "SUCCESS"){
        //storing the data and navigate
      }
      else{
        this.error = true;
        this.message = data.statusMessage;
      }
    })
  }

}
