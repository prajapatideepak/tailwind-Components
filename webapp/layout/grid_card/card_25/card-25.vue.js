<template>
    <div class="bg-gray-300 dark:bg-gray-900 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4">
            <div class="sm:w-96 w-80 rounded shadow-lg dark:bg-gray-800 bg-white">
                <div class="p-6">
                    <p class="text-sm leading-none text-gray-500 dark:text-gray-400 tracking-tighter">Trend</p>

                    <h1 class="text-gray-800 dark:text-gray-100 font-bold text-lg">Product Sale</h1>
                </div>
                <div class="w-full pt-7 flex items-center justify-center">
                    <div class="w-full h-full">
                        <canvas id="myChart" width="250"></canvas>
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
                            data: [200, 240, 220, 192, 270, 290],
                            backgroundColor: ["rgba(67,56,202,0.4)"],
                            borderColor: ["#6366F1", "#6366F1", "#6366F1", "#6366F1", "#6366F1", "#6366F1"],
                            borderWidth: 1,
                            pointBackgroundColor: "#6366F1",
                            strokeColor: "#6366F1",
                        },
                    ],
                },
                options: {
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
