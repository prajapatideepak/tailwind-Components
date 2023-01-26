import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-twenty-seven",
    templateUrl: "./card-twenty-seven.component.html",
})
export class CardTwentySevenComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["PCI", "JBOD", "", ""],

                datasets: [
                    {
                        label: "Series 2",
                        data: [20, 22, 16, 15],
                        fill: true,
                        borderColor: " rgba(253, 230, 138, 0.5)",
                        backgroundColor: " rgba(253, 230, 138, 0.8)",
                        borderWidth: 1,
                    },
                    {
                        label: "Series 2",
                        data: [50, 35, 40, 0],
                        fill: true,
                        borderColor: " rgba(252, 231, 243, 0.5) ",
                        backgroundColor: " rgba(252, 231, 243, 0.8) ",
                        borderWidth: 1,
                    },
                    {
                        label: "Series 1",
                        data: [11, 16, 48, 25],
                        fill: true,
                        borderColor: "rgba(124,58,237,1) ",
                        backgroundColor: " rgba(124,58,237,1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                elements: {
                    point: {
                        radius: 0,
                    },
                },
                responsive: true,

                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [
                        {
                            display: false,
                            gridLines: {
                                display: true,
                                color: "rgba(219,219,219,0.3)",
                                borderDash: [8, 4],

                                drawBorder: false,
                                zeroLineWidth: 2,
                            },
                            ticks: {
                                beginAtZero: true,
                                display: false,
                                border: false,
                                max: 50,
                                min: 0,
                                stepSize: 25,
                            },
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
