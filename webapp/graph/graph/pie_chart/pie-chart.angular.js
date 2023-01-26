import { Component, OnInit } from "@angular/core";
declare var Chart;
@Component({
    selector: "app-pie-chart",
    templateUrl: "./pie-chart.component.html",
})
export class PieChartComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        const myBarChart2 = new Chart(document.getElementById("chartjs-2"), {
            type: "pie",
            data: { labels: ["Accepted", "Rejected", "Pending", "Approved"], datasets: [{ data: [60, 12, 12, 25], fill: false, backgroundColor: [" #312E81", " #4338CA", " #4F46E5", " #4338CA"] }] },
            options: {
                legend: {
                    position: false,
                },
            },
        });
    }
}
