import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-modal-four",
    templateUrl: "./modal-four.component.html",
})
export class ModalFourComponent implements OnInit {
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
