<template>
    <div class="flex items-center justify-center py-8 md:px-4">
        <div class="xl:w-1/3 flex flex-col 2xl:items-center">
            <p class="text-base md:text-xl font-bold leading-tight text-gray-600 dark:text-gray-400 text-center">Total RSVP Count</p>
            <div class="mx-auto flex flex-col items-center">
                <div class="mt-8">
                    <canvas id="chartjs-2"></canvas>
                </div>
                <div class="mt-8">
                    <div class="flex items-center justify-between md:justify-start">
                        <div class="mr-8">
                            <p class="text-xs text-gray-400">Accepted</p>
                            <p class="text-xl font-bold text-gray-700 dark:text-gray-400">73.6%</p>
                        </div>
                        <div class="pl-8 md:border-l border-gray-100 dark:border-gray-700">
                            <p class="text-xs text-gray-400">Rejected</p>
                            <p class="text-xl font-bold text-gray-700 dark:text-gray-400">16.4%</p>
                        </div>
                    </div>
                    <div class="mt-3 flex items-center justify-between md:justify-start">
                        <div class="mr-8">
                            <p class="text-xs text-gray-400">Pending</p>
                            <p class="text-xl font-bold text-gray-700 dark:text-gray-400">73.6%</p>
                        </div>
                        <div class="pl-8 md:border-l border-gray-100 dark:border-gray-700">
                            <p class="text-xs text-gray-400">Rejected</p>
                            <p class="text-xl font-bold text-gray-700 dark:text-gray-400">16.4%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Chart from "chart.js";
export default {
    name: "index",
    data() {
        return {
            chartId: "chartjs-2",
            chartData: {
                type: "pie",
                data: {
                    labels: ["Accepted", "Rejected", "Pending", "Approved"],
                    datasets: [
                        {
                            data: [60, 12, 12, 25],
                            fill: false,
                            backgroundColor: [" #312E81", " #4338CA", " #4F46E5", " #4338CA"],
                        },
                    ],
                },
                options: {
                    legend: {
                        position: false,
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
            const ctx = document.getElementById(chartId);
            new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
        },
    },
};
</script>
