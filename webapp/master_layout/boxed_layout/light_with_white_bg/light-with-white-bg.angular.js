import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-light-with-white-bg",
    templateUrl: "./light-with-white-bg.component.html",
})
export class LightWithWhiteBgComponent implements OnInit {
     isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
