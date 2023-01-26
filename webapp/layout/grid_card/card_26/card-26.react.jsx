import React, { useEffect } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";
export default function IndexPage() {
    useEffect(() => {
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
            type: "horizontalBar",
            data: {
                labels: ["PCI", "JBOD", "IB", "SMS ", "XML", "AGP", "SDD", "SMTP"],

                datasets: [
                    {
                        data: [290, 289, 288, 280, 276, 274, 270, 269],
                        borderColor: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
                        backgroundColor: ["#312E81", "#3730a8", "#4338ca", "#4f46ef", "#6366F1", "#818cf8", "#A5B4FC", "#C7D2FE"],
                        borderWidth: 1,
                        pointBackgroundColor: "#6366F1",
                        strokeColor: "#6366F1",
                        barThickness: ["16px"],
                    },
                ],
            },
            options: {
                elements: {
                    rectangle: {
                        borderWidth: 2,
                    },
                },
                responsive: true,
                generateLabels: {
                    hidden: true,
                },
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            categoryPercentage: 1.0,
                            barPercentage: 1.0,
                            display: false,
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
                animation: {
                    duration: 500,
                    easing: "easeOutQuart",
                    onComplete: function () {
                        var ctx = this.chart.ctx;
                        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, "normal", Chart.defaults.global.defaultFontFamily);
                        ctx.textAlign = "left";
                        ctx.textBaseline = "bottom";

                        this.data.datasets.forEach(function (dataset) {
                            console.log(dataset);
                            for (var i = 0; i < dataset.data.length; i++) {
                                var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                                    scale_max = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._yScale.maxHeight;
                                left = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._xScale.left;
                                offset = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._xScale.longestLabelWidth;
                                ctx.fillStyle = "#FFFFFF";
                                var y_pos = model.y - 8;
                                var label = model.label;
                                if ((scale_max - model.y) / scale_max >= 0.93) y_pos = model.y + 20;
                                ctx.fillText(label, left + 10, model.y + 8);
                            }
                        });
                    },
                },
            },
        });
    }, []);
    return (
        <>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
                <script defer src="https://cdn.tuk.dev/dev/light-dark-switch.js"></script>
            </Helmet>
            <div className="flex items-center justify-center py-8 px-4">
                 
                <div className="md:w-96 w-80  rounded shadow-lg dark:bg-gray-800 bg-white p-4">
                    <p className=" text-lg font-bold leading-3 dark:text-gray-100 text-gray-800">Runtime Comparison</p>
                    <input type="date" className="mt-3 w-full text-xs leading-3 text-gray-600 py-2 dark:bg-gray-700 dark:text-gray-100 bg-gray-100 px-2 focus:ouline-none" />
                    <div className="w-full pt-7 flex items-center justify-center">
                        <div className="w-full h-full">
                            <canvas id="myChart" width="250px" height="181px" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
