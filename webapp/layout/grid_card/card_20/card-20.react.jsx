import React, { useEffect } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";
export default function IndexPage() {
    useEffect(() => {
        let ctx = document.getElementById("myChart").getContext("2d");
        let myChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Complete"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [25, 75],
                        backgroundColor: ["#4338CA"],
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
                tooltip: {
                    enabled: false,
                },
                cutoutPercentage: 83,
            },
        });
    });
    return (
        <>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
                <script defer src="https://cdn.tuk.dev/dev/light-dark-switch.js"></script>
            </Helmet>
            <div className="flex items-center justify-center py-8 px-4">
                 
                <div className="md:w-96 rounded shadow-lg p-6 bg-white w-full dark:bg-gray-800">
                    <div className="flex items-center justify-between pb-8">
                        <div>
                            <h1 className="text-lg font-bold leading-none text-gray-800 dark:text-gray-100">Marketing Report</h1>
                            <p className="text-xs pt-2 leading-3 text-gray-500 dar:bg-gray-400">Due: 31/04/2021</p>
                        </div>
                        <img alt="profile" src="https://i.ibb.co/HV1KWdk/Ellipse-19.png" className="w-8 h-8 object-cover object-center" />
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-60 relative">
                            <canvas id="myChart" width="234.78px" height="234.78px">
                                {" "}
                            </canvas>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-5xl font-bold leading-10 text-center text-gray-800 dark:text-gray-100">25%</p>
                                <p className="text-sm font-bold leading-none text-center text-gray-500 dar:bg-gray-400 uppercase pt-4">Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
