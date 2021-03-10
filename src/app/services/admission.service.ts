import { AdmissionDto, AdmissionStatus, AdmissionDtoStatus } from './../models/admission';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  constructor(private http: HttpClient) { }

  admission(admissionDto: AdmissionDto) :Observable<AdmissionStatus>{
    return this.http.post<any>('http://localhost:9090/admission',admissionDto);
  }

  updateAdmission(admissionDto: AdmissionDto) :Observable<AdmissionStatus>{
    return this.http.post<any>('http://localhost:9090/update-admission',admissionDto);
  }

  deleteAdmission(rollNo: number): Observable<Status>{
    let url="http://localhost:9090/delete-admission?rollNo="+rollNo;
    return this.http.get<Status>(url);
  }

  getAdmission(rollNo: number): Observable<AdmissionDtoStatus>{
    let url="http://localhost:9090/get-admission?rollNo="+rollNo;
    return this.http.get<AdmissionDtoStatus>(url);
  }

}
/*

import { NotificationComponent } from './../notification/notification.component';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

//import { MatDialog } from '@angular/material/dialog';
//"node_modules/bootstrap/dist/css/bootstrap.min.css",
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(/*private dialog: MatDialog,*//*private modalService: NgbModal) { }

  openConfirmDialog(msg){
    /* return this.dialog.open(MatConfirmDialogComponent,{
        width: '390px',
        panelClass: 'confirm-dialog-container',
        disableClose: true,
        position: { top: "10px" },
        data :{
          message : msg
        }
      });*//*
    }
  
    public notify(
      title: string,
      message: string,
      btnOkText: string = 'OK',
      dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
      const modalRef = this.modalService.open(NotificationComponent, { size: dialogSize });
      modalRef.componentInstance.title = title;
      modalRef.componentInstance.message = message;
      modalRef.componentInstance.btnOkText = btnOkText;
  
      return modalRef.result;
    }
  
    public confirm(
      title: string,
      message: string,
      btnOkText: string = 'OK',
      btnCancelText: string = 'Cancel',
      dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
      const modalRef = this.modalService.open(MatConfirmDialogComponent, { size: dialogSize });
      modalRef.componentInstance.title = title;
      modalRef.componentInstance.message = message;
      modalRef.componentInstance.btnOkText = btnOkText;
      modalRef.componentInstance.btnCancelText = btnCancelText;
  
      return modalRef.result;
    }
  
  }
  */ 
