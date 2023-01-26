import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-twenty-five",
    templateUrl: "./card-twenty-five.component.html",
})
export class CardTwentyFiveComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["", "", "", " ", "", ""],
                datasets: [
                    {
                        data: [200, 240, 220, 192, 270, 290],
                        backgroundColor: ["rgba(67,56,202,0.4)"],
                        borderColor: ["#6366F1", "#6366F1", "#6366F1", "#6366F1", "#6366F1", "#6366F1"],
                        borderWidth: 1,
                        pointBackgroundColor: "#6366F1",
                        strokeColor: "#6366F1",
                    },
                ],
            },
            options: {
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
