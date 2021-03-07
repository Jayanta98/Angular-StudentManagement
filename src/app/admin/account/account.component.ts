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

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  studentModel: StudentRegister = new StudentRegister();
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
  }

  onAdmissionSubmit() {
    alert("admission called" + JSON.stringify(this.admissionDto));
  }
}
