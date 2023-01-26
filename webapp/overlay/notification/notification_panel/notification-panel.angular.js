import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-notification-panel",
    templateUrl: "./notification-panel.component.html",
})
export class NotificationPanelComponent implements OnInit {
    constructor() {}
    public Popup = (flag) => {
        if (flag) {
            document.getElementById("popup").classList.add("right-100");
            document.getElementById("popup").classList.remove("hidden");
        } else {
            document.getElementById("popup").classList.add("hidden");
        }
    };
    ngOnInit(): void {}
}
