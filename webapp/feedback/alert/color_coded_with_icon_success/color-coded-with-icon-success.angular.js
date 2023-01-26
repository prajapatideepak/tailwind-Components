import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-color-coded-with-icon-success",
  templateUrl: "./color-coded-with-icon-success.component.html",
})
export class ColorCodedWithIconSuccessComponent implements OnInit {
  constructor() {}
  alert: boolean = false;

  closeAlert() {
    this.alert = !this.alert;
  }

  ngOnInit(): void {}
}
