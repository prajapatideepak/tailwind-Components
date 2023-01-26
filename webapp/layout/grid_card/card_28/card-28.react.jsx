import React, { useEffect } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";
export default function IndexPage() {
    useEffect(() => {
        var config = {
            type: "doughnut",
            data: {
                datasets: [
                    { borderWidth: 0, data: [76, 24], backgroundColor: ["#6366F1"] },
                    {
                        weight: 0.6,
                    },
                    { borderWidth: 0, data: [53, 47], backgroundColor: ["#A855F7"] },
                    {
                        weight: 0.6,
                    },
                    { borderWidth: 0, data: [60, 40], backgroundColor: ["#EC4899"] },
                    {
                        weight: 0.6,
                    },
                    {
                        borderWidth: 0,
                        data: [33, 67],
                        backgroundColor: ["#EAB308"],

                        label: "Doughnut 2",
                    },
                ],
                labels: ["Info 1", "Info 2", "Info 3"],
            },
            options: {
                responsive: true,
                legend: {
                    display: false,
                },

                animation: {
                    animateScale: true,
                    animateRotate: true,
                },
            },
        };
        window.onload = function () {
            var ctx = document.getElementById("myChart").getContext("2d");
            window.myDoughnut = new Chart(ctx, config);
        };
    }, []);
    return (
        <>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
                <script defer src="https://cdn.tuk.dev/dev/light-dark-switch.js"></script>
            </Helmet>
            <div className="flex items-center justify-center py-8 px-4">
                 
                <div className="sm:w-96 w-80  px-5 py-4 rounded shadow-lg dark:bg-gray-800 bg-white">
                    <p className="text-lg font-bold leading-none text-gray-800 dark:text-gray-100">Performance</p>
                    <div className="w-full pt-7 flex items-center justify-center">
                        <div className="h-full w-full">
                            <canvas id="myChart" width="250px" />
                        </div>
                    </div>
                    <div className="pt-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                                <p className="text-xs leading-3 text-purple-500 ml-1">HR</p>
                            </div>
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-pink-500 rounded-full" />
                                <p className="text-xs leading-3 text-pink-500 ml-1">Marketing</p>
                            </div>
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                                <p className="text-xs leading-3 text-indigo-500 ml-1">Finance</p>
                            </div>
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                                <p className="text-xs leading-3 text-yellow-500 ml-1">Operations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
