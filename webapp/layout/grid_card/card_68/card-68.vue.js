<template>
    <div class="bg-gray-200 dark:bg-gray-900 min-h-screen">
        <div class="flex items-center justify-center w-full h-full py-12 px-4">
            <div class="max-w-xs sm:max-w-sm w-full bg-white pt-6 dark:bg-gray-800 rounded">
                <div class="pl-8 pr-6">
                    <div class="flex items-center justify-between">
                        <p class="text-2xl font-semibold leading-normal pr-10 sm:pr-32 text-gray-800 dark:text-gray-100">$256.45</p>
                        <div class="w-24 h-6">
                            <div class="flex items-center justify-center px-2 py-1.5 flex-1 h-full bg-indigo-700 rounded-md">
                                <p class="text-xs font-semibold leading-3 text-right text-white">Planned 30%</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-between pt-2">
                        <p class="text-xs font-medium leading-3 pl-1 text-green-700">$5.30 (2.40%)</p>
                        <p class="text-xs font-medium leading-3 text-right text-gray-500 dark:text-gray-400">28 days ago</p>
                    </div>
                    <div class="flex items-center justify-between pt-8 pb-2 border-b border-gray-200">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                <circle cx="6.5" cy="6" r="6" fill="#E2E8F0" />
                                <circle cx="6.5" cy="6" r="2" fill="white" />
                            </svg>
                            <p class="text-sm leading-none text-gray-800 dark:text-gray-100 pl-2">Marketing Channels</p>
                        </div>
                        <p class="text-sm leading-none text-right text-gray-800 dark:text-gray-100">$22.0k</p>
                    </div>
                    <div class="flex items-center justify-between pt-4 pb-2 border-b border-gray-200">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                <circle cx="6.5" cy="6" r="6" fill="#E2E8F0" />
                                <circle cx="6.5" cy="6" r="2" fill="white" />
                            </svg>
                            <p class="text-sm leading-none text-gray-800 dark:text-gray-100 pl-2">Direct Sales</p>
                        </div>
                        <p class="text-sm leading-none text-right text-gray-800 dark:text-gray-100">$8.4k</p>
                    </div>
                    <div class="flex items-center justify-between pt-4 pb-2 border-b border-gray-200">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                <circle cx="6.5" cy="6" r="6" fill="#E2E8F0" />
                                <circle cx="6.5" cy="6" r="2" fill="white" />
                            </svg>
                            <p class="text-sm leading-none text-gray-800 dark:text-gray-100 pl-2">Offline Channels</p>
                        </div>
                        <p class="text-sm leading-none text-right text-gray-800 dark:text-gray-100">$18.4k</p>
                    </div>
                    <div class="flex items-center justify-between pt-4 pb-2">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                <circle cx="6.5" cy="6" r="6" fill="#E2E8F0" />
                                <circle cx="6.5" cy="6" r="2" fill="white" />
                            </svg>
                            <p class="text-sm leading-none text-gray-800 dark:text-gray-100 pl-2">Other Channels</p>
                        </div>
                        <p class="text-sm leading-none text-right text-gray-800 dark:text-gray-100">$15.3k</p>
                    </div>
                </div>
                <div>
                    <div>
                        <canvas id="myChart" width="250" height="90"></canvas>
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
                type: "line",
                data: {
                    labels: ["", "", "", " ", "", ""],
                    datasets: [
                        {
                            data: [1, 10, 6, 11, 6, 12],
                            backgroundColor: ["#4338CA"],
                            borderWidth: 0,
                            strokeColor: "#6366F1",
                        },
                    ],
                },
                options: {
                    elements: {
                        point: {
                            radius: 0,
                        },
                    },
                    generateLabels: {
                        hidden: true,
                    },
                    legend: {
                        display: false,
                    },
                    scales: {
                        yAxes: [
                            {
                                gridLines: {
                                    display: false,
                                },
                                display: false,
                                ticks: {
                                    min: 0,
                                    max: 20,
                                },
                            },
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    display: false,
                                },
                                display: false,
                            },
                        ],
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
