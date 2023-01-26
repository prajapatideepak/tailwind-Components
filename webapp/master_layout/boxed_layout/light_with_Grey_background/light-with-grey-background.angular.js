import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-light-with-grey-background",
    templateUrl: "./light-with-grey-background.component.html",
})
export class LightWithGreyBackgroundComponent implements OnInit {
     isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
