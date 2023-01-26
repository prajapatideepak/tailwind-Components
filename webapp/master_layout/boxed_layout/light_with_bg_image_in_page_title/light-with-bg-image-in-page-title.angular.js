import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-light-with-bg-image-in-page-title",
    templateUrl: "./light-with-bg-image-in-page-title.component.html",
})
export class LightWithBgImageInPageTitleComponent implements OnInit {
     isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
