import { Component, OnInit } from "@angular/core";
declare var Chart;
@Component({
    selector: "app-bar-chart",
    templateUrl: "./bar-chart.component.html",
})
export class BarChartComponent implements OnInit {
    constructor() {}
    public popup_calender = (flag) => {
        if (flag) {
            document.getElementById("popup_calender").classList.add("block");
            document.getElementById("popup_calender").classList.remove("hidden");
        } else {
            document.getElementById("popup_calender").classList.add("hidden");
            document.getElementById("popup_calender").classList.remove("block");
        }
    };
    ngOnInit(): void {
        const myBarChart = new Chart(document.getElementById("chartjs-1"), {
            type: "bar",
            data: { labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], datasets: [{ data: [25, 55, 100, 75, 60, 60, 120, 150, 40, 0], fill: false, backgroundColor: "#4338CA" }] },
            options: {
                scales: [{ yAxes: [{ ticks: { beginAtZero: true } }] }],
                legend: {
                    position: false,
                },
            },
        });
    }
}
