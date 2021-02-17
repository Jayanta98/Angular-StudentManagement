import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examcell',
  templateUrl: './examcell.component.html',
  styleUrls: ['./examcell.component.css']
})
export class ExamcellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   on11thmarksCard: any;
    on11thMarksCardSelection(event) {
    this.on11thmarksCard = event.target.files[0];
  }
  onClassEleventhSubmit(){
      let formData: FormData = new FormData();
       formData.append('marksCard11', this.on11thmarksCard);
       alert(JSON.stringify(formData));
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
