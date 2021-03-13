import { AccountDto } from './../../models/account';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fee-receipt',
  templateUrl: './fee-receipt.component.html',
  styleUrls: ['./fee-receipt.component.css']
})
export class FeeReceiptComponent implements OnInit {

  payment: AccountDto = new AccountDto()

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.payment = <AccountDto>this.router.getCurrentNavigation().extras.state
    console.log(this.payment)
  }
  paymentGST = 0.09 * this.payment.amount
  paymentAmount = 0.82 * this.payment.amount


  ngOnInit(): void {
  }

}
