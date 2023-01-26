<template>
    <div class="bg-gray-200 dark:bg-gray-900 min-h-screen">
        <div class="flex justify-center py-12 sm:px-6 px-4">
            <div class="max-w-sm rounded shadow bg-white dark:bg-gray-800 px-6 py-5">
                <!-- Please include this script in the head section of your webpage to make the chart work.-->
                <!-- <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script> -->
                <div class="sm:flex items-center">
                    <div>
                        <p class="text-xl font-semibold leading-4 text-gray-800 dark:text-gray-100">Earning</p>
                        <p class="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-4 pb-1">This Month</p>
                        <p class="text-base font-medium leading-none text-gray-800 dark:text-gray-100">$4055.56</p>
                        <p class="w-44 text-xs leading-none text-gray-500 pt-5 dark:text-gray-400">68.2% more earnings than last month.</p>
                    </div>

                    <div class="sm:mt-0 mt-5 relative flex items-center jutsify-center">
                        <canvas id="myChart" width="110" height="110"></canvas>
                        <div class="absolute flex items-center justify-center flex-col inset-0">
                            <p class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-100">38%</p>
                            <p class="text-xs font-medium leading-3 text-gray-500 dark:text-gray-400">Sales</p>
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
