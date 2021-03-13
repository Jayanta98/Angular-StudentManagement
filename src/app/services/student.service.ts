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

  
  private base_url: string = 'http://localhost:9090';

  register(student: StudentRegister): Observable<RegistrationStatus> {
    return this.http.post<any>(this.base_url+'/register', student);
  }

  updateStudent(student: StudentRegister): Observable<RegistrationStatus> {
    return this.http.post<any>(this.base_url+'/update-student', student);
  }
  updateStudentPic(formData: FormData): Observable<RegistrationStatus> {
    return this.http.post<any>(this.base_url+'/update-student-pic',formData);
  }

  fetchStudents(): Observable<StudentListDto> {
    let url = this.base_url+"/student-list";
    return this.http.get<StudentListDto>(url);
  }

  fetchClassCount(classs: string):Observable<StudentsCount>{
     let url=this.base_url+"/class-count?classs="+classs;
     return this.http.get<StudentsCount>(url);
   }

  fetchCount(): Observable<StudentsCount> {
    try{let url = this.base_url+"/student-count";
    return this.http.get<StudentsCount>(url);}
    catch(e){
      console.clear()
    }
  }

  fetchStudent(referenceNo: number): Observable<StudentDto> {
    let url = this.base_url+"/get-student?referenceNo=" + referenceNo;
    return this.http.get<StudentDto>(url);
  }

  getStudentByRollNo(rollNo: number): Observable<StudentDto>{
    let url = this.base_url+"/get-student-with-rollNo?rollNo=" + rollNo;
    return this.http.get<StudentDto>(url);
  }
}