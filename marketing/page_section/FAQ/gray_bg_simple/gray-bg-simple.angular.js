import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-gray-bg-simple",
    templateUrl: "./gray-bg-simple.component.html",
})
export class GrayBgSimpleComponent implements OnInit {
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
