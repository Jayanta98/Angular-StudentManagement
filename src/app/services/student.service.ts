import { RegistrationStatus } from './../models/registration-status';
import { StudentList, StudentRegister, StudentsCount } from './../models/student';
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

  fetchStudents():Observable<StudentList>{
    let url="http://localhost:9090/student-list";
    return this.http.get<StudentList>(url);
  }

  fetchClass11Count():Observable<StudentsCount>{
    let url="http://localhost:9090/class-11-count";
    return this.http.get<StudentsCount>(url);
  }

  fetchClass12Count():Observable<StudentsCount>{
    let url="http://localhost:9090/class-12-count";
    return this.http.get<StudentsCount>(url);
  }

  fetchClassTargetCount():Observable<StudentsCount>{
    let url="http://localhost:9090/class-Target-count";
    return this.http.get<StudentsCount>(url);
  }

  fetchCount():Observable<StudentsCount>{
    let url="http://localhost:9090/student-count";
    return this.http.get<StudentsCount>(url);
  }



}
