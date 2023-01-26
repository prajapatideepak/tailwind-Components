import React, { useEffect } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";
export default function IndexPage() {
    useEffect(() => {
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["S", "S", "M", "T", "W ", "T", "F"],
                datasets: [
                    {
                        data: [0, 10, 20, 30, 50, 40, 90],
                        borderColor: "#EC4899",
                        borderWidth: 2,
                    },
                    {
                        data: [0, 15, 10, 30, 55, 40, 60],
                        borderColor: "#EAB308",
                        borderWidth: 2,
                    },
                    {
                        data: [0, 5, 9, 40, 10, 40, 100],
                        borderColor: "#3B82F6",
                        borderWidth: 2,
                    },
                    {
                        data: [0, 6, 8, 15, 50, 40, 80],
                        borderColor: "#22C55E",
                        borderWidth: 2,
                    },
                ],
            },
            options: {
                elements: {
                    point: {
                        radius: 0,
                        hoverRadius: 3,
                    },
                    line: {
                        fill: false,
                        tension: 0,
                    },
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
                            display: false,
                            ticks: {
                                min: 0,
                                max: 100,
                            },
                        },
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
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
                 
                <div className="bg-white max-w-xs  dark:bg-gray-800 shadow rounded py-6 px-8">
                    <p className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-100">Updates</p>
                    <div className="flex items-center flex-wrap mt-4">
                        <div className="flex items-center">
                            <div className="w-3.5 h-3.5 bg-pink-500 rounded-full" />
                            <p className="text-xs leading-3 ml-1 text-gray-800 dark:text-gray-100">Option1</p>
                        </div>
                        <div className="flex items-center ml-6">
                            <div className="w-3.5 h-3.5 bg-yellow-500 rounded-full" />
                            <p className="text-xs leading-3 ml-1 text-gray-800 dark:text-gray-100">Option2</p>
                        </div>
                        <div className="flex items-center ml-6">
                            <div className="w-3.5 h-3.5 bg-green-500 rounded-full" />
                            <p className="text-xs leading-3 ml-1 text-gray-800 dark:text-gray-100">Option3</p>
                        </div>
                        <div className="flex items-center mt-3">
                            <div className="w-3.5 h-3.5 bg-blue-500 rounded-full" />
                            <p className="text-xs leading-3 ml-1 text-gray-800 dark:text-gray-100">Option4</p>
                        </div>
                    </div>
                    <canvas id="myChart" height="250px" />
                </div>
            </div>
        </>
    );
}
