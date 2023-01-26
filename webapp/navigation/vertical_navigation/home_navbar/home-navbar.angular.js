import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-home-navbar",
    templateUrl: "./home-navbar.component.html",
})
export class HomeNavbarComponent implements OnInit {
    isMenu: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
