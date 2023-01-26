import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-right-aligned-three-placeholders-with-slider",
    templateUrl: "./right-aligned-three-placeholders-with-slider.component.html",
})
export class RightAlignedThreePlaceholdersWithSliderComponent implements OnInit {
    constructor() {}
    slides;
    slides3;
    slideSayisi;
    slideSayisi3;
    loop;
    loop3;
    goNext() {
        this.loop++;
        for (let index = 0; index < this.slides.length; index++) {
            const element: any = this.slides[index];
            element.style.transform = "translateX(" + 100 * (index - (this.loop % this.slideSayisi)) + "%)";
        }
    }
    goNext3() {
        this.loop3++;
        for (let index = 0; index < this.slides3.length; index++) {
            const element: any = this.slides3[index];
            element.style.transform = "translateX(" + 100 * (index - (this.loop3 % this.slideSayisi3)) + "%)";
        }
    }

    goPrev() {
        this.loop--;
        for (let index = 0; index < this.slides.length; index++) {
            const element: any = this.slides[index];
            element.style.transform = "translateX(" + 100 * (index - (this.loop % this.slideSayisi)) + "%)";
        }
    }
    goPrev3() {
        this.loop3--;
        for (let index = 0; index < this.slides3.length; index++) {
            const element: any = this.slides3[index];
            element.style.transform = "translateX(" + 100 * (index - (this.loop3 % this.slideSayisi3)) + "%)";
        }
    }

    ngOnInit(): void {
        this.slides = document.querySelectorAll(".slide-ana>div");
        this.slides3 = document.querySelectorAll(".slide-ana3>div");
        this.slideSayisi = this.slides.length;
        this.slideSayisi3 = this.slides3.length;

        for (let index = 0; index < this.slides.length; index++) {
            const element: any = this.slides[index];
            element.style.transform = "translateX(" + 100 * index + "%)";
        }
        this.loop = 0 + 1000 * this.slideSayisi;
        for (let index = 0; index < this.slides3.length; index++) {
            const element: any = this.slides3[index];
            element.style.transform = "translateX(" + 100 * index + "%)";
        }
        this.loop3 = 0 + 1000 * this.slideSayisi3;
    }
}
