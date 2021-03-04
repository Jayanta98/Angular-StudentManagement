import { ExamcellService } from './../../services/examcell.service';
import { ResultsDto } from './../../models/examcell';
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
    on11thMarksCardSelection(event) {
    this.on11thmarksCard = event.target.files[0];
  }
  onClassEleventhSubmit(){
      let formData: FormData = new FormData();
       formData.append('file', this.on11thmarksCard);
       this.resultDto.files = this.on11thmarksCard;
       alert(JSON.stringify(formData));
       alert(JSON.stringify(this.resultDto));
       this.examCellService.upload(formData).subscribe(data => {
         if(data.statusCode === "SUCCESS"){
           alert(data.statusCode)
         }
         else{
           alert(data.statusMessage)
         }
       })


  }



   on12thmarksCard: any;
    on12thMarksCardSelection(event) {
    this.on12thmarksCard = event.target.files[0];
  }
  onClassTwelveSubmit(){
      let formData: FormData = new FormData();
       formData.append('marksCard12', this.on12thmarksCard);
       alert(JSON.stringify(formData));
  }


   TargetBatchmarksCard: any;
    onTargetBatchMarksCardSelection(event) {
    this.TargetBatchmarksCard = event.target.files[0];
  }
  onClassTargetSubmit(){
      let formData: FormData = new FormData();
       formData.append('marksCard', this.TargetBatchmarksCard);
       alert(JSON.stringify(formData));
  }



  studentRegNo:number;
  trackMarksByRegiNumber(){
    alert(this.studentRegNo);

  }

  BatchName:any;
  trackMarksByBatchName(){
    alert(this.BatchName)

  }

}
