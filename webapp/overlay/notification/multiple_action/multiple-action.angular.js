import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-multiple-action",
  templateUrl: "./multiple-action.component.html",
})
export class MultipleActionComponent implements OnInit {
  constructor() {}
  notification: boolean = false;
  notificationBtn() {
    this.notification = !this.notification;
  }

  ngOnInit(): void {}
}
