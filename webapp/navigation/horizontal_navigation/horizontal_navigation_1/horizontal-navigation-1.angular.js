import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-three',
  templateUrl: './dashboard-three.component.html',

})
export class DashboardThreeComponent implements OnInit {
  status: boolean = false;
  clickEvent() {
      this.status = !this.status;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
