import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-light-with-icons-at-bottom-alternate-style",
    templateUrl: "./light-with-icons-at-bottom-alternate-style.component.html",
})
export class LightWithIconsAtBottomAlternateStyleComponent implements OnInit {
     isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
