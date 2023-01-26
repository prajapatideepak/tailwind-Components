import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-fourty-nine",
    templateUrl: "./card-fourty-nine.component.html",
})
export class CardFourtyNineComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Complete", "Incomplete"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [12, 82],
                        backgroundColor: ["#ffffff", "#4338CA"],
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
                cutoutPercentage: 92,
            },
        });
    }
}
