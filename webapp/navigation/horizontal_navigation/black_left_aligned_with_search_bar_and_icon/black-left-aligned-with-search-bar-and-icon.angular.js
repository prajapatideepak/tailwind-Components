import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-black-left-aligned-with-search-bar-and-icon",
    templateUrl: "./black-left-aligned-with-search-bar-and-icon.component.html",
})
export class BlackLeftAlignedWithSearchBarAndIconComponent implements OnInit {
    isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;

    constructor() {}
    ngOnInit(): void {}
}
