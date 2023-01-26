import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-modal13",
  templateUrl: "./modal13.component.html",
})
export class Modal13Component implements OnInit {
  modal: boolean = false;
  modalBtn() {
    this.modal = !this.modal;
  }
  constructor() {}

  ngOnInit(): void {}
}
