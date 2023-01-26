import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-hero12",
    templateUrl: "./hero12.component.html",
})
export class Hero12Component implements OnInit {
    constructor() {}
   isList;
    MenuHandler(flag) {
        flag ? (this.isList = true) : (this.isList = false);
    }
    ngOnInit(): void {}
}
