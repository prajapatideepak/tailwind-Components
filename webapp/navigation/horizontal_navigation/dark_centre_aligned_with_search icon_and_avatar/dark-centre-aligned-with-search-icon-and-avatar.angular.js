import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-dark-centre-aligned-with-searchicon-and-avatar",
    templateUrl: "./dark-centre-aligned-with-searchicon-and-avatar.component.html",
})
export class DarkCentreAlignedWithSearchiconAndAvatarComponent implements OnInit {
    isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;

    constructor() {}
    ngOnInit(): void {}
}
