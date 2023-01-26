import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-single-action-with-sub-text",
  templateUrl: "./single-action-with-sub-text.component.html",
})
export class SingleActionWithSubTextComponent implements OnInit {
  constructor() {}

  notification: boolean = false;
  notificationBtn() {
    this.notification = !this.notification;
  }
  ngOnInit(): void {}
}
