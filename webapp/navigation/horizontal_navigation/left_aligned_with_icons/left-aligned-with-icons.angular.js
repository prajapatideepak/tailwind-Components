import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-left-aligned-with-icons",
    templateUrl: "./left-aligned-with-icons.component.html",
})
export class LeftAlignedWithIconsComponent implements OnInit {
    isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;

    constructor() {}
    ngOnInit(): void {}
}
