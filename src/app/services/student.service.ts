import { RegistrationStatus } from './../models/registration-status';
import { StudentList, StudentRegister } from './../models/student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  register(student: StudentRegister) :Observable<RegistrationStatus>{
    return this.http.post<any>('http://localhost:9090/register',student);
  }

  fetchStudents(employeeId: any):Observable<StudentList>{
    let url="http://localhost:9090/student-list?employeeId="+employeeId;
    return this.http.get<StudentList>(url);
  }

}
