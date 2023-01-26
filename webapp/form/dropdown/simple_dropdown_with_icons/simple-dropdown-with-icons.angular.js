import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-simple-dropdown-with-icons",
    templateUrl: "./simple-dropdown-with-icons.component.html",
})
export class SimpleDropdownWithIconsComponent implements OnInit {
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
