import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple-with-action-button-info",
  templateUrl: "./simple-with-action-button-info.component.html",
})
export class SimpleWithActionButtonInfoComponent implements OnInit {
  constructor() {}

  alert: boolean = false;

  closeAlert() {
    this.alert = !this.alert;
  }
  ngOnInit(): void {}
}
