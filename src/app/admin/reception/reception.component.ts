import { StudentService } from './../../services/student.service';
import { StudentRegister } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
  }

  studentModel: StudentRegister = new StudentRegister();

  message: string;
  error: boolean;
  employeeId: number;

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.studentModel))
    this.employeeId = parseInt(localStorage.getItem('employeeId'));
    this.studentService.register(this.studentModel).subscribe(data => {
      if(data.statusCode === "SUCCESS"){
        //storing the data and navigate

      }
      else{
        this.error = true;
        this.message = data.statusMessage;
      }
    })
  }

}
