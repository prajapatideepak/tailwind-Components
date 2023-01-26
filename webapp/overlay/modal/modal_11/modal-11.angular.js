import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-modal-eleven",
    templateUrl: "./modal-eleven.component.html",
})
export class ModalElevenComponent implements OnInit {
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
