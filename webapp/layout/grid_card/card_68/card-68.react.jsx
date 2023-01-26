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
                 
                <div className="max-w-xs sm:max-w-sm w-full bg-white pt-6 dark:bg-gray-800 rounded">
                    <div className="pl-8 pr-6">
                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-semibold leading-normal pr-10 sm:pr-32 text-gray-800 dark:text-gray-100">$256.45</p>
                            <div className="w-24 h-6">
                                <div className="flex items-center justify-center px-2 py-1.5 flex-1 h-full bg-indigo-700 rounded-md">
                                    <p className="text-xs font-semibold leading-3 text-right text-white">Planned 30%</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                            <p className="text-xs font-medium leading-3 pl-1 text-green-700">$5.30 (2.40%)</p>
                            <p className="text-xs font-medium leading-3 text-right text-gray-500 dark:text-gray-400">28 days ago</p>
                        </div>
                        <div className="flex items-center justify-between pt-8 pb-2 border-b border-gray-200">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                                    <circle cx="6.5" cy={6} r={6} fill="#E2E8F0" />
                                    <circle cx="6.5" cy={6} r={2} fill="white" />
                                </svg>
                                <p className="text-sm leading-none text-gray-800 dark:text-gray-100 pl-2">Marketing Channels</p>
                            </div>
                            <p className="text-sm leading-none text-right text-gray-800 dark:text-gray-100">$22.0k</p>
                        </div>
                        <div className="flex items-center justify-between pt-4 pb-2 border-b border-gray-200">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                                    <circle cx="6.5" cy={6} r={6} fill="#E2E8F0" />
                                    <circle cx="6.5" cy={6} r={2} fill="white" />
                                </svg>
                                <p className="text-sm leading-none text-gray-800 dark:text-gray-100 pl-2">Direct Sales</p>
                            </div>
                            <p className="text-sm leading-none text-right text-gray-800 dark:text-gray-100">$8.4k</p>
                        </div>
                        <div className="flex items-center justify-between pt-4 pb-2 border-b border-gray-200">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                                    <circle cx="6.5" cy={6} r={6} fill="#E2E8F0" />
                                    <circle cx="6.5" cy={6} r={2} fill="white" />
                                </svg>
                                <p className="text-sm leading-none text-gray-800 dark:text-gray-100 pl-2">Offline Channels</p>
                            </div>
                            <p className="text-sm leading-none text-right text-gray-800 dark:text-gray-100">$18.4k</p>
                        </div>
                        <div className="flex items-center justify-between pt-4 pb-2 ">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                                    <circle cx="6.5" cy={6} r={6} fill="#E2E8F0" />
                                    <circle cx="6.5" cy={6} r={2} fill="white" />
                                </svg>
                                <p className="text-sm leading-none text-gray-800 dark:text-gray-100 pl-2">Other Channels</p>
                            </div>
                            <p className="text-sm leading-none text-right text-gray-800 dark:text-gray-100">$15.3k</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <canvas id="myChart" width={250} height={90} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
