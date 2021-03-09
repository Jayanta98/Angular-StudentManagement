import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  public dismiss() {
    this.activeModal.dismiss();
  }
  public accept() {
    this.activeModal.close(true);
  }

}
