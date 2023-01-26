import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-light-with-nav-flushed-left",
    templateUrl: "./light-with-nav-flushed-left.component.html",
})
export class LightWithNavFlushedLeftComponent implements OnInit {
    isList: number;
    isProfile: number;
    isMenu: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
