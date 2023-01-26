<template>
    <div class="bg-gray-300 dark:bg-gray-900 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4">
            <div class="w-96 rounded shadow-lg p-6 bg-white dark:bg-gray-800">
                <div class="w-full flex items-center justify-center">
                    <div class="sm:w-full w-60 relative">
                        <canvas id="myChart"> </canvas>
                        <div class="absolute inset-0 flex flex-col items-center justify-center mt-14">
                            <p class="text-5xl font-medium leading-10 text-center text-gray-800 dark:text-gray-100">82.3<span class="text-2xl font-medium leading-normal text-center text-gray-500 dark:text-gray-100">%</span></p>
                            <p class="text-sm font-medium leading-none text-center text-gray-600 dark:text-gray-100 pt-2">Completion</p>
                        </div>
                    </div>
                </div>
                <p class="text-sm font-medium cursor-pointer pt-8 underline text-center text-gray-600 dark:text-gray-100">View Details</p>
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
                    labels: ["Completed"],
                    datasets: [
                        {
                            label: "# of Votes",
                            data: [86, 60],
                            backgroundColor: ["#6366F1"],
                            borderColor: ["rgba(255, 255, 255 ,1)"],
                            borderWidth: 0,
                            borderRadius: 10,
                        },
                    ],
                },
                options: {
                    rotation: 1 * Math.PI /** This is where you need to work out where 89% is */,
                    circumference: 1 * Math.PI /** put in a much smaller amount  so it does not take up an entire semi circle */,
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                    cutoutPercentage: 90,
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
