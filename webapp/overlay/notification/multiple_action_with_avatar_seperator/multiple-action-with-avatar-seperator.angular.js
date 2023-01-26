import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-multiple-action-with-avatar-seperator",
    templateUrl: "./multiple-action-with-avatar-seperator.component.html",
})
export class MultipleActionWithAvatarSeperatorComponent implements OnInit {
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
