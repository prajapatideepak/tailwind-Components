import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-left-aligned-with-image-and-floating-card",
    templateUrl: "./left-aligned-with-image-and-floating-card.component.html",
})
export class LeftAlignedWithImageAndFloatingCardComponent implements OnInit {
    constructor() {}
    // Menu
   isList;
    MenuHandler(flag) {
        flag ? (this.isList = true) : (this.isList = false);
    }
    ngOnInit(): void {}
}
