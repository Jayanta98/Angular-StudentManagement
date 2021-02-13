import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-root',
  template: `
        <div id="wrapper">
            <app-topbar></app-topbar>
            <app-leftsidebar></app-leftsidebar>

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
