import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-expanded-list-with-colored-reminder",
    templateUrl: "./expanded-list-with-colored-reminder.component.html",
})
export class ExpandedListWithColoredReminderComponent implements OnInit {
    constructor() {}
    isOpenedList;
    openMenu(source) {
        this.isOpenedList = source;
    }
    closeMenu() {
        this.isOpenedList = -1;
    }
    ngOnInit(): void {}
}
