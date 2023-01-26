import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-left-aligned-short",
  templateUrl: "./left-aligned-short.component.html",
})
export class LeftAlignedShortComponent implements OnInit {
  constructor() {}
  modal: boolean = false;
  modalBtn() {
    this.modal = !this.modal;
  }
  ngOnInit(): void {}
}
