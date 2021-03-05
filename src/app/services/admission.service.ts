import { AdmissionDto, AdmissionStatus, AdmissionDtoStatus } from './../models/admission';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  constructor(private http: HttpClient) { }

  admission(admissionDto: AdmissionDto) :Observable<AdmissionStatus>{
    return this.http.post<any>('http://localhost:9090/admission',admissionDto);
  }

  updateAdmission(admissionDto: AdmissionDto) :Observable<AdmissionStatus>{
    return this.http.post<any>('http://localhost:9090/update-admission',admissionDto);
  }

  deleteAdmission(rollNo: number): Observable<Status>{
    let url="http://localhost:9090/delete-admission?rollNo="+rollNo;
    return this.http.get<Status>(url);
  }

  getAdmission(rollNo: number): Observable<AdmissionDtoStatus>{
    let url="http://localhost:9090/get-admission?rollNo="+rollNo;
    return this.http.get<AdmissionDtoStatus>(url);
  }
}
