import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-large-image-with-center-aligned-heading",
    templateUrl: "./large-image-with-center-aligned-heading.component.html",
})
export class LargeImageWithCenterAlignedHeadingComponent implements OnInit {
    sideBar: any;
    constructor() {}

    ngOnInit(): void {
        this.sideBar = document.getElementById("mobile-nav");
    }
    MenuHandler = (check) => {
        check ? (this.sideBar.style.transform = "translateX(-0px)") : (this.sideBar.style.transform = "translateX(-500px)");
    };
}
