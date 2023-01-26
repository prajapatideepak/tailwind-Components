import React, { useEffect } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";
export default function IndexPage() {
    useEffect(() => {
        var config = {
            type: "doughnut",
            data: {
                labels: ["Employees", "Customers", "Vendors"],
                datasets: [
                    {
                        borderColor: ["#A7F3D0 ", "#059669", "#34D399"],
                        backgroundColor: ["#A7F3D0 ", "#059669", "#34D399"],
                        data: [13, 24, 23],
                    },
                ],
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
                cutoutPercentage: 70,
            },
        };
        window.onload = function () {
            var ctx = document.getElementById("myChart").getContext("2d");
            window.myDoughnut = new Chart(ctx, config);
        };
    });
    return (
        <>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
                <script defer src="https://cdn.tuk.dev/dev/light-dark-switch.js"></script>
            </Helmet>
            <div className="flex items-center w-full justify-center py-8">
                <div className="max-w-sm rounded shadow bg-white dark:bg-gray-800 px-6 py-5">
                     
                    <div className="sm:flex items-center">
                        <div>
                            <p className="text-xl font-semibold leading-4 text-gray-800 dark:text-gray-100">Earning</p>
                            <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-4 pb-1">This Month</p>
                            <p className="text-base font-medium leading-none text-gray-800 dark:text-gray-100">$4055.56</p>
                            <p className="w-44 text-xs leading-none text-gray-500 pt-5 dark:text-gray-400">68.2% more earnings than last month.</p>
                        </div>
                        <div className=" sm:mt-0 mt-5 relative flex items-center jutsify-center">
                            <canvas id="myChart" width={110} height={110} />
                            <div className="absolute flex items-center justify-center flex-col inset-0">
                                <p className="text-xl font-semibold leading-tight  text-gray-800 dark:text-gray-100">38%</p>
                                <p className="text-xs font-medium leading-3  text-gray-500 dark:text-gray-400">Sales</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
