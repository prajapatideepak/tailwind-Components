import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-component",
  templateUrl: "./component.component.html",
})
export class ComponentComponent implements OnInit {
  status: boolean = false;
  isToggle = 0;
  sidebarHandler() {
    this.status = !this.status;
  }
  constructor() {}

  ngOnInit(): void {}
}
