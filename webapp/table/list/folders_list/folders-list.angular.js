import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-folders-list",
    templateUrl: "./folders-list.component.html",
})
export class FoldersListComponent implements OnInit {
    constructor() {}
    isOpenedList;
    isOpenedSubList;
    ngOnInit(): void {}
}
