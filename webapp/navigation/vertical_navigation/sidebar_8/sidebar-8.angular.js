import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
    nav: boolean = true;
    mode: boolean = true;
    modeBtn() {
        this.mode = !this.mode;
    }
    navBtn() {
        this.nav = !this.nav;
    }
    constructor() {}

    ngOnInit(): void {}
}
