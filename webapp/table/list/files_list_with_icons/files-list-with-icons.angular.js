import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-files-list-with-icons",
    templateUrl: "./files-list-with-icons.component.html",
})
export class FilesListWithIconsComponent implements OnInit {
    constructor() {}
    isOpenedList;
    isOpenedSubList;
    openMenu(source) {
        this.isOpenedList = source;
    }
    closeMenu() {
        this.isOpenedList = -1;
    }
    openSubMenu(source) {
        this.isOpenedSubList === source ? (this.isOpenedSubList = 0) : (this.isOpenedSubList = source);
    }
    ngOnInit(): void {}
}
