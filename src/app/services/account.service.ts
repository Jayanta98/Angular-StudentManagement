import { AccountDto, AccountDtoStatus, AccountListStatus } from './../models/account';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private base_url: string = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  addTransaction(accounttDto: AccountDto) :Observable<AccountDtoStatus>{
    return this.http.post<any>(this.base_url+'/add-transaction',accounttDto);
  }

  updateTransaction(accounttDto: AccountDto) :Observable<AccountDtoStatus>{
    return this.http.post<any>(this.base_url+'/update-transaction',accounttDto);
  }

  deleteTransaction(transactionId: number): Observable<Status>{
    let url=this.base_url+"/delete-transaction?transactionId="+transactionId;
    return this.http.get<Status>(url);
  }

  getTransactionsWithRollNo(rollNo: number): Observable<AccountListStatus>{
    let url=this.base_url+"/get-transactions-with-rollNo?rollNo="+rollNo;
    return this.http.get<AccountListStatus>(url);
  }

  getTransaction(transactionId: number): Observable<AccountDtoStatus>{
    let url=this.base_url+"/get-transaction?rollNo="+transactionId;
    return this.http.get<AccountDtoStatus>(url);
  }

  getTransactionsWithDates(fromDate: Date, toDate: Date): Observable<AccountListStatus>{
    let url=this.base_url+"/get-transactions-with-dates?fromDate="+fromDate+"&toDate="+toDate;
    return this.http.get<AccountListStatus>(url);
  }

  
}
