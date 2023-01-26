import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
})
export class CardComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        const canvas = document.getElementById("myChart") as HTMLCanvasElement;
        var ctx = canvas.getContext("2d");

        var gradient = ctx.createLinearGradient(2, 0, 0, 70);
        gradient.addColorStop(0, "#BFDBFE");
        gradient.addColorStop(1, "#EFF6FF");
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                    {
                        label: "",
                        borderColor: "#1D4ED8",
                        data: [5, 9, 3, 9, 4, 9, 6, 0],
                        backgroundColor: gradient,
                        pointBackgroundColor: "#1D4ED8",
                        borderWidth: "2",
                    },
                ],
            },
            options: {
                legend: {
                    position: false,
                },
                ticks: {
                    beginAtZero: true,
                    steps: 2,
                    stepValue: 2,
                    max: 10,
                },
                elements: {
                    point: {
                        radius: 0,
                    },
                },
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            display: false,
                        },
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            display: false,
                        },
                    ],
                },
            },
        });
        // chart 2
        const canvas1 = document.getElementById("myChart2") as HTMLCanvasElement;
        var ctx = canvas1.getContext("2d");

        var gradient2 = ctx.createLinearGradient(2, 0, 0, 70);
        gradient2.addColorStop(0, "#C7D2FE");
        gradient2.addColorStop(1, "#EFF6FF");
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                    {
                        label: "",
                        borderColor: "#4338CA",
                        data: [5, 9, 3, 9, 4, 9, 6, 0],
                        backgroundColor: gradient2,
                        pointBackgroundColor: "#1D4ED8",
                        borderWidth: "2",
                    },
                ],
            },
            options: {
                legend: {
                    position: false,
                },
                ticks: {
                    beginAtZero: true,
                    steps: 2,
                    stepValue: 2,
                    max: 10,
                },
                elements: {
                    point: {
                        radius: 0,
                    },
                },
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            display: false,
                        },
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            display: false,
                        },
                    ],
                },
            },
        });
        // chart 3
        const canvas2 = document.getElementById("myChart3") as HTMLCanvasElement;
        var ctx = canvas2.getContext("2d");

        var gradient3 = ctx.createLinearGradient(2, 0, 0, 70);
        gradient3.addColorStop(0, "#DDD6FE");
        gradient3.addColorStop(1, "#EFF6FF");
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                    {
                        label: "",
                        borderColor: "#6D28D9",
                        data: [5, 9, 3, 9, 4, 9, 6, 0],
                        backgroundColor: gradient3,
                        pointBackgroundColor: "#1D4ED8",
                        borderWidth: "2",
                    },
                ],
            },
            options: {
                legend: {
                    position: false,
                },
                ticks: {
                    beginAtZero: true,
                    steps: 2,
                    stepValue: 2,
                    max: 10,
                },
                elements: {
                    point: {
                        radius: 0,
                    },
                },
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            display: false,
                        },
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            display: false,
                        },
                    ],
                },
            },
        });
    }
}
