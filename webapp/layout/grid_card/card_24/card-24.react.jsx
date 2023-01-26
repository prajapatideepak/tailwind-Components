import React, { useEffect } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";
export default function IndexPage() {
    useEffect(() => {
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Purple"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [86, 60],
                        backgroundColor: ["#6366F1"],
                        borderColor: ["rgba(255, 255, 255 ,1)"],
                        borderWidth: 0,
                        borderRadius: 10,
                    },
                ],
            },
            options: {
                rotation: 1 * Math.PI /** This is where you need to work out where 89% is */,
                circumference: 1 * Math.PI /** put in a much smaller amount  so it does not take up an entire semi circle */,
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
                cutoutPercentage: 90,
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
                 
                <div className="w-96  rounded shadow-lg p-6 bg-white dark:bg-gray-800">
                    <div className="w-full flex items-center justify-center">
                        <div className="sm:w-full w-60  relative">
                            <canvas id="myChart"> </canvas>
                            <div className="absolute inset-0 flex flex-col items-center justify-center mt-14">
                                <p className="text-5xl font-medium leading-10 text-center text-gray-800 dark:text-gray-100">
                                    82.3<span className="text-2xl font-medium leading-normal text-center text-gray-500 dark:text-gray-100">%</span>
                                </p>
                                <p className="text-sm font-medium leading-none text-center text-gray-600 dark:text-gray-100 pt-2">Completion</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm font-medium cursor-pointer pt-8  underline text-center text-gray-600 dark:text-gray-100">View Details</p>
                </div>
            </div>
        </>
    );
}
