import React, { useEffect } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";

export default function IndexPage() {
    useEffect(() => {
        let ctx = document.getElementById("myChart").getContext("2d");
        let myChart = new Chart(ctx, {
            type: "radar",
            data: {
                labels: ["Development", "Design", "Finance", "Quality Assurance", "Operations", "Marketing"],
                datasets: [
                    {
                        data: [-11, 19, 3, 5, -2, 3],
                        backgroundColor: ["rgba(236, 72, 153,0.2)"],
                        borderColor: ["#EC4899", "#EC4899", "#EC4899", "#EC4899", "#EC4899", "#EC4899"],
                        borderWidth: 0,
                        pointBackgroundColor: "rgba(245, 15, 15, 1)",
                        strokeColor: "rgba(245, 15, 15, 1)",
                    },
                    {
                        data: [-15, 10, 13, 7, -12, 8],
                        backgroundColor: ["rgba(67,56,202,0.2)"],
                        borderColor: ["#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA"],
                        borderWidth: 0,
                        pointBackgroundColor: "rgba(67,56,202,1)",
                        strokeColor: "rgba(245, 15, 15, 1)",
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                scale: {
                    ticks: {
                        display: false,
                    },
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
            <div className="flex items-center justify-center py-8">
                 
                <div className="md:w-96 rounded shadow-lg p-6 bg-white">
                    <div className="flex items-center justify-between">
                        <h1 className="text-gray-800 dark:text-gray-100 font-bold text-lg">Expenditure</h1>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <div className="w-2 rounded-full mr-1 h-1 bg-purple-500" />
                                <p className="text-xs leading-3 text-gray-800 dark:text-gray-100">AlphaSquad</p>
                            </div>
                            <div className="flex items-center ml-5">
                                <div className="w-2 rounded-full mr-1 h-1 bg-pink-500" />
                                <p className="text-xs leading-3 text-gray-800 dark:text-gray-100">TUK</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full pt-7 flex items-center justify-center">
                        <div className="w-64">
                            <canvas id="myChart" width={400} height={400} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
