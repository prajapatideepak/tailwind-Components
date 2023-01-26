import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-modal-twenty-six",
  templateUrl: "./modal-twenty-six.component.html",
})
export class ModalTwentySixComponent implements OnInit {
  constructor() {}
  modal: boolean = false;
  modalBtn() {
    this.modal = !this.modal;
  }
  ngOnInit(): void {}
}
