import React, { useEffect } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";
export default function IndexPage() {
    useEffect(() => {
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["", "", "", " ", "", ""],
                datasets: [
                    {
                        data: [1, 10, 6, 11, 6, 12],
                        backgroundColor: ["#4338CA"],
                        borderWidth: 0,
                        strokeColor: "#6366F1",
                    },
                    {
                        data: [10, 6, 8, 14, 9, 15],
                        backgroundColor: ["#E0E7FF"],
                        borderWidth: 0,
                    },
                ],
            },
            options: {
                elements: {
                    point: {
                        radius: 0,
                    },
                },
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
                            display: false,
                            ticks: {
                                min: 0,
                                max: 20,
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
    });
    return (
        <>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
                <script defer src="https://cdn.tuk.dev/dev/light-dark-switch.js"></script>
            </Helmet>
            <div className="flex items-center justify-center w-full h-full py-12 px-4">
                 
                <div className="max-w-sm w-full bg-white pt-6 dark:bg-gray-800 rounded">
                    <div className="pl-8 pr-6">
                        <div className="flex items-center justify-between">
                            <p className="sm:pr-48 pr-10 text-xs font-medium leading-3 text-gray-500 dark:text-gray-400">Progress</p>
                            <div className="w-8 h-6">
                                <div className="flex items-center justify-center px-1 py-1.5 flex-1 h-full bg-green-100 rounded">
                                    <p className="text-xs font-semibold leading-3 text-right text-green-700">30%</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-4xl font-semibold leading-9 pt-3 text-gray-800 dark:text-gray-100">74</p>
                        <p className="text-xs font-medium leading-3 pt-1 text-indigo-700">Task pending</p>
                        <div className="flex items-start justify-between pt-7">
                            <div className="flex items-start">
                                <div className="opacity-20 w-1 h-9 bg-indigo-700 rounded-sm" />
                                <div className="flex flex-col pl-3">
                                    <p className="text-lg leading-none text-gray-800 dark:text-gray-100">To do</p>
                                    <p className="text-sm font-medium pt-1 leading-none text-gray-500 dark:text-gray-400">Assigned tasks</p>
                                </div>
                            </div>
                            <p className="text-xl font-semibold leading-5 text-right text-gray-800 dark:text-gray-100">74</p>
                        </div>
                        <div className="flex items-start justify-between pt-4">
                            <div className="flex items-start">
                                <div className="w-1 h-9 bg-indigo-700 rounded-sm" />
                                <div className="flex flex-col pl-3">
                                    <p className="text-lg leading-none text-gray-800 dark:text-gray-100">Done</p>
                                    <p className="text-sm font-medium pt-1 leading-none text-gray-500 dark:text-gray-400">Completed tasks</p>
                                </div>
                            </div>
                            <p className="text-xl font-semibold leading-5 text-right text-gray-800 dark:text-gray-100">228</p>
                        </div>
                    </div>
                    <div className="pt-6">
                        <div className="w-full h-full">
                            <canvas id="myChart" width={250} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
