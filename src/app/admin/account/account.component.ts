import { AccountDto } from './../../models/account';
import { DialogService } from './../../services/dialog.service';
import { AccountService } from './../../services/account.service';
import { AdmissionService } from './../../services/admission.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { StudentRegister } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { AdmissionDto } from 'src/app/models/admission';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private studentService: StudentService,
    private admissionService: AdmissionService,
    private accountService: AccountService,
    private dialogService: DialogService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  //AccountDto activity
  accountDto: AccountDto = new AccountDto();

  onPaymentSubmit() {
    //alert("Payment");
    Swal.fire({
      title: 'Payment?',
      text: 'Do you need to complete payment',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Pay',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        /*Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )*/

        this.accountService.addTransaction(this.accountDto).subscribe(data => {
          if (data.statusCode === "SUCCESS") {
            alert(JSON.stringify(data.accountDto))
            this.router.navigateByUrl('admin/fee-receipt', { state: data.accountDto });
            //generate receipt with accountDto
          }
          else {
            Swal.fire(
              'Failed',
              'Payment Failed',
              'error'
            )
          }
        })

          //this.router.navigateByUrl('admin/fee-receipt', { state: this.accountDto });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Payment Cancelled',
            'error'
          )
        }
      })
  }
  /*this.dialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) => {
      if(confirmed){
        this.router.navigateByUrl('admin/fee-receipt', { state: this.accountDto });
      }
      if (confirmed) {
        this.accountService.addTransaction(this.accountDto).subscribe(data => {
          if (data.statusCode === "SUCCESS") {
            alert(JSON.stringify(data.accountDto))
            this.router.navigateByUrl('admin/fee-receipt', { state: data.accountDto });
            //generate receipt with accountDto
          }
          else {
            alert(data.statusMessage)
          }
        },
        error => console.log('oops', error))
      }
    });*/





  rollNoforPayment: number;
  transactionsList: AccountDto[];
  isShow = false;

  transactionsListHeader = [
    { headerName: 'Transaction ID', field: 'transactionId', sortable: true, filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Student Roll No.', field: 'rollNo', sortable: true, filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Student Name', field: 'name', sortable: true, filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Amount Paid', field: 'amount', sortable: true, filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Payment DateTime', field: 'dateTime', sortable: true, filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },



  ]

  paymentListRollNo() {

    this.accountService.getTransactionsWithRollNo(this.rollNoforPayment).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        //alert("Transactions Fetch Success")
        this.transactionsList = data.accountDtos;
        this.isShow = true;

      }
      else {
        //alert("Transactions Fetch Failed")
        
        this.transactionsList.splice(0, this.transactionsList.length)
        Swal.fire(
          'Failed',
          data.statusMessage,
          'error'
        )
      }
    })
  }

  fromDate: Date
  toDate: Date
  paymentListDates() {
    this.accountService.getTransactionsWithDates(this.fromDate, this.toDate).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        //alert("Transactions Fetch Success")
        this.transactionsList = data.accountDtos
      }
      else {
        //alert("Transactions Fetch Failed")
        this.transactionsList.splice(0, this.transactionsList.length)
        Swal.fire(
          'Failed',
          data.statusMessage,
          'error'
        )
      }
    })
  }

  transactionId: number
  fetchTransaction() {
    this.accountService.getTransaction(this.transactionId).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        alert("Transactions Fetch Success")
        this.transactionsList.splice(0, this.transactionsList.length)
        this.transactionsList.push(data.accountDto)
      }
      else {
        alert("Transactions Fetch Failed")
        this.transactionsList.splice(0, this.transactionsList.length)
      }
    })
  }

  updateAccountDto: AccountDto
  updatePayment() {
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

  deletePayment(trId) {
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
