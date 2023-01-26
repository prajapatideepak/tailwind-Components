import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-large-section-with-blob-image",
    templateUrl: "./large-section-with-blob-image.component.html",
    styleUrls: ["./large-section-with-blob-image.component.css"],
})
export class LargeSectionWithBlobImageComponent implements OnInit {
    constructor() {}
   isList;
    MenuHandler(flag) {
        flag ? (this.isList = true) : (this.isList = false);
    }
    ngOnInit(): void {}
}
