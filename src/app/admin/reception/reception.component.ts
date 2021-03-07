import { DialogService } from './../../services/dialog.service';
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

  constructor(private studentService: StudentService, 
    private router: Router,
    private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  studentModel: StudentRegister = new StudentRegister();

  message: string;
  error: boolean;
  employeeId: number;

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.studentModel));
    this.dialogService.openConfirmDialog('Are you sure to add the record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.studentService.register(this.studentModel).subscribe(data =>{
          if(data.statusCode === "SUCCESS"){
            alert(data.statusCode+" Note the Reference No: "+data.referenceNo)
            this.router.navigateByUrl("admin/dashboard")
          }
          else{
            this.error = true;
            this.message = data.statusMessage;
            alert(data.statusCode+" ; "+this.message);
          }
        })
      }
    });
    /* this.employeeId = parseInt(localStorage.getItem('employeeId'));
     this.studentService.register(this.studentModel).subscribe(data => {
       if(data.statusCode === "SUCCESS"){
         //storing the data and navigate
           alert(data.statusCode);
         this.router.navigateByUrl("admin/dashboard");
       }
       else{
         this.error = true;
         this.message = data.statusMessage;
          alert(data.statusCode+" ; "+this.message);
       }
     })*/
  }

}
