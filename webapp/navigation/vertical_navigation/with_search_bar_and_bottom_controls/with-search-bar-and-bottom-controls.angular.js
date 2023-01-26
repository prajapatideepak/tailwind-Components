import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-with-search-bar-and-bottom-controls",
    templateUrl: "./with-search-bar-and-bottom-controls.component.html",
})
export class WithSearchBarAndBottomControlsComponent implements OnInit {
    isMenu: boolean = false;
    constructor() {}

    ngOnInit(): void {}
}
