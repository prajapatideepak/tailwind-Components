import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-tst15",
    templateUrl: "./tst15.component.html",
})
export class Tst15Component implements OnInit {
    constructor() {}
    slides;
    slideSayisi;
    loop;
    goNext() {
        this.loop++;
        for (let index = 0; index < this.slides.length; index++) {
            const element: any = this.slides[index];
            element.style.transform = "translateX(" + 100 * (index - (this.loop % this.slideSayisi)) + "%)";
        }
    }

    goPrev() {
        this.loop--;
        for (let index = 0; index < this.slides.length; index++) {
            const element: any = this.slides[index];
            element.style.transform = "translateX(" + 100 * (index - (this.loop % this.slideSayisi)) + "%)";
        }
    }

    ngOnInit(): void {
        this.slides = document.querySelectorAll(".slide-ana>div");
        this.slideSayisi = this.slides.length;

        for (let index = 0; index < this.slides.length; index++) {
            const element: any = this.slides[index];
            element.style.transform = "translateX(" + 100 * index + "%)";
        }
        this.loop = 0 + 1000 * this.slideSayisi;
    }
}
