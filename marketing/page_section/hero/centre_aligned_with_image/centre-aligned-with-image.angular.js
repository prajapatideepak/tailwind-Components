import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-centre-aligned-with-image",
    templateUrl: "./centre-aligned-with-image.component.html",
})
export class CentreAlignedWithImageComponent implements OnInit {
    constructor() {}
     isList;
    MenuHandler(flag) {
        flag ? (this.isList = true) : (this.isList = false);
    }
    ngOnInit(): void {}
}
