import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-color-coded-with-icon-error",
  templateUrl: "./color-coded-with-icon-error.component.html",
})
export class ColorCodedWithIconErrorComponent implements OnInit {
  constructor() {}
  alert: boolean = false;

  closeAlert() {
    this.alert = !this.alert;
  }
  ngOnInit(): void {}
}
