import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-light-with-tabs-noshadow",
    templateUrl: "./light-with-tabs-noshadow.component.html",
})
export class LightWithTabsNoshadowComponent implements OnInit {
     isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
