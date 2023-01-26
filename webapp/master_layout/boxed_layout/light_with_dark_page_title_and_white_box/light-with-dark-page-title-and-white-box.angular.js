import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-light-with-dark-page-title-and-white-box",
    templateUrl: "./light-with-dark-page-title-and-white-box.component.html",
})
export class LightWithDarkPageTitleAndWhiteBoxComponent implements OnInit {
     isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
