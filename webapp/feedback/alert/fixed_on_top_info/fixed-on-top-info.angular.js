import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fixed-on-top-info",
  templateUrl: "./fixed-on-top-info.component.html",
})
export class FixedOnTopInfoComponent implements OnInit {
  constructor() {}

  alert: boolean = false;

  closeAlert() {
    this.alert = !this.alert;
  }
  ngOnInit(): void {}
}
