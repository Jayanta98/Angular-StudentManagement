import { Component, OnInit } from '@angular/core';
import { StudentRegister } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-profilesection',
  templateUrl: './profilesection.component.html',
  styleUrls: ['./profilesection.component.css']
})
export class ProfilesectionComponent implements OnInit {

  constructor(private studentService: StudentService) { }
  refRollNo: number;
  studentModel: StudentRegister = new StudentRegister();
  ngOnInit(): void {
    this.getStudentDetailProfile();
  }

  getStudentDetailProfile() {
    this.refRollNo = parseInt(localStorage.getItem("RefNo"), 10);
    //alert(this.refRollNo + 10);

    this.studentService.fetchStudent(this.refRollNo).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        this.studentModel = data.student;
        console.log(data.student);
        //alert("Student Details" + JSON.stringify(data.student))
      }
      else {

        // alert("Student Details Failed" + JSON.stringify(data.statusMessage))
      }
    })



  }

}
