import { DialogService } from './../../services/dialog.service';
import { StudentService } from './../../services/student.service';
import { StudentRegister } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

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
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.studentModel));
    Swal.fire({
      title: 'Register?',
      text: 'Do you need to complete registration',
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

        this.studentService.register(this.studentModel).subscribe(data =>{
          if (data.statusCode === "SUCCESS") {
            Swal.fire(
              'Reference No: '+data.referenceNo,
              'Note the above number for further assistance',
              'success'
            )
            this.router.navigateByUrl("admin/dashboard")
          }
          else {
            Swal.fire(
              'Cancelled',
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
    /*this.dialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) => {
      if(confirmed){
        this.studentService.register(this.studentModel).subscribe(data =>{
          if (data.statusCode === "SUCCESS") {
            
            this.router.navigateByUrl("admin/dashboard")
          }
          else {
            this.error = true;
            this.message = data.statusMessage;
            alert(data.statusCode + " ; " + this.message);
          }
        })
      }
    });*/
  }
/*

  onSubmitr() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.studentModel));
    this.dialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.studentService.register(this.studentModel).subscribe(data => {
            if (data.statusCode === "SUCCESS") {
              alert(data.statusCode + " Note the Reference No: " + data.referenceNo)
              this.router.navigateByUrl("admin/dashboard")
            }
            else {
              this.error = true;
              this.message = data.statusMessage;
              alert(data.statusCode + " ; " + this.message);
            }
          }
        }
      });
  }
}*/
}
        //.catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
/*this.dialogService.openConfirmDialog('Are you sure to add the record ?')
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
});*/
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
 })
}  */

