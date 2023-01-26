import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-modal-two",
  templateUrl: "./modal-two.component.html",
})
export class ModalTwoComponent implements OnInit {
  constructor() {}
  modal: boolean = false;
  modalBtn() {
    this.modal = !this.modal;
  }
  ngOnInit(): void {}
}
