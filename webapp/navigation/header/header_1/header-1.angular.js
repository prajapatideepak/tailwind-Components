import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-component",
  templateUrl: "./component.component.html",
})
export class ComponentComponent implements OnInit {
  selector: boolean = false;
  selectorDropdown() {
    this.selector = !this.selector;
  }
  selected: string = "Collections";
  isToggle: number = 1;
  constructor() {}

  ngOnInit(): void {}
}
