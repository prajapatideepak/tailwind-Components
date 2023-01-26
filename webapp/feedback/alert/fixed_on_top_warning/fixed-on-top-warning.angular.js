import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fixed-on-top-warning",
  templateUrl: "./fixed-on-top-warning.component.html",
})
export class FixedOnTopWarningComponent implements OnInit {
  constructor() {}

  alert: boolean = false;

  closeAlert() {
    this.alert = !this.alert;
  }
  ngOnInit(): void {}
}
