import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-two-column-with-icon-active",
    templateUrl: "./two-column-with-icon-active.component.html",
})
export class TwoColumnWithIconActiveComponent implements OnInit {
    isMenu: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
