import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-twenty-four",
    templateUrl: "./card-twenty-four.component.html",
})
export class CardTwentyFourComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        var ctx = document.getElementById("myChart");

        var myChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Completed"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [86, 60],
                        backgroundColor: ["#6366F1"],
                        borderColor: ["rgba(255, 255, 255 ,1)"],
                        borderWidth: 0,
                        borderRadius: 10,
                    },
                ],
            },
            options: {
                rotation: 1 * Math.PI /** This is where you need to work out where 89% is */,
                circumference: 1 * Math.PI /** put in a much smaller amount  so it does not take up an entire semi circle */,
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
                cutoutPercentage: 90,
            },
        });
    }
}
