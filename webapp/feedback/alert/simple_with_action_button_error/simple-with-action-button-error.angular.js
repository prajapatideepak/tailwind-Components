import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple-with-action-button-error",
  templateUrl: "./simple-with-action-button-error.component.html",
})
export class SimpleWithActionButtonErrorComponent implements OnInit {
  constructor() {}
  alert: boolean = false;

  closeAlert() {
    this.alert = !this.alert;
  }

  ngOnInit(): void {}
}
