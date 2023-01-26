import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-dashboard-eight",
    templateUrl: "./dashboard-eight.component.html",
})
export class DashboardEightComponent implements OnInit {
  status: boolean = false;
  clickEvent() {
      this.status = !this.status;
  }
    constructor() {}

    ngOnInit(): void {}
}
