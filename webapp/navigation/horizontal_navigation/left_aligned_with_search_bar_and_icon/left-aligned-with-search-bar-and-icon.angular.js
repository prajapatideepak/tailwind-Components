import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-left-aligned-with-search-bar-and-icon",
    templateUrl: "./left-aligned-with-search-bar-and-icon.component.html",
})
export class LeftAlignedWithSearchBarAndIconComponent implements OnInit {
    isList: number;
    isMenu: boolean = false;
    isProfile;

    constructor() {}
    ngOnInit(): void {}
}
