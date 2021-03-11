import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-root',
  template: `
        <div id="wrapper">
            
            <app-leftsidebar></app-leftsidebar>
            <app-topbar></app-topbar>

            <div class="content-page">
                <div class="content">
                  <router-outlet (activate)="onActivate($event)"></router-outlet>
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
  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  constructor() { }

  ngOnInit() {


  }
}
