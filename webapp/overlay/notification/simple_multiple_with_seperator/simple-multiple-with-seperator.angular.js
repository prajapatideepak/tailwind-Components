import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-simple-multiple-with-seperator",
    templateUrl: "./simple-multiple-with-seperator.component.html",
})
export class SimpleMultipleWithSeperatorComponent implements OnInit {
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
