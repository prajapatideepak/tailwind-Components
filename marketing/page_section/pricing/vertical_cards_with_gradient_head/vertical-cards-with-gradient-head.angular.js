import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-vertical-cards-with-gradient-head",
    templateUrl: "./vertical-cards-with-gradient-head.component.html",
    styleUrls: ["./vertical-cards-with-gradient-head.component.css"],
})
export class VerticalCardsWithGradientHeadComponent implements OnInit {
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
