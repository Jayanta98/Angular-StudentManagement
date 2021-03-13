import { Status } from './../models/status';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor(private http: HttpClient) { }

  
  private base_url: string = 'http://localhost:9090';

  generateOtp(employeeId: number): Observable<Status>{
    let url=this.base_url+"/generateOtp?employeeId="+employeeId;
    return this.http.get<Status>(url);
  }

  validateOtp(employeeId: number, otpnum: number): Observable<Status>{
    let url=this.base_url+"/validateOtp?employeeId="+employeeId+"&otpnum="+otpnum;
    return this.http.get<Status>(url);
  }
}
