import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  mobileNavigation: boolean = true;
  mobileNavigationBtn(){
    this.mobileNavigation=!this.mobileNavigation
  }
  constructor() {}

  ngOnInit(): void {}
}
