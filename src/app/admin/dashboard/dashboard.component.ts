import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentListDto, StudentRegister } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { CustombuttonComponent } from '../custombutton/custombutton.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  constructor(private studentService: StudentService, private router: Router) { }
  class11Count: number;
  class12Count: number;
  classTargetCount: number;
  studentsCount: number;

  ngOnInit(): void {
    this.getAllStudents();
     this.studentService.fetchClassCount("11").subscribe(response =>{
       if (response.statusCode === "SUCCESS") {
         this.class11Count = response.studentsCount;
       }
     })
     this.studentService.fetchClassCount("12").subscribe(response =>{
       if (response.statusCode === "SUCCESS") {
         this.class12Count = response.studentsCount;
       }
     })
     this.studentService.fetchClassCount("13").subscribe(response =>{
       if (response.statusCode === "SUCCESS") {
         this.classTargetCount = response.studentsCount;
       }
     })
    this.studentService.fetchCount().subscribe(response => {
      if (response.statusCode === "SUCCESS") {
        this.studentsCount = response.studentsCount;
      }
    })

  }

  studentList: StudentListDto = new StudentListDto();
  sList: StudentRegister[];

  /*
  { headerName: 'Aadhaar No', field: 'aadhaarNo', filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Date Of Birth', field: 'dateOfBirth', filter: true, minWidth: 50, sortable: true, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Address', field: 'resAddress', filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Class', field: 'classNo', filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Medium', field: 'medium', filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Last School', field: 'lastSchool', filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Registration Date', field: 'registrationDate', sortable: true, filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Category', field: 'category', filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
     { headerName: 'Bag', field: 'bag', filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Module', field: 'module', filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'ID Card', field: 'idCard', filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },

    { headerName: 'Father Name', field: 'fatherName', filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Mother Name', field: 'motherName', filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Mobile No', field: 'mobileNo', filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'emailId', field: 'emailId', filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },

    { headerName: 'Scholarship', field: 'scholarship', filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
  */

  sListHeader = [
    { headerName: 'Reference No', field: 'referenceNo', sortable: true, filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Student Name', field: 'name', filter: true, sortable: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },

    { headerName: 'Roll No', field: 'rollNo', filter: true, sortable: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },

    { headerName: 'Councillor Desk', field: 'counsellor', filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },
    { headerName: 'Councillor Name', field: 'counsellorName', filter: true, minWidth: 50, resizable: true, cellStyle: { 'font-size': '14px' } },

    { headerName: 'View Profile', cellRendererFramework: CustombuttonComponent, field: 'referenceNo', minWidth: 50, cellStyle: { 'font-size': '14px' } },


  ];

  getAllStudents() {
    this.studentService.fetchStudents().subscribe(response => {

      this.studentList = response;
      this.sList = this.studentList.studentList;
      //alert(JSON.stringify(this.sList));
    })
  }

}
