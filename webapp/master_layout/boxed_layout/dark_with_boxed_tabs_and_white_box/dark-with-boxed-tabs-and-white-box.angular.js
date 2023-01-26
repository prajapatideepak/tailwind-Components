import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-dark-with-boxed-tabs-and-white-box",
    templateUrl: "./dark-with-boxed-tabs-and-white-box.component.html",
})
export class DarkWithBoxedTabsAndWhiteBoxComponent implements OnInit {
     isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
