<template>
    <div class="bg-gray-200 dark:bg-gray-900 min-h-screen">
        <div class="flex items-center justify-center w-full h-full py-12 px-4">
            <div class="bg-white max-w-xs dark:bg-gray-800 shadow rounded py-6 px-8">
                <p class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-100">Updates</p>
                <div class="flex items-center flex-wrap mt-4">
                    <div class="flex items-center">
                        <div class="w-3.5 h-3.5 bg-pink-500 rounded-full"></div>
                        <p class="text-xs leading-3 ml-1 text-gray-800 dark:text-gray-100">Option1</p>
                    </div>
                    <div class="flex items-center ml-6">
                        <div class="w-3.5 h-3.5 bg-yellow-500 rounded-full"></div>
                        <p class="text-xs leading-3 ml-1 text-gray-800 dark:text-gray-100">Option2</p>
                    </div>
                    <div class="flex items-center ml-6">
                        <div class="w-3.5 h-3.5 bg-green-500 rounded-full"></div>
                        <p class="text-xs leading-3 ml-1 text-gray-800 dark:text-gray-100">Option3</p>
                    </div>
                    <div class="flex items-center mt-3">
                        <div class="w-3.5 h-3.5 bg-blue-500 rounded-full"></div>
                        <p class="text-xs leading-3 ml-1 text-gray-800 dark:text-gray-100">Option4</p>
                    </div>
                </div>
                <canvas id="myChart" height="250px"></canvas>
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
                    labels: ["S", "S", "M", "T", "W ", "T", "F"],
                    datasets: [
                        {
                            data: [0, 10, 20, 30, 50, 40, 90],
                            borderColor: "#EC4899",
                            borderWidth: 2,
                        },
                        {
                            data: [0, 15, 10, 30, 55, 40, 60],
                            borderColor: "#EAB308",
                            borderWidth: 2,
                        },
                        {
                            data: [0, 5, 9, 40, 10, 40, 100],
                            borderColor: "#3B82F6",
                            borderWidth: 2,
                        },
                        {
                            data: [0, 6, 8, 15, 50, 40, 80],
                            borderColor: "#22C55E",
                            borderWidth: 2,
                        },
                    ],
                },
                options: {
                    elements: {
                        point: {
                            radius: 0,
                            hoverRadius: 3,
                        },
                        line: {
                            fill: false,
                            tension: 0,
                        },
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
                                    max: 100,
                                },
                            },
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    display: false,
                                    drawBorder: false,
                                },
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
