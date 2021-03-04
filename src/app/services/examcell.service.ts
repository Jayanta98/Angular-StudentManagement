import { ResultListDto } from './../models/examcell';
//import { ResultsDto } from './../models/examcell';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from './../models/status';
@Injectable({
  providedIn: 'root'
})
export class ExamcellService {

  constructor(private http: HttpClient) { }
  upload(formData: FormData): Observable<Status>{
    return this.http.post<any>('http://localhost:9090/results-upload',formData);
  }

  fetchByRollNo(rollNo: number): Observable<ResultListDto>{
    let url="http://localhost:9090/fetch-result-rollno?rollNo="+rollNo;
    return this.http.get<ResultListDto>(url);
  }

  fetchByTestCode(testCode: string): Observable<ResultListDto>{
    let url="http://localhost:9090/fetch-result-testcode?testCode="+testCode;
    return this.http.get<ResultListDto>(url);
  }
}
