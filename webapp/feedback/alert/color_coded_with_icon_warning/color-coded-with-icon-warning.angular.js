import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-color-coded-with-icon-warning",
  templateUrl: "./color-coded-with-icon-warning.component.html",
})
export class ColorCodedWithIconWarningComponent implements OnInit {
  constructor() {}
  alert: boolean = false;

  closeAlert() {
    this.alert = !this.alert;
  }

  ngOnInit(): void {}
}
