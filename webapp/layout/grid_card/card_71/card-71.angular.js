import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-seventy-one",
    templateUrl: "./card-seventy-one.component.html",
})
export class CardSeventyOneComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        var ctx = document.getElementById("myChart").getContext("2d");
        var purple_white_gradient = ctx.createLinearGradient(0, 0, 0, 300);
        purple_white_gradient.addColorStop(0, "#F9B4BD");
        purple_white_gradient.addColorStop(1, "#9573DB");
        var myChartData = {
            labels: ["S", "M", "T", "W", "T", "F", "S"],
            datasets: [
                {
                    backgroundColor: purple_white_gradient,
                    data: [0, 10, 5, 13, 6, 14, 7, 16, 5, 13],
                },
            ],
        };
        var myBarChart = new Chart(ctx, {
            type: "line",
            data: myChartData,
            options: {
                animation: {
                    onComplete: function () {
                        var controller = this.chart.controller;
                        var chart = controller.chart;
                        var xAxis = controller.scales["x-axis-0"];
                        var numTicks = xAxis.ticks.length;
                        var xOffsetStart = xAxis.width / numTicks;
                        var halfBarWidth = xAxis.width / (numTicks * 2);
                        xAxis.ticks.forEach(function (value, index) {
                            var xOffset = xOffsetStart * index + halfBarWidth;
                            var yOffset = chart.height - 20;
                            ctx.fillStyle = "#333";
                            ctx.fillText(value, xOffset, yOffset);
                        });
                    },
                },
                elements: {
                    point: {
                        radius: 0,
                        pointHoverRadius: 2,
                    },
                },
                generateLabels: {
                    hidden: true,
                },
                legend: {
                    display: false,
                },
                responsive: true,
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontSize: 20,
                                display: false,
                                fontColor: "black",
                                min: 0,
                                max: 20,
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: false,
                        },
                    ],
                },
            },
        });
    }
}
