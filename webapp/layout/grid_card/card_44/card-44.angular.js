import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-fourty-four",
    templateUrl: "./card-fourty-four.component.html",
})
export class CardFourtyFourComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        var ctx = document.getElementById("myChart").getContext("2d");
        var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 300);
        purple_orange_gradient.addColorStop(0, "#FDA4AF");
        purple_orange_gradient.addColorStop(1, "#8B5CF6");

        var red_orange_gradient = ctx.createLinearGradient(0, 0, 0, 300);
        red_orange_gradient.addColorStop(0, "#F87171");
        red_orange_gradient.addColorStop(1, "#FDBA74");

        var data = {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
                {
                    label: "New",
                    backgroundColor: purple_orange_gradient,
                    data: [200, 400, 200, 400, 300, 500, 500],
                },
                {
                    label: "Returning",
                    backgroundColor: red_orange_gradient,
                    data: [300, 300, 600, 300, 100, 600, 600],
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
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                min: 0,
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    xAxes: [
                        {
                            barPercentage: 1.0,
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                },
            },
        });
    }
}
