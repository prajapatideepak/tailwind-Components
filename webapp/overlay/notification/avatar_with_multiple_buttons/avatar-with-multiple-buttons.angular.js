import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-avatar-with-multiple-buttons",
    templateUrl: "./avatar-with-multiple-buttons.component.html",
})
export class AvatarWithMultipleButtonsComponent implements OnInit {
    constructor() {}
    public closeModal() {
        var Notification: any = document.getElementById("notification");
        Notification.style.transform = "translateX(150%)";
    }
    ngOnInit(): void {
        var Notification: any = document.getElementById("notification");
        var close = document.getElementById("close-modal");
        Notification.style.transform = "translateX(150%)";
        Notification.classList.remove("hidden");
        setTimeout(function () {
            Notification.style.transform = "translateX(0%)";
        }, 1000);
    }
}
