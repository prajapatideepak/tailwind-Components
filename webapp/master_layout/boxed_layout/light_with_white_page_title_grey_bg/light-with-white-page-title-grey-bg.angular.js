import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-light-with-white-page-title-grey-bg",
    templateUrl: "./light-with-white-page-title-grey-bg.component.html",
})
export class LightWithWhitePageTitleGreyBgComponent implements OnInit {
     isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
