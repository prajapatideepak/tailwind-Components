import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-light-centre-aligned-with-searchicon-and-avatar",
    templateUrl: "./light-centre-aligned-with-searchicon-and-avatar.component.html",
})
export class LightCentreAlignedWithSearchiconAndAvatarComponent implements OnInit {
    isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;

    constructor() {}
    ngOnInit(): void {}
}
