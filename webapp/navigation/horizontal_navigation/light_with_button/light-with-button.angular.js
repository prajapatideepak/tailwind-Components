import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-light-with-button",
    templateUrl: "./light-with-button.component.html",
})
export class LightWithButtonComponent implements OnInit {
    isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;

    constructor() {}
    ngOnInit(): void {}
}
