import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-sixty-eight",
    templateUrl: "./card-sixty-eight.component.html",
})
export class CardSixtyEightComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["", "", "", " ", "", ""],
                datasets: [
                    {
                        data: [1, 10, 6, 11, 6, 12],
                        backgroundColor: ["#4338CA"],
                        borderWidth: 0,
                        strokeColor: "#6366F1",
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
                            },
                            display: false,
                            ticks: {
                                min: 0,
                                max: 20,
                            },
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
