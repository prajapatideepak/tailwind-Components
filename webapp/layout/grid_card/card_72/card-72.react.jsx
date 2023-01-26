import React, { useEffect } from "react";
// npm i react-helmet
import {Helmet} from "react-helmet";
export default function IndexPage() {
    useEffect(() => {
        Chart.pluginService.register({
            afterUpdate: function (chart) {
                if (chart.config.options.elements.arc.roundedCornersFor !== undefined) {
                    var arc = chart.getDatasetMeta(0).data[chart.config.options.elements.arc.roundedCornersFor];
                    arc.round = {
                        x: (chart.chartArea.left + chart.chartArea.right) / 2,
                        y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
                        radius: (chart.outerRadius + chart.innerRadius) / 2,
                        thickness: (chart.outerRadius - chart.innerRadius) / 2 - 1,
                        backgroundColor: arc._model.backgroundColor,
                    };
                }
            },

            afterDraw: function (chart) {
                if (chart.config.options.elements.arc.roundedCornersFor !== undefined) {
                    var ctx = chart.chart.ctx;
                    var arc = chart.getDatasetMeta(0).data[chart.config.options.elements.arc.roundedCornersFor];
                    var startAngle = Math.PI / 2 - arc._view.startAngle;
                    var endAngle = Math.PI / 2 - arc._view.endAngle;

                    ctx.save();
                    ctx.translate(arc.round.x, arc.round.y);
                    console.log(arc.round.startAngle);
                    ctx.fillStyle = arc.round.backgroundColor;
                    ctx.beginPath();
                    ctx.arc(arc.round.radius * Math.sin(startAngle), arc.round.radius * Math.cos(startAngle), arc.round.thickness, 0, 2 * Math.PI);
                    ctx.arc(arc.round.radius * Math.sin(endAngle), arc.round.radius * Math.cos(endAngle), arc.round.thickness, 0, 2 * Math.PI);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                }
            },
        });

        var config = {
            type: "doughnut",
            data: {
                labels: ["Restless", "Awake"],
                datasets: [
                    {
                        data: [40, 20],
                        backgroundColor: ["#3B82F6", "#EFF6FF"],
                        borderWidth: 2,
                    },
                ],
            },
            options: {
                hover: { mode: null },
                elements: {
                    arc: {
                        roundedCornersFor: 0,
                    },
                },
                legend: {
                    display: false,
                },
                cutoutPercentage: 85,
            },
        };
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, config);
    });
    return (
        <>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
                <script defer src="https://cdn.tuk.dev/dev/light-dark-switch.js"></script>
            </Helmet>
            <div className="flex items-center justify-center w-full h-full py-12 px-4">
                 
                <div className="max-w-xs sm:max-w-sm bg-white shadow-md p-8 dark:bg-gray-800 rounded">
                    <p className="text-2xl font-medium leading-6 sm:pr-32 pr-10 text-gray-800 dark:text-gray-100">Sleep Schedule</p>
                    <div className="pt-6 relative flex items-center h-full justify-center">
                        <canvas id="myChart" width={120} height={85} className="relative z-10" />
                        <div className="w-20 h-20 absolute bg-blue-500 rounded-full z-0 flex items-center justify-center">
                            <p className="text-2xl font-semibold leading-6 text-center text-white">47%</p>
                        </div>
                    </div>
                    <div className="flex pt-8">
                        <div className="flex">
                            <div className="w-3.5 h-3.5 rounded-full bg-blue-500" />
                            <p className="text-sm leading-none pl-2 text-gray-800 dark:text-gray-100">Restless</p>
                        </div>
                        <div className="flex pl-4">
                            <div className="w-3.5 h-3.5 rounded-full bg-blue-50" />
                            <p className="text-sm leading-none text-gray-800 dark:text-gray-100 pl-2">Awake</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
