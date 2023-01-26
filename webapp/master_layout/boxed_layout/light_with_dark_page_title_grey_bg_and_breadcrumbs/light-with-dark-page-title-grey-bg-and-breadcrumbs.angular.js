import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-light-with-dark-page-title-grey-bg-and-breadcrumbs",
    templateUrl: "./light-with-dark-page-title-grey-bg-and-breadcrumbs.component.html",
})
export class LightWithDarkPageTitleGreyBgAndBreadcrumbsComponent implements OnInit {
     isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
