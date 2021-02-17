import { AccountComponent } from './account/account.component';
import { ExamcellComponent } from './examcell/examcell.component';
import { ReceptionComponent } from './reception/reception.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthgardGuard } from '../authgard.guard';

const routes: Routes = [

  { path: "admin", redirectTo: "admin/dashboard", pathMatch: "full" , canActivate:[AuthgardGuard] },

  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent , canActivate:[AuthgardGuard] },
      { path: "reception", component: ReceptionComponent , canActivate:[AuthgardGuard] },
      { path: "examcell", component: ExamcellComponent  , canActivate:[AuthgardGuard]},
      { path: "account", component: AccountComponent  , canActivate:[AuthgardGuard]}

    ]

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
