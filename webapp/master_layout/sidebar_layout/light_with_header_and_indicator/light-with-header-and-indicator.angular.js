import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-light-with-header-and-indicator",
    templateUrl: "./light-with-header-and-indicator.component.html",
})
export class LightWithHeaderAndIndicatorComponent implements OnInit {
    isList: number;
    isProfile: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
