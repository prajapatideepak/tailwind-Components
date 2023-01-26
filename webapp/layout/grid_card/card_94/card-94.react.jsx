import React, { useEffect } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";
export default function IndexPage() {
    useEffect(() => {
        var ctx = document.getElementById("canvas").getContext("2d");

        var data = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
            datasets: [
                {
                    label: "Earning",
                    backgroundColor: ["#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA"],
                    data: [100, 200, 300, 250, 100, 50, 200, 300, 100],
                    borderColor: "#FFFFFF",
                    borderWidth: 0,
                    fill: false,
                },

                {
                    label: "Expenses",
                    backgroundColor: ["#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24"],
                    data: [-100, -200, -250, -250, -100, -50, -200, -250, -100],
                    borderColor: "#FFFFFF",
                    borderWidth: 0,
                },
            ],
        };

        var myBarChart = new Chart(ctx, {
            type: "bar",
            data: data,
            options: {
                legend: {
                    display: false,
                },
                barValueSpacing: 0,
                barRoundness: 1,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                min: -300,
                                max: 300,
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                        },
                    ],
                    xAxes: [
                        {
                            stacked: true,
                            barPercentage: 0.2,
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                        },
                    ],
                },
            },
        });
        // chart2
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["", "", "", " ", "", ""],
                datasets: [
                    {
                        data: [22, 28, 25, 28, 26, 22],
                        backgroundColor: ["#FFFFFF"],
                        borderColor: ["#4338CA"],

                        borderWidth: 1,
                        strokeColor: "#6366F1",
                        fill: false,
                    },
                    {
                        data: [1, 5, 8, 9, 6, 9],
                        backgroundColor: ["#FFFFFF"],
                        borderColor: ["#4338CA"],
                        borderDash: [5],
                        borderWidth: 1,
                        strokeColor: "#6366F1",
                        fill: false,
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
                                drawBorder: false,
                            },
                            display: false,
                            ticks: {
                                min: 0,
                                max: 30,
                            },
                        },
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                                drawBorder: false,
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
            <div className="flex items-center justify-center py-8">
                <div className="w-full flex items-center justify-center  py-12 sm:px-6 px-4">
                    <div className="sm:max-w-3xl w-full rounded shadow bg-white dark:bg-gray-800">
                         
                        <div className="px-5">
                            <div className="md:flex">
                                <div className="md:w-3/4 py-6 md:pr-7">
                                    <div className="md:flex items-center">
                                        <p className="text-xl font-semibold leading-5 md:pr-48 dark:text-gray-100 text-gray-800">Revenue Report</p>
                                        <div className="flex items-center md:pt-0 pt-4">
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-indigo-700 rounded-full" />
                                                <p className="text-sm leading-none text-gray-500 dark:text-gray-400 pl-2">Earning</p>
                                            </div>
                                            <div className="flex items-center pl-5">
                                                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                                                <p className="text-sm leading-none pl-2 text-gray-500 dark:text-gray-400">Expense</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-full pt-8">
                                        <canvas id="canvas" />
                                    </div>
                                </div>
                                <div className="md:border-l md:py-6 py-4 border-gray-200 md:w-1/4 h-full flex items-center flex-col">
                                    <div className="flex items-center relative  w-20 rounded border border-indigo-700">
                                        <select className="py-1.5 px-3.5 uppercase tracking-normal focus:outline-none text-xs font-semibold leading-none text-center text-indigo-700 appearance-none pr-3.5 z-20 relative bg-transparent w-full">
                                            <option value={2020}>2020</option>
                                            <option value={2019}>2019</option>
                                            <option value={2018}>2018</option>
                                        </select>
                                        <div className="mx-1 absolute right-0 z-10 pointer-event-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-2xl font-medium leading-normal pt-10 text-center dark:text-gray-100 text-gray-800">$25,852</p>
                                    <p className="text-sm leading-none text-center pt-3 text-gray-500 dark:text-gray-400">Budget: 56,800</p>
                                    <div className="px-11 pt-8">
                                        <canvas id="myChart" width={130} />
                                    </div>
                                    <button className="text-sm mt-12 mb-6 font-medium leading-none text-center text-white py-2.5 px-5 rounded bg-indigo-700 hover:bg-indigo-600">Increase Budget</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
