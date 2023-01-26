import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-simple-with-seperator",
    templateUrl: "./simple-with-seperator.component.html",
})
export class SimpleWithSeperatorComponent implements OnInit {
    constructor() {}
   isOpenedList;
    openMenu(source) {
        this.isOpenedList = source;
    }
    closeMenu() {
        this.isOpenedList = -1;
    }
    ngOnInit(): void {}
}
