import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-simple-with-dots",
    templateUrl: "./simple-with-dots.component.html",
})
export class SimpleWithDotsComponent implements OnInit {
    constructor() {}
    isOpenedList;
    openMenu() {
        this.isOpenedList === 1 ? (this.isOpenedList = 0) : (this.isOpenedList = 1);
    }
    ngOnInit(): void {
        
    }
}
