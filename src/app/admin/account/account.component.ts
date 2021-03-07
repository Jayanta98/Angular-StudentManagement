import { AccountService } from './../../services/account.service';
import { AdmissionService } from './../../services/admission.service';
import { Component, OnInit } from '@angular/core';

import { StudentRegister } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { AdmissionDto } from 'src/app/models/admission';
import { AccountDto } from 'src/app/models/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private studentService: StudentService, 
    private admissionService: AdmissionService,
    private accountService: AccountService) { }

  ngOnInit(): void {
  }

  studentModel: StudentRegister = new StudentRegister();
  studentAdmission: StudentRegister = new StudentRegister();
  ref: number;
  percentageScholarship: number;
  actualCourseFees: number;

  offfer: number;
  finalFessPay: number;
  scholarshipFeesCal() {
    // alert(this.actualCourseFees + this.percentageScholarship);
    this.offfer = this.actualCourseFees * this.percentageScholarship / 100;
    this.finalFessPay = this.actualCourseFees - this.offfer;
    // alert("offer" + this.offfer);
    // alert("Pay" + this.finalFessPay);
  }

  refSubmit() {
    this.studentService.fetchStudent(this.ref).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        this.studentModel = data.student
        alert(JSON.stringify(data.student))
      }
      else {
        alert(data.statusMessage)
      }

    })
  }

  onSubmit() {
    alert(JSON.stringify(this.studentModel))
    this.studentService.updateStudent(this.studentModel).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        alert(data.statusCode + " Note the Reference No: " + data.referenceNo)
      }
      else {
        alert(data.statusMessage)
      }
    })

  }



  //AdmissionDTO acivites
  admissionDto: AdmissionDto = new AdmissionDto();

  refForAdmission: number;
  refAdmissionSubmit() {
    alert(this.refForAdmission);
    alert("admission called" + JSON.stringify(this.admissionDto));
    this.studentService.fetchStudent(this.refForAdmission).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        this.studentModel = data.student
        alert(JSON.stringify(data.student))
      }
      else {
        alert(data.statusMessage)
      }
    })
  }

  onAdmissionSubmit() {
    alert("admission called" + JSON.stringify(this.admissionDto));
    this.admissionService.admission(this.admissionDto).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        alert("Roll No of Student : "+data.rollNo)
      }
      else {
        alert(data.statusMessage)
      }
    })
  }

  //AccountDto activity
  accountDto: AccountDto = new AccountDto();

  onPaymentSubmit() {
    alert("Payment");
    this.accountService.addTransaction(this.accountDto).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        alert(JSON.stringify(data.accountDto))
      }
      else {
        alert(data.statusMessage)
      }
    })
  }


}
