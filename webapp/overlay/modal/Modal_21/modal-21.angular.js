import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-modal-twenty-eight",
  templateUrl: "./modal-twenty-eight.component.html",
})
export class ModalTwentyEightComponent implements OnInit {
  constructor() {}
  modal: boolean = false;
  modalBtn() {
    this.modal = !this.modal;
  }
  ngOnInit(): void {}
}
