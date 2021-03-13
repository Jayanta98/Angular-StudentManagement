import { AdmissionService } from 'src/app/services/admission.service';
import { ExamcellService } from './../../services/examcell.service';
import { Result, ResultsDto } from './../../models/examcell';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { StudentRegister } from 'src/app/models/student';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-examcell',
  templateUrl: './examcell.component.html',
  styleUrls: ['./examcell.component.css']
})
export class ExamcellComponent implements OnInit {

  resultDto: ResultsDto = new ResultsDto()
  constructor(private router: Router, private examCellService: ExamcellService,
    private studentService: StudentService,
    private admissionService: AdmissionService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  idRollNo: number
  generateId(){
    Swal.fire({
      title: 'Id Card?',
      text: 'Do you need to generate Id card',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Generate',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        /*Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )*/

        this.admissionService.getIdCard(this.idRollNo).subscribe(data => {
          if (data.statusCode === "SUCCESS") {
            //alert(JSON.stringify(data))
            this.router.navigateByUrl('admin/id-card', { state: data });
            //generate receipt with accountDto
          }
          else {
            Swal.fire(
              'Cancelled',
              data.statusMessage,
              'error'
            )
          }
        })

          //this.router.navigateByUrl('admin/fee-receipt', { state: this.accountDto });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Generation o ID Cancelled',
            'error'
          )
        }
      })
  }

  on11thmarksCard: any;
  onMarksSelection(event) {
    this.on11thmarksCard = event.target.files[0];
  }
  onMarksSubmit() {
    let formData: FormData = new FormData();
    formData.append('file', this.on11thmarksCard);
    //alert(JSON.stringify(formData));
    Swal.fire({
      title: 'Upload',
      text: 'Do you need to upload results file',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Upload',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        /*Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )*/

        this.examCellService.upload(formData).subscribe(data => {
          if (data.statusCode === "SUCCESS") {
            Swal.fire(
              'SUCCESS',
              'Results uploaded successfully',
              'success')
          }
          else {
            Swal.fire(
              'Upload Failed',
              data.statusMessage,
              'error'
            )
          }
        })

          //this.router.navigateByUrl('admin/fee-receipt', { state: this.accountDto });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Generation o ID Cancelled',
            'error'
          )
        }
      })
    


  }

  rollNo: number;
  resultList: Result[];
  /*  { headerName: 'Total Right', field: 'right', filter: true, sortable: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Total Wrong', field: 'wrong', filter: true, sortable: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Total blank', field: 'blank', filter: true, sortable: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },*/

  resultListHeader = [
    { headerName: 'Serial No', field: 'serialNo', sortable: true, filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Roll Number', field: 'rollNo', filter: true, sortable: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Test Code', field: 'testCode', filter: true, sortable: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Medium', field: 'medium', filter: true, sortable: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Total Score', field: 'score', filter: true, sortable: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },

    { headerName: 'Rank', field: 'rank', filter: true, sortable: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Physics', field: 'physics', filter: true, sortable: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Chemistry', field: 'chemistry', filter: true, sortable: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Botany', field: 'botany', filter: true, sortable: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Zoology', field: 'zoology', filter: true, sortable: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
  ]


  isShow = false;
  onRollNoSubmit() {
    //alert(JSON.stringify(this.rollNo));
    this.examCellService.fetchByRollNo(this.rollNo).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        this.resultList = data.resultsList
        //alert(JSON.stringify(this.resultList));
        this.isShow = true;

      }
      else {
        Swal.fire(
          'Results Fetch Failed',
          data.statusMessage,
          'error'
        )
      }
    })
  }

  testCode: string
  onTestCodeSubmit() {
    //alert(JSON.stringify(this.testCode));
    this.examCellService.fetchByTestCode(this.testCode).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        this.resultList = data.resultsList
        //alert(JSON.stringify(this.resultList));
        this.isShow = true;

      }
      else {
        Swal.fire(
          'Results Fetch Failed',
          data.statusMessage,
          'error'
        )
      }
    })
  }

  studentRegNo: number;
  trackMarksByRegiNumber() {
    alert(this.studentRegNo);

  }

  BatchName: any;
  trackMarksByBatchName() {
    alert(this.BatchName)

  }


  refForDemoCard: number;
  showDemoCard=false;
  studentModel: StudentRegister = new StudentRegister();
  refFORDemoCardSubmit() {


    this.studentService.fetchStudent(this.refForDemoCard).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        this.studentModel = data.student;
        //console.log(data.student);
        //alert("Student Details" + JSON.stringify(data.student))
        this.showDemoCard=true;

      }
      else {

        Swal.fire(
          'Failed',
          data.statusMessage,
          'error'
        )

        //alert("Student Details Failed" + JSON.stringify(data.statusMessage))
      }
    })

  }

}
