import React, { useEffect } from "react";
import Head from "next/head";

function Index() {
    useEffect(() => {
        let yLabels = {
            0: "$0",
            6: "$6K",
            10: "$10K",
            14: "$15K",
            20: "$20K",
            40: "$40K",
        };

        let line_chart = new Chart(document.getElementById("line_chart"), {
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
    });
    return (
        <>
            <Head>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
            </Head>
            <div className="xl:w-3/4 2xl:w-4/5 w-full bg-white md:p-10 p-4 rounded-lg shadow">
                <div className="lg:flex justify-between w-full items-center">
                    <div className="py-3 md:px-4 flex items-center bg-gray-50 rounded-xl">
                        <p className="text-xs font-medium leading-none text-center text-gray-500">Show:</p>
                        <div className="px-2 sm:px-3.5 border-r border-gray-300">
                            <p className="text-xs leading-none text-gray-800">Hour</p>
                        </div>
                        <div className="px-2 sm:px-3.5 border-r border-gray-300">
                            <p className="text-xs leading-none text-gray-800">Day</p>
                        </div>
                        <div className="px-2 sm:px-3.5 border-r border-gray-300">
                            <p className="text-xs leading-none text-gray-800">Week</p>
                        </div>
                        <div className="px-2 sm:px-3.5 border-r border-gray-300">
                            <p className="text-xs leading-none text-gray-800">Month</p>
                        </div>
                        <div className="px-2 sm:px-3.5">
                            <p className="text-xs font-bold leading-none text-indigo-700">Year</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 lg:mt-0">
                        <div className="flex items-center">
                            <div className="w-4 h-4 bg-pink-300 rounded-full" />
                            <p className="w-20 text-xs leading-none ml-1.5">Components</p>
                        </div>
                        <div className="flex items-center ml-4">
                            <div className="w-4 h-4 bg-yellow-300 rounded-full" />
                            <p className="w-20 text-xs leading-none ml-1.5">Templates</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="chartjs-size-monitor">
                        <div className="chartjs-size-monitor-expand">
                            <div className />
                        </div>
                        <div className="chartjs-size-monitor-shrink">
                            <div className />
                        </div>
                    </div>
                    <canvas id="line_chart" height={528} width={1760} style={{ display: "block", height: 264, width: 880 }} className="chartjs-render-monitor" />
                </div>
            </div>
        </>
    );
}

export default Index;
