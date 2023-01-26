import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-center-aligned-with-search-bar",
    templateUrl: "./center-aligned-with-search-bar.component.html",
})
export class CenterAlignedWithSearchBarComponent implements OnInit {
    constructor() {}
   isList;
    MenuHandler(flag) {
        flag ? (this.isList = true) : (this.isList = false);
    }
    ngOnInit(): void {}
}
