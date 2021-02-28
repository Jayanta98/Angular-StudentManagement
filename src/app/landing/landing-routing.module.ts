import { EmploginComponent } from './emplogin/emplogin.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "home", redirectTo: "landing/home", pathMatch: "full" },
  {
    path: "landing",
    component: LandingComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "employeelogin", component: EmploginComponent },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
