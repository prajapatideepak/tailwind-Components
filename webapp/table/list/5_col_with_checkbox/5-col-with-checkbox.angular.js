import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-five-col-with-checkbox",
    templateUrl: "./five-col-with-checkbox.component.html",
})
export class FiveColWithCheckboxComponent implements OnInit {
    flag = true;
    constructor() {}

    public checkAll() {
        if (this.flag) {
            document.querySelectorAll('input[type="checkbox"]').forEach((el) => {
                el.nextElementSibling.classList.remove("hidden");
            });
            this.flag = false;
        } else {
            document.querySelectorAll('input[type="checkbox"]').forEach((el) => {
                el.nextElementSibling.classList.add("hidden");
            });
            this.flag = true;
        }
    }

    ngOnInit(): void {}
}
