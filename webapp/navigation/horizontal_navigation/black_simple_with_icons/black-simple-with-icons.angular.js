import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-black-simple-with-icons",
    templateUrl: "./black-simple-with-icons.component.html",
})
export class BlackSimpleWithIconsComponent implements OnInit {
    isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;

    constructor() {}
    ngOnInit(): void {}
}
