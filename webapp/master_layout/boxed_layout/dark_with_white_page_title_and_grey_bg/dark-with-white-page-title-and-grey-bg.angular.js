import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-dark-with-white-page-title-and-grey-bg",
    templateUrl: "./dark-with-white-page-title-and-grey-bg.component.html",
})
export class DarkWithWhitePageTitleAndGreyBgComponent implements OnInit {
     isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
