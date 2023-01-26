import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-large-typography-with-gradient-and-glass-effect",
    templateUrl: "./large-typography-with-gradient-and-glass-effect.component.html",
    styleUrls: ["./large-typography-with-gradient-and-glass-effect.component.css"],
})
export class LargeTypographyWithGradientAndGlassEffectComponent implements OnInit {
    constructor() {}
   isList;
    MenuHandler(flag) {
        flag ? (this.isList = true) : (this.isList = false);
    }
    ngOnInit(): void {}
}
