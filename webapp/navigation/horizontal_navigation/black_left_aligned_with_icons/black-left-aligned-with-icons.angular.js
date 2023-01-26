import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-black-left-aligned-with-icons",
    templateUrl: "./black-left-aligned-with-icons.component.html",
})
export class BlackLeftAlignedWithIconsComponent implements OnInit {
    isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;

    constructor() {}
    ngOnInit(): void {}
}
