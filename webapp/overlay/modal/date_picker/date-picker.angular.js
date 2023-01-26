import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
})
export class DatePickerComponent implements OnInit {
  modal: boolean = false;
  modalBtn() {
    this.modal = !this.modal;
  }
  constructor() {}

  ngOnInit(): void {}
}
