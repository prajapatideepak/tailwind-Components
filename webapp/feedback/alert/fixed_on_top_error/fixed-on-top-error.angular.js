import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fixed-on-top-error",
  templateUrl: "./fixed-on-top-error.component.html",
})
export class FixedOnTopErrorComponent implements OnInit {
  constructor() {}

  alert: boolean = false;

  closeAlert() {
    this.alert = !this.alert;
  }
  ngOnInit(): void {}
}
