import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-light-with-icons-at-bottom",
  templateUrl: "./light-with-icons-at-bottom.component.html",
})
export class LightWithIconsAtBottomComponent implements OnInit {
  isList: number;
  isMenu: boolean = false;
  isMenuBtn() {
    this.isMenu = !this.isMenu;
  }
  isSearch: boolean = false;
  constructor() {}
  ngOnInit(): void {}
}
