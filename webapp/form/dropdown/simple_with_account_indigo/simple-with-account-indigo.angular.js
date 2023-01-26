import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-simple-with-account-indigo",
    templateUrl: "./simple-with-account-indigo.component.html",
})
export class SimpleWithAccountIndigoComponent implements OnInit {
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
