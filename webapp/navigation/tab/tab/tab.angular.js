import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-tab-one",
    templateUrl: "./tab-one.component.html",
})
export class TabOneComponent implements OnInit {
    constructor() {}
    active_status = 1;
    ngOnInit(): void {}
}
