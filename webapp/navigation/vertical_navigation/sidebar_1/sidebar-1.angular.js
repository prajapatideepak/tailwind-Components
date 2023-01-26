import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-sidebar-one",
    templateUrl: "./sidebar-one.component.html",
})
export class SidebarOneComponent implements OnInit {
    isList: number = 0;
    isMenu: boolean = false;
    constructor() {}

    ngOnInit(): void {}
}
