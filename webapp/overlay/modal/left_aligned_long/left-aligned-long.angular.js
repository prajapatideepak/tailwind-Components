import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-left-aligned-long",
    templateUrl: "./left-aligned-long.component.html",
})
export class LeftAlignedLongComponent implements OnInit {
    constructor() {}
    public modalHandler(val) {
        var modal = document.getElementById("modal");
        var button = document.getElementById("button");
        if (val) {
            modal.classList.remove("hidden");
            button.classList.add("hidden");
        } else {
            modal.classList.add("hidden");
            button.classList.remove("hidden");
        }
    }
    ngOnInit(): void {}
}
