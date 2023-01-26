import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-full-width-card-with-chevron",
    templateUrl: "./full-width-card-with-chevron.component.html",
})
export class FullWidthCardWithChevronComponent implements OnInit {
    constructor() {}
    public getFigures() {
        return document.getElementById("carousel").getElementsByTagName("figure");
    }
    public moveForward() {
        var pointer = 0;
        var figures = this.getFigures();
        for (var i = 0; i < figures.length; i++) {
            if (figures[i].className == "visible") {
                figures[i].className = "hidden";
                pointer = i;
            }
        }
        if (++pointer == figures.length) {
            pointer = 0;
        }
        figures[pointer].className = "visible";
    }
    ngOnInit(): void {}
}
