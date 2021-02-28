import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { LandinglayoutModule } from './landinglayout/landinglayout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';

import { EmploginComponent } from './emplogin/emplogin.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LandingComponent, HomeComponent, EmploginComponent],
  imports: [
    CommonModule,
    RouterModule,
    LandingRoutingModule,
    LandinglayoutModule,
    AppRoutingModule,
    FormsModule,

  ]
})
export class LandingModule { }
