import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-indigo-with-seperate-chevron",
    templateUrl: "./indigo-with-seperate-chevron.component.html",
})
export class IndigoWithSeperateChevronComponent implements OnInit {
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
