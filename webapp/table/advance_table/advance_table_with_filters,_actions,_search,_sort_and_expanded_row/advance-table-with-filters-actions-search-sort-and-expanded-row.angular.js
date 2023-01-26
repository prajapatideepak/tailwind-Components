import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-advance-table-with-filters-actions-search-sort-and-expanded-row",
    templateUrl: "./advance-table-with-filters-actions-search-sort-and-expanded-row.component.html",
})
export class AdvanceTableWithFiltersActionsSearchSortAndExpandedRowComponent implements OnInit {
    dropdown: number;
    show_row: number;
    table_interact1: boolean = false;
    table_interact2: boolean = false;
    table_interact3: boolean = false;
    table_interact4: boolean = false;
    table_interact5: boolean = false;
    table_interact6: boolean = false;
    table_interact7: boolean = false;
    constructor() {}

    ngOnInit(): void {
        let checkAll = document.getElementById("checkAll");
        checkAll.addEventListener("change", function (event: any) {
            let table = checkAll.closest("table");
            let checkboxes: any = table.querySelectorAll("input[type=checkbox]");
            for (let i = 0; i < checkboxes.length; i++) {
                let checkbox = checkboxes[i];
                checkbox.checked = event.target.checked;
            }
        });
    }
}
