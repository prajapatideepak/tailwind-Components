<template>
    <div class="bg-gray-300 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4 bg-gray-300">
            <div class="md:w-96 rounded shadow-lg p-6 bg-white">
                <div class="flex items-center justify-between">
                    <h1 class="text-gray-800 font-bold text-lg">Expenditure</h1>
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <div class="w-2 rounded-full mr-1 h-1 bg-purple-500"></div>
                            <p class="text-xs leading-3 text-gray-800">AlphaSquad</p>
                        </div>
                        <div class="flex items-center ml-5">
                            <div class="w-2 rounded-full mr-1 h-1 bg-pink-500"></div>
                            <p class="text-xs leading-3 text-gray-800">TUK</p>
                        </div>
                    </div>
                </div>
                <div class="w-full pt-7 flex items-center justify-center">
                    <div class="w-64">
                        <canvas id="myChart" width="400" height="400"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//npm install chart.js@2.8.0
import Chart from "chart.js";

export default {
    name: "index",
    data() {
        return {
            chartId: "myChart",
            chartData: {
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
            },
        };
    },
    mounted() {
        this.createChart(this.chartId, this.chartData);
    },
    methods: {
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId).getContext("2d");
            new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
        },
    },
};
</script>
