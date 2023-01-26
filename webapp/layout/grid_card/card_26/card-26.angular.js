import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-twenty-six",
    templateUrl: "./card-twenty-six.component.html",
})
export class CardTwentySixComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: "horizontalBar",
            data: {
                labels: ["PCI", "JBOD", "IB", "SMS ", "XML", "AGP", "SDD", "SMTP"],

                datasets: [
                    {
                        data: [290, 289, 288, 280, 276, 274, 270, 269],
                        borderColor: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
                        backgroundColor: ["#312E81", "#3730a8", "#4338ca", "#4f46ef", "#6366F1", "#818cf8", "#A5B4FC", "#C7D2FE"],
                        borderWidth: 1,
                        pointBackgroundColor: "#6366F1",
                        strokeColor: "#6366F1",
                        barThickness: ["16px"],
                    },
                ],
            },
            options: {
                elements: {
                    rectangle: {
                        borderWidth: 2,
                    },
                },
                responsive: true,
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
                            categoryPercentage: 1.0,
                            barPercentage: 1.0,
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
                animation: {
                    duration: 500,
                    easing: "easeOutQuart",
                    onComplete: function () {
                        var ctx = this.chart.ctx;
                        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, "normal", Chart.defaults.global.defaultFontFamily);
                        ctx.textAlign = "left";
                        ctx.textBaseline = "bottom";

                        this.data.datasets.forEach(function (dataset) {
                            for (var i = 0; i < dataset.data.length; i++) {
                                var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                                    scale_max = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._yScale.maxHeight;
                                let left = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._xScale.left;
                                let offset = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._xScale.longestLabelWidth;
                                ctx.fillStyle = "#FFFFFF";
                                var y_pos = model.y - 8;
                                var label = model.label;
                                if ((scale_max - model.y) / scale_max >= 0.93) y_pos = model.y + 20;
                                ctx.fillText(label, left + 10, model.y + 8);
                            }
                        });
                    },
                },
            },
        });
    }
}
