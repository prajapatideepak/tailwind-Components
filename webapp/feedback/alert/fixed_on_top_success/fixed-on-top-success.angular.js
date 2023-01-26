import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fixed-on-top-success",
  templateUrl: "./fixed-on-top-success.component.html",
})
export class FixedOnTopSuccessComponent implements OnInit {
  constructor() {}

  alert: boolean = false;

  closeAlert() {
    this.alert = !this.alert;
  }
  ngOnInit(): void {}
}
