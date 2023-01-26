import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-six",
    templateUrl: "./card-six.component.html",
})
export class CardSixComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
            type: "radar",
            data: {
                labels: ["Development", "Design", "Finance", "Quality Assurance", "Operations", "Marketing"],
                datasets: [
                    {
                        data: [-11, 19, 3, 5, -2, 3],
                        backgroundColor: ["rgba(236, 72, 153,0.2)"],
                        borderColor: ["#EC4899", "#EC4899", "#EC4899", "#EC4899", "#EC4899", "#EC4899"],
                        borderWidth: 0,
                        pointBackgroundColor: "rgba(245, 15, 15, 1)",
                        strokeColor: "rgba(245, 15, 15, 1)",
                    },
                    {
                        data: [-15, 10, 13, 7, -12, 8],
                        backgroundColor: ["rgba(67,56,202,0.2)"],
                        borderColor: ["#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA"],
                        borderWidth: 0,
                        pointBackgroundColor: "rgba(67,56,202,1)",
                        strokeColor: "rgba(245, 15, 15, 1)",
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                scale: {
                    ticks: {
                        display: false,
                    },
                },
            },
        });
    }
}
