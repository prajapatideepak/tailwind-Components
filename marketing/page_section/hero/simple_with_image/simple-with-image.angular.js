import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-simple-with-image",
    templateUrl: "./simple-with-image.component.html",
})
export class SimpleWithImageComponent implements OnInit {
    constructor() {}
     isList;
    MenuHandler(flag) {
        flag ? (this.isList = true) : (this.isList = false);
    }
    ngOnInit(): void {}
}
