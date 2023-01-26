import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-indigo-with-chevrons",
    templateUrl: "./indigo-with-chevrons.component.html",
})
export class IndigoWithChevronsComponent implements OnInit {
    curent = 0;

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
                this.curent = pointer + 1;
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
        if (this.curent === 0) {
            this.curent = figures.length - 1;
            figures[this.curent].className = "visible";
        } else {
            this.curent = this.curent - 1;
            figures[this.curent].className = "visible";
        }
    }
    ngOnInit(): void {}
}
