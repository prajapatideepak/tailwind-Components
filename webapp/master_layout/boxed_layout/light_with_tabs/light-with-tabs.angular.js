import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-light-with-tabs",
    templateUrl: "./light-with-tabs.component.html",
})
export class LightWithTabsComponent implements OnInit {
     isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
