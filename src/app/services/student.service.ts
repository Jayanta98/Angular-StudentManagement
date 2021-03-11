import { RegistrationStatus } from './../models/registration-status';
import { StudentDto, StudentListDto, StudentRegister, StudentsCount } from './../models/student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  register(student: StudentRegister): Observable<RegistrationStatus> {
    return this.http.post<any>('http://localhost:9090/register', student);
  }

  updateStudent(student: StudentRegister): Observable<RegistrationStatus> {
    return this.http.post<any>('http://localhost:9090/update-student', student);
  }
  updateStudentPic(formData: FormData): Observable<RegistrationStatus> {
    return this.http.post<any>('http://localhost:9090/update-student-pic',formData);
  }

  fetchStudents(): Observable<StudentListDto> {
    let url = "http://localhost:9090/student-list";
    return this.http.get<StudentListDto>(url);
  }

  fetchClassCount(classs: string):Observable<StudentsCount>{
     let url="http://localhost:9090/class-count?classs="+classs;
     return this.http.get<StudentsCount>(url);
   }

  fetchCount(): Observable<StudentsCount> {
    let url = "http://localhost:9090/student-count";
    return this.http.get<StudentsCount>(url);
  }

  fetchStudent(referenceNo: number): Observable<StudentDto> {
    let url = "http://localhost:9090/get-student?referenceNo=" + referenceNo;
    return this.http.get<StudentDto>(url);
  }

  getStudentByRollNo(rollNo: number): Observable<StudentDto>{
    let url = "http://localhost:9090/get-student-with-rollNo?rollNo=" + rollNo;
    return this.http.get<StudentDto>(url);
  }
}