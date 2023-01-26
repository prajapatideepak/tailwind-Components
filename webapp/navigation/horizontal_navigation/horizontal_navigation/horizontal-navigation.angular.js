import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-two',
  templateUrl: './dashboard-two.component.html',

})
export class DashboardTwoComponent implements OnInit {
  status: boolean = false;
  clickEvent() {
      this.status = !this.status;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
