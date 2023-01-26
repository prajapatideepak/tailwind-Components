import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-dropdown2",
    templateUrl: "./dropdown2.component.html",
})
export class Dropdown2Component implements OnInit {
    isList;
    subList = 3;
    constructor() {}

    ngOnInit(): void {}
}
