import React, { useEffect } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";
export default function IndexPage() {
    useEffect(() => {
        var ctx = document.getElementById("myChart").getContext("2d");
        var purple_white_gradient = ctx.createLinearGradient(0, 0, 0, 300);
        purple_white_gradient.addColorStop(0, "#F9B4BD");
        purple_white_gradient.addColorStop(1, "#9573DB");
        var myChartData = {
            labels: ["S", "M", "T", "W", "T", "F", "S"],
            datasets: [
                {
                    backgroundColor: purple_white_gradient,
                    data: [0, 10, 5, 13, 6, 14, 7, 16, 5, 13],
                },
            ],
        };
        var myBarChart = new Chart(ctx, {
            type: "line",
            data: myChartData,
            options: {
                animation: {
                    onComplete: function () {
                        var controller = this.chart.controller;
                        var chart = controller.chart;
                        var xAxis = controller.scales["x-axis-0"];
                        var numTicks = xAxis.ticks.length;
                        var xOffsetStart = xAxis.width / numTicks;
                        var halfBarWidth = xAxis.width / (numTicks * 2);
                        xAxis.ticks.forEach(function (value, index) {
                            var xOffset = xOffsetStart * index + halfBarWidth;
                            var yOffset = chart.height - 20;
                            ctx.fillStyle = "#333";
                            ctx.fillText(value, xOffset, yOffset);
                        });
                    },
                },
                elements: {
                    point: {
                        radius: 0,
                        pointHoverRadius: 2,
                    },
                },
                generateLabels: {
                    hidden: true,
                },
                legend: {
                    display: false,
                },
                responsive: true,
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontSize: 20,
                                display: false,
                                fontColor: "black",
                                min: 0,
                                max: 20,
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: false,
                        },
                    ],
                },
            },
        });
    });
    return (
        <>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
                <script defer src="https://cdn.tuk.dev/dev/light-dark-switch.js"></script>
            </Helmet>
            <div className="flex items-center justify-center w-full h-full py-12 px-4">
                 
                <div className="max-w-sm bg-white shadow-md pt-6 dark:bg-gray-800 rounded">
                    <p className="text-xl font-semibold leading-5 pl-8 sm:pr-40 pr-10 text-gray-800 dark:text-gray-100">Last 7 day sales</p>
                    <hr className="w-full border-gray-200 mt-4 mb-8" />
                    <div className="pl-8">
                        <p className="sm:text-3xl text-2xl font-semibold leading-7 text-gray-800 dark:text-gray-100">1,969</p>
                        <p className="sm:text-base text-sm font-medium leading-4 pt-2 text-gray-500 dark:text-gray-400">Items Sold</p>
                        <p className="sm:text-3xl text-2xl font-semibold leading-7 pt-6 text-gray-800 dark:text-gray-100">$ 15,467</p>
                        <p className="sm:text-base text-sm font-medium leading-4 pt-2 text-gray-500 dark:text-gray-400">Total Earnings</p>
                    </div>
                    <div>
                        <div className="sm:pt-8">
                            <canvas id="myChart" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
