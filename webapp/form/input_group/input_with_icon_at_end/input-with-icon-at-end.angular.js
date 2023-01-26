import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-input-with-icon-at-end",
    templateUrl: "./input-with-icon-at-end.component.html",
})
export class InputWithIconAtEndComponent implements OnInit {
    constructor() {}
    inputType: string = "password";
    changeType() {
        this.inputType === "text" ? (this.inputType = "password") : (this.inputType = "text");
    }
    ngOnInit(): void {}
}
