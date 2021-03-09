import { AccountDto } from './../../models/account';
import { DialogService } from './../../services/dialog.service';
import { AccountService } from './../../services/account.service';
import { AdmissionService } from './../../services/admission.service';
import { Component, OnInit } from '@angular/core';

import { StudentRegister } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { AdmissionDto } from 'src/app/models/admission';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private studentService: StudentService,
    private admissionService: AdmissionService,
    private accountService: AccountService,
    private dialogService: DialogService) { }

  ngOnInit(): void {
  }
  //AccountDto activity
  accountDto: AccountDto = new AccountDto();

  onPaymentSubmit() {
    alert("Payment");
    this.dialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.accountService.addTransaction(this.accountDto).subscribe(data => {
            if (data.statusCode === "SUCCESS") {
              alert(JSON.stringify(data.accountDto))
              //generate receipt with accountDto
            }
            else {
              alert(data.statusMessage)
            }
          })
        }
      });

  }

  rollNo: number
  transactionsList: AccountDto[]
  paymentListRollNo(){

    this.accountService.getTransactionsWithRollNo(this.rollNo).subscribe(data =>{
      if(data.statusCode === "SUCCESS"){
        alert("Transactions Fetch Success")
        this.transactionsList = data.accountDtos
      }
      else{
        alert("Transactions Fetch Failed")
        this.transactionsList.splice(0,this.transactionsList.length)
      }
    })
  }

  fromDate: Date
  toDate: Date
  paymentListDates(){
    this.accountService.getTransactionsWithDates(this.fromDate,this.toDate).subscribe(data => {
      if(data.statusCode === "SUCCESS"){
        alert("Transactions Fetch Success")
        this.transactionsList = data.accountDtos
      }
      else{
        alert("Transactions Fetch Failed")
        this.transactionsList.splice(0,this.transactionsList.length)
      }
    })
  }

  transactionId: number
  fetchTransaction(){
    this.accountService.getTransaction(this.transactionId).subscribe(data => {
      if(data.statusCode === "SUCCESS"){
        alert("Transactions Fetch Success")
        this.transactionsList.splice(0,this.transactionsList.length)
        this.transactionsList.push(data.accountDto)
      }
      else{
        alert("Transactions Fetch Failed")
        this.transactionsList.splice(0,this.transactionsList.length)
      }
    })
  }

  updateAccountDto: AccountDto
  updatePayment(){
    alert("Update payment")
    this.dialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.accountService.updateTransaction(this.updateAccountDto).subscribe(data => {
            if (data.statusCode === "SUCCESS") {
              alert(JSON.stringify(data.accountDto))
              //generate receipt with accountDto
            }
            else {
              alert(data.statusMessage)
            }
          })
        }
      });
  }

  deletePayment(trId){
    alert("Delete Transaction")
    this.dialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.accountService.deleteTransaction(trId).subscribe(data => {
            if (data.statusCode === "SUCCESS") {
              alert("Deletion Success")
              //generate receipt with accountDto
            }
            else {
              alert(data.statusMessage)
            }
          })
        }
      });
  }


}
