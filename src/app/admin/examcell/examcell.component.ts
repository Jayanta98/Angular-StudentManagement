import { ExamcellService } from './../../services/examcell.service';
import { Result, ResultsDto } from './../../models/examcell';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-examcell',
  templateUrl: './examcell.component.html',
  styleUrls: ['./examcell.component.css']
})
export class ExamcellComponent implements OnInit {

  resultDto: ResultsDto = new ResultsDto()
  constructor(private router: Router, private examCellService: ExamcellService) { }

  ngOnInit(): void {
  }

  on11thmarksCard: any;
  onMarksSelection(event) {
    this.on11thmarksCard = event.target.files[0];
  }
  onMarksSubmit() {
    let formData: FormData = new FormData();
    formData.append('file', this.on11thmarksCard);
    alert(JSON.stringify(formData));
    this.examCellService.upload(formData).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        alert(data.statusCode)
      }
      else {
        alert(data.statusMessage)
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
    alert(JSON.stringify(this.rollNo));
    this.examCellService.fetchByRollNo(this.rollNo).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        this.resultList = data.resultsList
        alert(JSON.stringify(this.resultList));
        this.isShow = true;

      }
      else {
        alert(data.statusMessage)
      }
    })
  }

  testCode: string
  onTestCodeSubmit() {
    alert(JSON.stringify(this.testCode));
    this.examCellService.fetchByTestCode(this.testCode).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        this.resultList = data.resultsList
        alert(JSON.stringify(this.resultList));
        this.isShow=true;

      }
      else {
        alert(data.statusMessage)
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

}
