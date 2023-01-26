import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-component",
  templateUrl: "./component.component.html",
})
export class ComponentComponent implements OnInit {
  menu: boolean = false;
  menuDropdown() {
    this.menu = !this.menu;
  }

  constructor() {}

  ngOnInit(): void {}
}
