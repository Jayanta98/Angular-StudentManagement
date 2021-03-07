import { EmployeeStatus } from './models/employee';
import { EmployeeService } from './services/employee.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class AuthgardGuard implements CanActivate {

  constructor(private empService:EmployeeService,private router: Router){}
  emp :EmployeeStatus;
  empID:number;
  empfname:any;




  canActivate() : boolean{

    if(this.empService.logged()){

      this.empID=parseInt(localStorage.getItem("employeeID"),10);
       this.empfname=localStorage.getItem("Name");
      this.empService.fetch(this.empID).subscribe(res=>{
        this.emp=res;
      });
     // alert(this.empID+2)
      if((this.empID===this.emp.employeeId) && (this.empfname==this.emp.name))
      {
         // alert(this.empID+2)
        return true;

      }else{
          this.router.navigate(['/home']);
      }

    }else{
      this.router.navigate(['/home']);
    }

  }



}
