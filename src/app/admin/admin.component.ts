import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-root',
  template: `
        <div id="wrapper">
            
            <app-leftsidebar></app-leftsidebar>
            <app-topbar></app-topbar>

            <div class="content-page">
                <div class="content">
                  <router-outlet></router-outlet>
                </div>

            </div>
        <app-footer></app-footer>
        </div>
        <!-- END wrapper -->






  `,
  styleUrls: []
})
export class AdminComponent implements OnInit {
  title = 'student-management';

  constructor() { }

  ngOnInit() {


  }
}
