import { MaterialModule } from './material/material.module';
import { RouterModule ,Router} from '@angular/router';
import { AuthgardGuard } from './authgard.guard';
import { LandingModule } from './landing/landing.module';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    HttpClientModule,
    LandingModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
   // NgbModule

  ],
  providers: [AuthgardGuard],
  bootstrap: [AppComponent],
  entryComponents:[MatConfirmDialogComponent]
})
export class AppModule { }
