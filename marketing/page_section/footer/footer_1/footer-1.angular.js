import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-footer-one",
    templateUrl: "./footer-one.component.html",
})
export class FooterOneComponent implements OnInit {
    auto: any;
    light: any;
    dark: any;
    mode: any;
    constructor() {}
    switchMode = (event) => {
        this.mode = "event.target.value";
        switch (event.target.value) {
            case "auto":
                this.auto.classList.remove("hidden");
                this.light.classList.add("hidden");
                this.dark.classList.add("hidden");
                break;
            case "light":
                this.auto.classList.add("hidden");
                this.light.classList.remove("hidden");
                this.dark.classList.add("hidden");
                break;
            case "dark":
                this.auto.classList.add("hidden");
                this.light.classList.add("hidden");
                this.dark.classList.remove("hidden");
                break;
            default:
                break;
        }
    };
    ngOnInit(): void {
        this.auto = document.getElementById("auto");
        this.light = document.getElementById("light");
        this.dark = document.getElementById("dark");
    }
}
