import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-multiple-cards",
    templateUrl: "./multiple-cards.component.html",
})
export class MultipleCardsComponent implements OnInit {
    current = 0;
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
                this.current = pointer + 1;
            }
        }
        if (++pointer == figures.length) {
            pointer = 0;
        }
        figures[pointer].className = "visible";
    }

    public movePrev() {
        var figures = this.getFigures();
        for (var i = 0; i < figures.length; i++) {
            if (figures[i].className == "visible") {
                figures[i].className = "hidden";
            }
        }
        if (this.current === 0) {
            this.current = figures.length - 1;
            figures[this.current].className = "visible";
        } else {
            this.current = this.current - 1;
            figures[this.current].className = "visible";
        }
    }

    ngOnInit(): void {}
}
