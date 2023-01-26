import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-dark-with-border-above-page-title",
    templateUrl: "./dark-with-border-above-page-title.component.html",
})
export class DarkWithBorderAbovePageTitleComponent implements OnInit {
     isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
