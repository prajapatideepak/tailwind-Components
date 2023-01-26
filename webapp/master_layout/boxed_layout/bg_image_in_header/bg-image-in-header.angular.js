import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-bg-image-in-header",
    templateUrl: "./bg-image-in-header.component.html",
})
export class BgImageInHeaderComponent implements OnInit {
     isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
