
import { AdmissionDto } from './../../models/admission';
import { DialogService } from './../../services/dialog.service';
import { Component, OnInit } from '@angular/core';
import { StudentRegister } from 'src/app/models/student';
import { AccountService } from 'src/app/services/account.service';
import { AdmissionService } from 'src/app/services/admission.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  constructor(private studentService: StudentService,
    private admissionService: AdmissionService,
    private dialogService: DialogService) { }
    selection: string

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
    this.dialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.studentService.updateStudent(this.studentModel).subscribe(data => {
            if (data.statusCode === "SUCCESS") {
              alert(data.statusCode + " Note the Reference No: " + data.referenceNo)
            }
            else {
              alert(data.statusMessage)
            }
          })

        }
      });

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
    this.dialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.admissionService.admission(this.admissionDto).subscribe(data => {
            if (data.statusCode === "SUCCESS") {
              alert("Roll No of Student : " + data.rollNo)
            }
            else {
              alert(data.statusMessage)
            }
          })

        }
      });

  }
  
  deleteAdmission(delRollNo: number) {
    alert("Admission Deletion " + delRollNo)
    this.dialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.admissionService.deleteAdmission(delRollNo).subscribe(data => {
            if (data.statusCode === "SUCCESS") {
              alert("Deletion Succesful")
            }
            else {
              alert("Deletion Failed")
            }
          })

        }
      });

  }

  
  rollNo: number
  updateAdmissionDto: AdmissionDto
  getAdmission(){
    this.admissionService.getAdmission(this.rollNo).subscribe(data =>{
      if(data.statusCode === "SUCCESS"){
        alert("Fetch Success")
        this.updateAdmissionDto = data.admissionDto
      }
      else {
        alert("Updation Failed")
      }
    })
  }

  updateAdmission(){
    alert("Confirm Admission Update for "+ this.updateAdmissionDto.rollNo)
    this.dialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.admissionService.updateAdmission(this.updateAdmissionDto).subscribe(data =>{
            if(data.statusCode === "SUCCESS"){
              alert("Update Success for student with roll number : "+data.rollNo)
            }
            else {
              alert("Updation Failed")
            }
          })
        }
      });
    
  }

  studentRollNo: number
  getStudentByRollNo(){
    this.studentService.getStudentByRollNo(this.studentRollNo).subscribe(data =>{
      if (data.statusCode === "SUCCESS") {
        this.studentModel = data.student
        alert(JSON.stringify(data.student))
      }
      else {
        alert(data.statusMessage)
      }
    })
  }



}
