import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-dark-with-bg-image-in-page-title",
    templateUrl: "./dark-with-bg-image-in-page-title.component.html",
})
export class DarkWithBgImageInPageTitleComponent implements OnInit {
     isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
