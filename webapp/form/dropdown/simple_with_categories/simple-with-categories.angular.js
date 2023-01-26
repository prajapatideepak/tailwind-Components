import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-simple-with-categories",
    templateUrl: "./simple-with-categories.component.html",
})
export class SimpleWithCategoriesComponent implements OnInit {
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
