import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-single-action-with-avatar",
    templateUrl: "./single-action-with-avatar.component.html",
})
export class SingleActionWithAvatarComponent implements OnInit {
    constructor() {}

    public closeModal() {
        var Notification = document.getElementById("notification");
        Notification.style.transform = "translateX(150%)";
    }
    ngOnInit(): void {
        var Notification = document.getElementById("notification");
        Notification.style.transform = "translateX(150%)";
        Notification.classList.remove("hidden");
        setTimeout(function () {
            Notification.style.transform = "translateX(0%)";
        }, 1000);
    }
}
