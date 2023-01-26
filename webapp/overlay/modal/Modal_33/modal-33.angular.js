import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-modal40",
  templateUrl: "./modal40.component.html",
})
export class Modal40Component implements OnInit {
  modal: boolean = false;
  modalBtn() {
    this.modal = !this.modal;
  }
  constructor() {}

  ngOnInit(): void {}
}
