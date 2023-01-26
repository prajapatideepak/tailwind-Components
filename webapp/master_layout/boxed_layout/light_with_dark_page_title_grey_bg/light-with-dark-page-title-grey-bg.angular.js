import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-light-with-dark-page-title-grey-bg",
    templateUrl: "./light-with-dark-page-title-grey-bg.component.html",
})
export class LightWithDarkPageTitleGreyBgComponent implements OnInit {
     isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
