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

  constructor(/*private dialog: MatDialog,*/private modalService: NgbModal) { }

  openConfirmDialog(msg){
    /* return this.dialog.open(MatConfirmDialogComponent,{
        width: '390px',
        panelClass: 'confirm-dialog-container',
        disableClose: true,
        position: { top: "10px" },
        data :{
          message : msg
        }
      });*/
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