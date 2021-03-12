import { IdDto } from './../../models/admission';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.css']
})
export class IdCardComponent implements OnInit {

  id: IdDto

  url: string | ArrayBuffer = "0";
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { 
    this.id = <IdDto>this.router.getCurrentNavigation().extras.state
    console.log(this.id)
    //this.url = 'data:image/jpeg;base64,' + this.id.picture
  }

  ngOnInit(): void {
  }

}
