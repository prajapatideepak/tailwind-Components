import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notification1",
  templateUrl: "./notification1.component.html",
})
export class Notification1Component implements OnInit {
  notification: boolean = false;
  notificationBtn() {
    this.notification = !this.notification;
  }
  constructor() {}

  ngOnInit(): void {}
}
