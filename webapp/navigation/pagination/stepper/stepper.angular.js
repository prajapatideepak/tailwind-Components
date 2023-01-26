import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-stepper",
    templateUrl: "./stepper.component.html",
})
export class StepperComponent implements OnInit {
    constructor() {}
    pageNo = 5;
    public changeValue(flag) {
        this.pageNo = this.pageNo + (flag ? +1 : -1);
    }
    handleUserInput(value) {
        this.pageNo = parseInt(value);
    }
    ngOnInit(): void {}
}
