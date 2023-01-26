import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-card-eighty-nine",
    templateUrl: "./card-eighty-nine.component.html",
})
export class CardEightyNineComponent implements OnInit {
    public show: boolean = false;
    public buttonName: any = "Show";
    constructor() {}

    ngOnInit(): void {}
    toggle() {
        this.show = !this.show;
        if (this.show) this.buttonName = "Hide";
        else this.buttonName = "Show";
    }
}
