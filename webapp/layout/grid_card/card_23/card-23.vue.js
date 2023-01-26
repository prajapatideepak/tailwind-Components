<template>
    <div class="bg-gray-300 dark:bg-gray-900 min-h-screen">
        <div class="flex items-center justify-center">
            <div class="py-8 px-4">
                <div class="md:w-96 rounded-md shadow-lg py-4 px-6 dark:bg-gray-800 bg-white">
                    <h1 class="text-lg font-bold leading-4 dark:text-gray-100 text-gray-800">Summary</h1>
                    <div class="md:flex items-center pt-5">
                        <div class="h-40 w-40">
                            <canvas id="myChart" height="100%" width="100%"></canvas>
                        </div>
                        <div class="pl-8 md:mt-0 mt-4">
                            <div class="flex items-center">
                                <div class="w-3 h-3 rounded-full bg-indigo-900"></div>
                                <h1 class="dark:text-white text-indigo-900 text-xs leading-3 md:pl-1 pl-2 font-normal">Employees: 13%</h1>
                            </div>
                            <div class="flex items-center py-4">
                                <div class="w-3 h-3 rounded-full bg-indigo-700"></div>
                                <h1 class="dark:text-white text-indigo-700 text-xs leading-3 md:pl-1 pl-2 font-normal">Customers: 24%</h1>
                            </div>
                            <div class="flex items-center">
                                <div class="w-3 h-3 rounded-full bg-indigo-500"></div>
                                <h1 class="dark:text-white text-indigo-500 text-xs leading-3 md:pl-1 pl-2 font-normal">Vendors: 13%</h1>
                            </div>
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

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
