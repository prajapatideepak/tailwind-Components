import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-hero4",
    templateUrl: "./hero4.component.html",
})
export class Hero4Component implements OnInit {
    constructor() {}
   isList;
    MenuHandler(flag) {
        flag ? (this.isList = true) : (this.isList = false);
    }
    ngOnInit(): void {}
}
