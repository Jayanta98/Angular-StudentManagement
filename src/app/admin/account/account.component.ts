import { Component, OnInit } from '@angular/core';

import { StudentRegister } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

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
    alert(this.ref);
  }

  onSubmit() {
    alert(JSON.stringify(this.studentModel));
  }

}
