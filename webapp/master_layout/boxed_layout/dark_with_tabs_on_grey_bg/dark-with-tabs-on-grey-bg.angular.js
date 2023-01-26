import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-dark-with-tabs-on-grey-bg",
    templateUrl: "./dark-with-tabs-on-grey-bg.component.html",
})
export class DarkWithTabsOnGreyBgComponent implements OnInit {
     isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
