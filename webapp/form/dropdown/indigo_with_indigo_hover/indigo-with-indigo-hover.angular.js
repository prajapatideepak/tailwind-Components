import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-indigo-with-indigo-hover",
    templateUrl: "./indigo-with-indigo-hover.component.html",
})
export class IndigoWithIndigoHoverComponent implements OnInit {
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
