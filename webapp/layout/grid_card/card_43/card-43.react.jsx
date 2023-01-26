import React, { useEffect } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";
export default function IndexPage() {
    useEffect(() => {
        let ctx = document.getElementById("myChart").getContext("2d");

        let gradientColors = [
            {
                start: "#F9B4BD",
                end: "#9573DB",
            },
        ];
        let gradients = [];
        gradientColors.forEach(function (item) {
            let gradient = ctx.createLinearGradient(150, 0, 0, 80);
            gradient.addColorStop(0, item.start);
            gradient.addColorStop(1, item.end);
            gradients.push(gradient);
        });

        let gradientColors2 = [
            {
                start: "#44DEC5",
                end: "#4EBCFA",
            },
        ];
        let gradients2 = [];
        gradientColors2.forEach(function (item) {
            let gradient2 = ctx.createLinearGradient(20, 0, 0, 80);
            gradient2.addColorStop(0, item.start);
            gradient2.addColorStop(1, item.end);
            gradients2.push(gradient2);
        });

        let data = {
            labels: ["Info 1", "Info 2", "Info 3"],
            datasets: [
                { borderWidth: 0, data: [76, 24], backgroundColor: gradients },
                {
                    weight: 0.4,
                },
                { borderWidth: 0, data: [53, 47], backgroundColor: gradients2 },
                {
                    weight: 0.4,
                },
            ],
        };

        let myBarChart = new Chart(ctx, {
            type: "doughnut",
            data: data,
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
        });
    });
    return (
        <>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
                <script defer src="https://cdn.tuk.dev/dev/light-dark-switch.js"></script>
            </Helmet>
            <div className="flex items-center justify-center w-full h-full py-8 px-4">
                 
                <div className="md:w-96 w-80 bg-white dark:bg-gray-800 rounded py-4 px-8">
                    <p className="text-base font-medium leading-4 text-gray-600 dark:text-gray-400">Earnings By Item Type</p>
                    <div className="h-full w-full mt-14 relative flex items-center justify-center">
                        <canvas id="myChart" width="256px" height="256px" />
                        <div className="absolute flex flex-col items-center jutsify-center">
                            <p className="md:text-4xl text-2xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-100">$159.89</p>
                            <p className="text-sm leading-none text-center text-gray-500 dark:text-gray-100 pt-2">Total Earning</p>
                        </div>
                    </div>
                    <hr className="w-full px-8 md:mt-8 mt-28 border-gray-400 mb-6" />
                    <div className="md:flex">
                        <div className="flex items-center">
                            <div className="w-5 h-5 bg-gradient-to-br from-red-300 to-purple-500 rounded-lg mr-3" />
                            <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">Graphic Template</p>
                        </div>
                        <div className="flex items-center justify md:ml-7 md:mt-0 mt-4">
                            <div className="w-5 h-5 bg-gradient-to-br from-green-300 to-blue-400 rounded-lg mr-3" />
                            <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
