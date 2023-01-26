import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-ninety-four",
    templateUrl: "./card-ninety-four.component.html",
})
export class CardNinetyFourComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d");

        var data = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
            datasets: [
                {
                    label: "Earning",
                    backgroundColor: ["#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA"],
                    data: [100, 200, 300, 250, 100, 50, 200, 300, 100],
                    borderColor: "#FFFFFF",
                    borderWidth: 0,
                    fill: false,
                },

                {
                    label: "Expenses",
                    backgroundColor: ["#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24"],
                    data: [-100, -200, -250, -250, -100, -50, -200, -250, -100],
                    borderColor: "#FFFFFF",
                    borderWidth: 0,
                },
            ],
        };

        var myBarChart = new Chart(ctx, {
            type: "bar",
            data: data,
            options: {
                legend: {
                    display: false,
                },
                barValueSpacing: 0,
                barRoundness: 1,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                min: -300,
                                max: 300,
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                        },
                    ],
                    xAxes: [
                        {
                            stacked: true,
                            barPercentage: 0.2,
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                        },
                    ],
                },
            },
        });
        // chart2
        const canvas2 = document.getElementById("myChart") as HTMLCanvasElement;
        const ctx2 = canvas2.getContext("2d");
        var myChart = new Chart(ctx2, {
            type: "line",
            data: {
                labels: ["", "", "", " ", "", ""],
                datasets: [
                    {
                        data: [18, 29, 25, 28, 26, 22],
                        backgroundColor: ["#FFFFFF"],
                        borderColor: ["#4338CA"],

                        borderWidth: 1,
                        strokeColor: "#6366F1",
                        fill: false,
                    },
                    {
                        data: [1, 5, 8, 9, 6, 9],
                        backgroundColor: ["#FFFFFF"],
                        borderColor: ["#4338CA"],
                        borderDash: [5],
                        borderWidth: 1,
                        strokeColor: "#6366F1",
                        fill: false,
                    },
                ],
            },
            options: {
                elements: {
                    point: {
                        radius: 0,
                    },
                },
                generateLabels: {
                    hidden: true,
                },
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                            display: false,
                            ticks: {
                                min: 0,
                                max: 30,
                            },
                        },
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                            display: false,
                        },
                    ],
                },
            },
        });
    }
}
