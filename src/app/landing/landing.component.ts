import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
      <app-header></app-header>
      <app-slider></app-slider>
    <div class="container text-center mt-3 ">
     <a class="border_radius btn_common blue ml-2" routerLink="/landing/home" >About Us</a>
      <a class="border_radius btn_common yellow ml-2" routerLink="/landing/employeelogin" >Login</a>

    </div>

      <router-outlet></router-outlet>
      <app-footer></app-footer>

  `,
  styleUrls: []
})
export class LandingComponent {
  constructor(){

  }
  title = 'student-management';


  getoLogin(){

    alert("ok");
  }
}
