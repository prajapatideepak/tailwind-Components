import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-text-only",
    templateUrl: "./text-only.component.html",
})
export class TextOnlyComponent implements OnInit {
    tooltip_status = 0;
    constructor() {}

    ngOnInit(): void {}
}
