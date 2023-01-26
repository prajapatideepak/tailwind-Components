import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-ninety",
    templateUrl: "./card-ninety.component.html",
})
export class CardNinetyComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Employees", "Customers", "Vendors"],
                datasets: [
                    {
                        borderColor: ["#A7F3D0 ", "#059669", "#34D399"],
                        backgroundColor: ["#A7F3D0 ", "#059669", "#34D399"],
                        data: [13, 24, 23],
                    },
                ],
            },
            options: {
                responsive: true,
                legend: {
                    display: false,
                },
                animation: {
                    animateScale: true,
                    animateRotate: true,
                },
                cutoutPercentage: 70,
            },
        });
    }
}
