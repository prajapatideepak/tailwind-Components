import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-modal-thirty-four",
  templateUrl: "./modal-thirty-four.component.html",
})
export class ModalThirtyFourComponent implements OnInit {
  constructor() {}
  modal: boolean = false;
  modalBtn() {
    this.modal = !this.modal;
  }
  ngOnInit(): void {}
}
