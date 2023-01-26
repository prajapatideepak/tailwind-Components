import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-centre-aligned-file-upload",
    templateUrl: "./centre-aligned-file-upload.component.html",
})
export class CentreAlignedFileUploadComponent implements OnInit {
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
