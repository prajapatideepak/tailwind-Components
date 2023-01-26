import React, { useEffect } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";
export default function IndexPage() {
    useEffect(() => {
        var ctx = document.getElementById("myChart").getContext("2d");
        var chart = new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["Employees", "Customers", "Vendors"],
                datasets: [
                    {
                        borderColor: ["#312E81 ", "#4338CA", "#6366F1"],
                        backgroundColor: ["#312E81 ", "#4338CA", "#6366F1"],
                        data: [13, 24, 63],
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
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
            <div className="flex items-center justify-center">
                 
                <div className="py-8 px-4">
                    <div className="md:w-96 rounded-md shadow-lg py-4 px-6 dark:bg-gray-800 bg-white">
                        <h1 className="text-lg font-bold leading-4 dark:text-gray-100 text-gray-800">Summary</h1>
                        <div className="md:flex items-center pt-5">
                            <div className="h-40 w-40">
                                <canvas id="myChart" height="100%" width="100%" />
                            </div>
                            <div className="pl-8 md:mt-0 mt-4">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-full bg-indigo-900" />
                                    <h1 className="dark:text-white text-indigo-900 text-xs leading-3 md:pl-1 pl-2 font-normal">Employees: 13%</h1>
                                </div>
                                <div className="flex items-center py-4">
                                    <div className="w-3 h-3 rounded-full bg-indigo-700" />
                                    <h1 className="dark:text-white text-indigo-700 text-xs leading-3 md:pl-1 pl-2 font-normal">Customers: 24%</h1>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-full bg-indigo-500" />
                                    <h1 className="dark:text-white text-indigo-500 text-xs leading-3 md:pl-1 pl-2 font-normal">Vendors: 13%</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
