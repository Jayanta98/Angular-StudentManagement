import { EmployeeService } from './../../services/employee.service';
import { EmployeeLogin } from './../../models/employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router ) { }
  message: string;
  error: boolean;
  empId: number;

  ngOnInit(): void {
  }

   model: EmployeeLogin = new EmployeeLogin;

  onSubmit() {
   // alert(JSON.stringify(this.model));
    this.employeeService.login(this.model).subscribe(data => {
     // alert(JSON.stringify(data));
      if(data.statusCode === "SUCCESS"){
        //storing the data and navigate
       localStorage.employeeID=data.employeeId;
        localStorage.setItem('Name',data.name);
        //localStorage.setItem('Password',data.password)

        this.router.navigate(['admin']);
      }
      else{
        this.error = true;
        this.message = data.statusMessage;
      }
    })
  }

}
