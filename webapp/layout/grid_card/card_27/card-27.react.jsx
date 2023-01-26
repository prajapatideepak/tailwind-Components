import React, { useEffect } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";
export default function IndexPage() {
    useEffect(() => {
        var ctx = document.getElementById("myChart").getContext("2d");
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
    }, []);
    return (
        <>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
                <script defer src="https://cdn.tuk.dev/dev/light-dark-switch.js"></script>
            </Helmet>
            <div className="flex items-center justify-center py-8 px-4">
                 
                <div className="w-80  rounded shadow-lg bg-white dark:bg-gray-800">
                    <div className="px-5 py-4">
                        <p className="text-xs leading-3 tracking-tighter text-gray-600 dark:text-gray-100">Expenses</p>
                        <div className="md:flex items-end pt-2">
                            <p className="text-lg font-bold leading-4 text-gray-800 dark:text-gray-100">Q2, 2021</p>
                            <p className="text-xs md:pl-1.5 md:mt-0 mt-2 leading-3 text-green-500">5.6% average decrease</p>
                        </div>
                        <div className="pt-10">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 mr-1 bg-purple-600 rounded-full" />
                                    <p className="text-xs leading-3 text-purple-600">HR</p>
                                </div>
                                <div className="ml-5 flex items-center">
                                    <div className="w-2 h-2 mr-1 bg-pink-600 rounded-full" />
                                    <p className="text-xs leading-3 text-pink-600">Marketing</p>
                                </div>
                                <div className="ml-5 flex items-center">
                                    <div className="w-2 h-2 mr-1 bg-yellow-500 rounded-full" />
                                    <p className="text-xs leading-3 text-yellow-500">Operations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full pt-7 flex items-center justify-center">
                        <div className=" w-full">
                            <canvas id="myChart" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
