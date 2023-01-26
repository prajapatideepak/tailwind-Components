import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-light-with-header-and-icons",
    templateUrl: "./light-with-header-and-icons.component.html",
})
export class LightWithHeaderAndIconsComponent implements OnInit {
    isList: number = 0;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
