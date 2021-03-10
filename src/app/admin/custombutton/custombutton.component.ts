import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custombutton',
  templateUrl: './custombutton.component.html',
  styleUrls: ['./custombutton.component.css']
})
export class CustombuttonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nameData: any;

  agInit(params: any): void {
    this.nameData = params.value;

  }
  gotoProfile() {
    //alert("You Clicked")
    //alert(this.nameData);
    localStorage.setItem('RefNo', this.nameData);
    this.router.navigateByUrl("admin/profile")
  }
}
