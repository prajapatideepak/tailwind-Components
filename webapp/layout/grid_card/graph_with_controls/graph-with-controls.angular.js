import { Component, OnInit } from '@angular/core';
declare var Chart;
@Component({
  selector: 'app-graph-with-controls',
  templateUrl: './graph-with-controls.component.html'
})
export class GraphWithControlsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var yLabels = {
        0: "$0",
        6: "$6K",
        10: "$10K",
        14: "$15K",
        20: "$20K",
        40: "$40K",
    };

    var line_chart = new Chart(document.getElementById("line_chart"), {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
            datasets: [
                {
                    data: [6, 8, 20, 18, 10, 10, 16, 16, 19, 16, 14, 10],

                    borderColor: "#F0ABFC",
                    fill: false,
                },
                {
                    data: [10, 12, 6, 17, 18, 8, 19, 14, 12, 10, 8, 6],
                    borderColor: "#FDBA74",
                    fill: false,
                },
            ],
        },
        options: {
            legend: {
                display: false,
            },
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            display: false,
                        },
                        ticks: {
                            beginAtZero: true,
                            callback: function (value, index, values) {
                                return yLabels[value];
                            },
                        },
                    },
                ],
            },
        },
    });
  }

}
