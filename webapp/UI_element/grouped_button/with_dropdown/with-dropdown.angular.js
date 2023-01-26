import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-with-dropdown",
    templateUrl: "./with-dropdown.component.html",
})
export class WithDropdownComponent implements OnInit {
    public show_first: boolean = false;
    public show_second: boolean = false;
    constructor() {}
    public dropdownFunction(flag) {
        if (flag === 1) {
            this.show_first = !this.show_first;
        } else {
            this.show_second = !this.show_second;
        }
    }
    ngOnInit(): void {}
}
