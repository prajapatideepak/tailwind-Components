import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-color-coded-with-icon-info",
  templateUrl: "./color-coded-with-icon-info.component.html",
})
export class ColorCodedWithIconInfoComponent implements OnInit {
  constructor() {}
  alert: boolean = false;

  closeAlert() {
    this.alert = !this.alert;
  }
  ngOnInit(): void {}
}
