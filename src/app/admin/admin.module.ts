import { RouterModule } from '@angular/router';
import { AdminlayoutModule } from './adminlayout/adminlayout.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ReceptionComponent } from './reception/reception.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamcellComponent } from './examcell/examcell.component';
import { AccountComponent } from './account/account.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    AdminComponent,
    ReceptionComponent,
    DashboardComponent,
    ExamcellComponent,
    AccountComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminlayoutModule,
    FormsModule,
    RouterModule,
    AgGridModule.withComponents(null),
  ]
})
export class AdminModule { }
