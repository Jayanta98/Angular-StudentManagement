import { AccountComponent } from './account/account.component';
import { ExamcellComponent } from './examcell/examcell.component';
import { ReceptionComponent } from './reception/reception.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthgardGuard } from '../authgard.guard';

const routes: Routes = [

  //canActivate:[AuthgardGuard]
  { path: "admin", redirectTo: "admin/dashboard", pathMatch: "full"   },

  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },//canActivate:[AuthgardGuard] 
      { path: "reception", component: ReceptionComponent },
      { path: "examcell", component: ExamcellComponent   },
      { path: "account", component: AccountComponent  }

    ]

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
