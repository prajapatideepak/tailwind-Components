import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-dark-with-nav-flushed-left",
    templateUrl: "./dark-with-nav-flushed-left.component.html",
})
export class DarkWithNavFlushedLeftComponent implements OnInit {
    isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;

    constructor() {}
    ngOnInit(): void {}
}
