import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-single-action",
  templateUrl: "./single-action.component.html",
})
export class SingleActionComponent implements OnInit {
  constructor() {}
  notification: boolean = false;
  notificationBtn() {
    this.notification = !this.notification;
  }
  ngOnInit(): void {}
}
