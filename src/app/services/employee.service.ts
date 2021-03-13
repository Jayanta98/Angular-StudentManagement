import { EmployeeLoginStatus , EmployeeLogin , EmployeeStatus} from './../models/employee';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  private base_url: string = 'http://localhost:9090';

  constructor(private http: HttpClient) { }
  login(login: EmployeeLogin): Observable<EmployeeLoginStatus>{
    return this.http.post<any>(this.base_url+'/employee-login',login);
  }

  fetch(employeeId: number): Observable<EmployeeStatus>{
    let url=this.base_url+"/fetch-employee?employeeId="+employeeId;
    return this.http.get<EmployeeStatus>(url);
  }



  logged(){
    return !! localStorage.getItem('employeeID');
  }
}
