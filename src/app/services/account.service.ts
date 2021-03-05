import { AccountDto, AccountDtoStatus, AccountListStatus } from './../models/account';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  addTransaction(accounttDto: AccountDto) :Observable<AccountDtoStatus>{
    return this.http.post<any>('http://localhost:9090/add-transaction',accounttDto);
  }

  updateTransaction(accounttDto: AccountDto) :Observable<AccountDtoStatus>{
    return this.http.post<any>('http://localhost:9090/update-transaction',accounttDto);
  }

  deleteTransaction(transactionId: number): Observable<Status>{
    let url="http://localhost:9090/delete-transaction?transactionId="+transactionId;
    return this.http.get<Status>(url);
  }

  getTransactionsWithRollNo(rollNo: number): Observable<AccountListStatus>{
    let url="http://localhost:9090/get-transactions-with-rollNo?rollNo="+rollNo;
    return this.http.get<AccountListStatus>(url);
  }

  getTransaction(transactionId: number): Observable<AccountDtoStatus>{
    let url="http://localhost:9090/get-transaction?rollNo="+transactionId;
    return this.http.get<AccountDtoStatus>(url);
  }

  getTransactionsWithDates(fromDate: Date, toDate: Date): Observable<AccountListStatus>{
    let url="http://localhost:9090/get-transactions-with-dates?fromDate="+fromDate+"&toDate="+toDate;
    return this.http.get<AccountListStatus>(url);
  }

  
}
