import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-seventy",
    templateUrl: "./card-seventy.component.html",
})
export class CardSeventyComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["S", "S", "M", "T", "W ", "T", "F"],
                datasets: [
                    {
                        data: [0, 10, 20, 30, 50, 40, 90],
                        borderColor: "#EC4899",
                        borderWidth: 2,
                    },
                    {
                        data: [0, 15, 10, 30, 55, 40, 60],
                        borderColor: "#EAB308",
                        borderWidth: 2,
                    },
                    {
                        data: [0, 5, 9, 40, 10, 40, 100],
                        borderColor: "#3B82F6",
                        borderWidth: 2,
                    },
                    {
                        data: [0, 6, 8, 15, 50, 40, 80],
                        borderColor: "#22C55E",
                        borderWidth: 2,
                    },
                ],
            },
            options: {
                elements: {
                    point: {
                        radius: 0,
                        hoverRadius: 3,
                    },
                    line: {
                        fill: false,
                        tension: 0,
                    },
                },
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            display: false,
                            ticks: {
                                min: 0,
                                max: 100,
                            },
                        },
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                        },
                    ],
                },
            },
        });
    }
}
