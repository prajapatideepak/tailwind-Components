import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-centre-aligned-simple",
    templateUrl: "./centre-aligned-simple.component.html",
})
export class CentreAlignedSimpleComponent implements OnInit {
    constructor() {}
     isList;
    MenuHandler(flag) {
        flag ? (this.isList = true) : (this.isList = false);
    }
    ngOnInit(): void {}
}
