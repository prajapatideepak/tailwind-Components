import React, { useEffect } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";
export default function Index() {
    useEffect(() => {
        const myBarChart2 = new Chart(document.getElementById("chartjs-2"), {
            type: "pie",
            data: { labels: ["Accepted", "Rejected", "Pending", "Approved"], datasets: [{ data: [60, 12, 12, 25], fill: false, backgroundColor: [" #312E81", " #4338CA", " #4F46E5", " #4338CA"] }] },
            options: {
                legend: {
                    position: false,
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
            <div className="flex items-center justify-center py-8 md:px-4">
                <div className="xl:w-1/3 flex flex-col 2xl:items-center">
                    <p className="text-base md:text-xl font-bold leading-tight text-gray-600 dark:text-gray-400 text-center">Total RSVP Count</p>
                    <div className="mx-auto flex flex-col items-center">
                        <div className="mt-8">
                            <canvas id="chartjs-2" />
                        </div>
                        <div className="mt-8">
                            <div className="flex items-center justify-between md:justify-start">
                                <div className="mr-8">
                                    <p className="text-xs text-gray-400">Accepted</p>
                                    <p className="text-xl font-bold text-gray-700 dark:text-gray-400">73.6%</p>
                                </div>
                                <div className="pl-8 md:border-l border-gray-100 dark:border-gray-700">
                                    <p className="text-xs text-gray-400">Rejected</p>
                                    <p className="text-xl font-bold text-gray-700 dark:text-gray-400">16.4%</p>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center justify-between md:justify-start">
                                <div className="mr-8">
                                    <p className="text-xs text-gray-400">Pending</p>
                                    <p className="text-xl font-bold text-gray-700 dark:text-gray-400">73.6%</p>
                                </div>
                                <div className="pl-8 md:border-l border-gray-100 dark:border-gray-700">
                                    <p className="text-xs text-gray-400">Rejected</p>
                                    <p className="text-xl font-bold text-gray-700 dark:text-gray-400">16.4%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
