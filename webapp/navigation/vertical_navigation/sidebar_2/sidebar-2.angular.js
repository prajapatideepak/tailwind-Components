import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-component",
  templateUrl: "./component.component.html",
})
export class ComponentComponent implements OnInit {
  status: boolean = false;
  sidebarHandler() {
    this.status = !this.status;
  }
  constructor() {}

  ngOnInit(): void {}
}
