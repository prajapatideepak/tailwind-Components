import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-simple-with-gray-hover",
    templateUrl: "./simple-with-gray-hover.component.html",
})
export class SimpleWithGrayHoverComponent implements OnInit {
    constructor() {}
   isOpenedList;
    openMenu(source) {
        this.isOpenedList = source;
    }
    closeMenu() {
        this.isOpenedList = -1;
    }
    ngOnInit(): void {
       
    }
}
