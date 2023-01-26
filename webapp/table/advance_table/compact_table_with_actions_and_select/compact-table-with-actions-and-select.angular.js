import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-compact-table-with-actions-and-select",
    templateUrl: "./compact-table-with-actions-and-select.component.html",
})
export class CompactTableWithActionsAndSelectComponent implements OnInit {
    isList: number;
    table_interact1: boolean = false;
    table_interact2: boolean = false;
    table_interact3: boolean = false;
    table_interact4: boolean = false;
    table_interact5: boolean = false;
    table_interact6: boolean = false;
    table_interact7: boolean = false;

    constructor() {}
    checkAll(value) {
        this.table_interact1 = value;
        this.table_interact2 = value;
        this.table_interact3 = value;
        this.table_interact4 = value;
        this.table_interact5 = value;
        this.table_interact6 = value;
        this.table_interact7 = value;
    }
    ngOnInit(): void {}
}
