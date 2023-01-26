<template>
    <div class="bg-gray-300 dark:bg-gray-900 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4">
            <div class="sm:w-96 w-80 px-5 py-4 rounded shadow-lg dark:bg-gray-800 bg-white">
                <p class="text-lg font-bold leading-none text-gray-800 dark:text-gray-100">Performance</p>
                <div class="w-full pt-7 flex items-center justify-center">
                    <div class="h-full w-full">
                        <canvas id="myChart" width="250px"></canvas>
                    </div>
                </div>
                <div class="pt-6">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <p class="text-xs leading-3 text-purple-500 ml-1">HR</p>
                        </div>
                        <div class="flex items-center">
                            <div class="w-2 h-2 bg-pink-500 rounded-full"></div>
                            <p class="text-xs leading-3 text-pink-500 ml-1">Marketing</p>
                        </div>
                        <div class="flex items-center">
                            <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
                            <p class="text-xs leading-3 text-indigo-500 ml-1">Finance</p>
                        </div>
                        <div class="flex items-center">
                            <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <p class="text-xs leading-3 text-yellow-500 ml-1">Operations</p>
                        </div>
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

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
