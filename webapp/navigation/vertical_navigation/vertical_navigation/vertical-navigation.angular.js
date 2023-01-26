import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-dashboard-one",
    templateUrl: "./dashboard-one.component.html",
})
export class DashboardOneComponent implements OnInit {
    status: boolean = false;
    isToggle;
    clickEvent() {
        this.status = !this.status;
    }
    constructor() {}

    ngOnInit(): void {}
}
