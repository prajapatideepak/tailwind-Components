import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-hero1",
    templateUrl: "./hero1.component.html",
})
export class Hero1Component implements OnInit {
    constructor() {}

    slides;
    slides2;
    slides3;
    slideSayisi;
    slideSayisi2;
    slideSayisi3;
    loop;
    loop2;
    loop3;
    goNext() {
        this.loop++;
        for (let index = 0; index < this.slides.length; index++) {
            const element: any = this.slides[index];
            element.style.transform = "translateX(" + 100 * (index - (this.loop % this.slideSayisi)) + "%)";
        }
    }
    goNext2() {
        this.loop2++;
        for (let index = 0; index < this.slides2.length; index++) {
            const element: any = this.slides2[index];
            element.style.transform = "translateX(" + 100 * (index - (this.loop2 % this.slideSayisi2)) + "%)";
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
    goPrev2() {
        this.loop2--;
        for (let index = 0; index < this.slides2.length; index++) {
            const element: any = this.slides2[index];
            element.style.transform = "translateX(" + 100 * (index - (this.loop2 % this.slideSayisi2)) + "%)";
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
        this.slides2 = document.querySelectorAll(".slide-ana2>div");
        this.slides3 = document.querySelectorAll(".slide-ana3>div");
        this.slideSayisi = this.slides.length;
        this.slideSayisi2 = this.slides2.length;
        this.slideSayisi3 = this.slides3.length;

        for (let index = 0; index < this.slides.length; index++) {
            const element: any = this.slides[index];
            element.style.transform = "translateX(" + 100 * index + "%)";
        }
        this.loop = 0 + 1000 * this.slideSayisi;

        for (let index = 0; index < this.slides2.length; index++) {
            const element: any = this.slides2[index];
            element.style.transform = "translateX(" + 100 * index + "%)";
        }
        this.loop2 = 0 + 1000 * this.slideSayisi2;

        for (let index = 0; index < this.slides3.length; index++) {
            const element: any = this.slides3[index];
            element.style.transform = "translateX(" + 100 * index + "%)";
        }
        this.loop3 = 0 + 1000 * this.slideSayisi3;
    }
}
