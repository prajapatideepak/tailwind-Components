import React, { useEffect } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";
export default function IndexPage() {
    useEffect(() => {
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Complete", "Incomplete"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [12, 82],
                        backgroundColor: ["#ffffff", "#4338CA"],
                        borderColor: ["rgba(255, 255, 255 ,1)"],
                        borderWidth: 0,
                        borderRadius: 2,
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                cutoutPercentage: 92,
            },
        });
    });
    return (
        <>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
                <script defer src="https://cdn.tuk.dev/dev/light-dark-switch.js"></script>
            </Helmet>
            <div className="flex items-center justify-center w-full h-full py-8 px-4">
                 
                <div className="max-w-xs bg-white dark:bg-gray-800 rounded">
                    <div className="py-6 px-8">
                        <p className="text-2xl font-bold leading-normal text-gray-800 dark:text-gray-100">Monthly Goals</p>
                    </div>
                    <div className="border-t border-gray-200 pt-12 pb-10">
                        <div className="relative px-8">
                            <canvas id="myChart" width="262px" height="262px" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-4xl font-semibold leading-9 text-center text-indigo-700">82%</p>
                            </div>
                        </div>
                        <div className="px-6 pt-6">
                            <p className="text-base leading-snug text-center text-gray-900 dark:text-gray-400">
                                <span className="text-indigo-700">52</span> goals
                                <span className="text-indigo-700">57</span> completed this month. Keep goinng!
                            </p>
                            <div className="flex flex-col  sm:flex-row justify-center mt-6 w-full">
                                <button className="w-full sm:w-auto flex items-center mr-3 justify-center px-8 py-3 bg-gray-100 hover:bg-gray-200 rounded text-sm font-semibold leading-4 text-center text-indigo-700">My Goals</button>
                                <button className="w-full sm:w-auto mt-4 sm:mt-0 flex items-center justify-center px-8 py-3 bg-indigo-700 hover:bg-indigo-600 rounded text-sm font-semibold leading-4 text-center text-white">+ Add new</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
