import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-full-width-table-with-tabs",
    templateUrl: "./full-width-table-with-tabs.component.html",
})
export class FullWidthTableWithTabsComponent implements OnInit {
    active_status = 1;
    target;
    constructor() {}
    checkAll(source) {
        let table = this.target.closest("table");
        let checkboxes: any = table.querySelectorAll("input[type=checkbox]");
        for (let i = 0; i < checkboxes.length; i++) {
            let checkbox = checkboxes[i];
            checkbox.checked = source.target.checked;
        }
    }
    ngOnInit(): void {
        this.target = document.getElementById("checkAll");
    }
}
