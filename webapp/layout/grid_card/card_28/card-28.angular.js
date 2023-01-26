import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-twenty-eight",
    templateUrl: "./card-twenty-eight.component.html",
})
export class CardTwentyEightComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        var config = {
            type: "doughnut",
            data: {
                datasets: [
                    { borderWidth: 0, data: [76, 24], backgroundColor: ["#6366F1"] },
                    {
                        weight: 0.6,
                    },
                    { borderWidth: 0, data: [53, 47], backgroundColor: ["#A855F7"] },
                    {
                        weight: 0.6,
                    },
                    { borderWidth: 0, data: [60, 40], backgroundColor: ["#EC4899"] },
                    {
                        weight: 0.6,
                    },
                    {
                        borderWidth: 0,
                        data: [33, 67],
                        backgroundColor: ["#EAB308"],

                        label: "Doughnut 2",
                    },
                ],
                labels: ["Info 1", "Info 2", "Info 3"],
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
            },
        };
        window.onload = function () {
            var ctx = document.getElementById("myChart");
            window.myDoughnut = new Chart(ctx, config);
        };
    }
}
