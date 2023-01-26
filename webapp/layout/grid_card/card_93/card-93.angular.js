import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-ninety-three",
    templateUrl: "./card-ninety-three.component.html",
})
export class CardNinetyThreeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        const canvas = document.getElementById("myChart") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d");
        var green_blue_gradient = ctx.createLinearGradient(0, 0, 0, 300);
        green_blue_gradient.addColorStop(0, "#6EE7B7");
        green_blue_gradient.addColorStop(1, "#38BDF8");
        var myChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Purple"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [86, 60],
                        backgroundColor: [green_blue_gradient],
                        borderColor: ["rgba(255, 255, 255 ,1)"],
                        borderWidth: 0,
                        borderRadius: 10,
                    },
                ],
            },
            options: {
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI,
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
                cutoutPercentage: 85,
            },
        });
    }
}
