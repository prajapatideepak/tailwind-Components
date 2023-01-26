import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-left-aligned-with-image-and-cta",
    templateUrl: "./left-aligned-with-image-and-cta.component.html",
})
export class LeftAlignedWithImageAndCtaComponent implements OnInit {
    constructor() {}
     isList;
    MenuHandler(flag) {
        flag ? (this.isList = true) : (this.isList = false);
    }
    ngOnInit(): void {}
}
