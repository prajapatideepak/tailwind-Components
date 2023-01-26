import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-twenty-three",
    templateUrl: "./card-twenty-three.component.html",
})
export class CardTwentyThreeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        var ctx = document.getElementById("myChart");
        var chart = new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["Employees", "Customers", "Vendors"],
                datasets: [
                    {
                        borderColor: ["#312E81 ", "#4338CA", "#6366F1"],
                        backgroundColor: ["#312E81 ", "#4338CA", "#6366F1"],
                        data: [13, 24, 63],
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
            },
        });
    }
}
