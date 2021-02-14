import { EmployeeLoginStatus } from './../models/employee-login-status';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeeLogin } from '../models/employee-login';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  login(login: EmployeeLogin): Observable<EmployeeLoginStatus>{
    return this.http.post<any>('http://localhost:9090/employee-login',login);
  }
}
