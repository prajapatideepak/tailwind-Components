import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-twenty",
    templateUrl: "./card-twenty.component.html",
})
export class CardTwentyComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Complete"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [25, 75],
                        backgroundColor: ["#4338CA"],
                        borderColor: ["rgba(255, 255, 255 ,1)"],
                        borderWidth: 0,
                        borderRadius: 2,
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
                cutoutPercentage: 83,
            },
        });
    }
}
