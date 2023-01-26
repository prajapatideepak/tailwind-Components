import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-dark-with-tabs",
    templateUrl: "./dark-with-tabs.component.html",
})
export class DarkWithTabsComponent implements OnInit {
     isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
