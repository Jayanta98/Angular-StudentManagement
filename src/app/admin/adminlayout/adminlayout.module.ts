import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RightbarComponent } from './rightbar/rightbar.component';



@NgModule({
  declarations: [TopbarComponent, LeftsidebarComponent, FooterComponent, RightbarComponent],
  imports: [
    CommonModule,
    RouterModule,



  ],
  exports: [
    TopbarComponent, LeftsidebarComponent, FooterComponent, RightbarComponent
  ]
})
export class AdminlayoutModule { }
