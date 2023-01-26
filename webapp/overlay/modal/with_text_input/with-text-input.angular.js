import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-with-text-input",
    templateUrl: "./with-text-input.component.html",
})
export class WithTextInputComponent implements OnInit {
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
