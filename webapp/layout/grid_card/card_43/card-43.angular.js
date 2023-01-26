import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-fourty-three",
    templateUrl: "./card-fourty-three.component.html",
})
export class CardFourtyThreeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        var ctx = document.getElementById("myChart").getContext("2d");
        var gradientColors = [
            {
                start: "#F9B4BD",
                end: "#9573DB",
            },
        ];
        var gradients = [];
        gradientColors.forEach(function (item) {
            var gradient = ctx.createLinearGradient(150, 0, 0, 80);
            gradient.addColorStop(0, item.start);
            gradient.addColorStop(1, item.end);
            gradients.push(gradient);
        });

        var gradientColors2 = [
            {
                start: "#44DEC5",
                end: "#4EBCFA",
            },
        ];
        var gradients2 = [];
        gradientColors2.forEach(function (item) {
            var gradient2 = ctx.createLinearGradient(20, 0, 0, 80);
            gradient2.addColorStop(0, item.start);
            gradient2.addColorStop(1, item.end);
            gradients2.push(gradient2);
        });

        var data = {
            labels: ["Info 1", "Info 2", "Info 3"],
            datasets: [
                { borderWidth: 0, data: [76, 24], backgroundColor: gradients },
                {
                    weight: 0.4,
                },
                { borderWidth: 0, data: [53, 47], backgroundColor: gradients2 },
                {
                    weight: 0.4,
                },
            ],
        };

        var myBarChart = new Chart(ctx, {
            type: "doughnut",
            data: data,
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
        });
    }
}
