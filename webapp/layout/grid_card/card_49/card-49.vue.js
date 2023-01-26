<template>
    <div class="bg-gray-300 dark:bg-gray-900 min-h-screen">
        <div class="flex items-center justify-center w-full h-full py-8 px-4">
            <div class="max-w-xs bg-white dark:bg-gray-800 rounded">
                <div class="py-6 px-8">
                    <p class="text-2xl font-bold leading-normal text-gray-800 dark:text-gray-100">Monthly Goals</p>
                </div>
                <div class="border-t border-gray-200 pt-12 pb-10">
                    <div class="relative px-8">
                        <canvas id="myChart" width="262px" height="262px"></canvas>
                        <div class="absolute inset-0 flex flex-col items-center justify-center">
                            <p class="text-4xl font-semibold leading-9 text-center text-indigo-700">82%</p>
                        </div>
                    </div>
                    <div class="px-6 pt-6">
                        <p class="text-base leading-snug text-center text-gray-900 dark:text-gray-400"><span class="text-indigo-700">52</span> goals <span class="text-indigo-700">57</span> completed this month. Keep goinng!</p>
                        <div class="flex flex-col sm:flex-row justify-center mt-6 w-full">
                            <button class="w-full sm:w-auto flex items-center mr-3 justify-center px-8 py-3 bg-gray-100 hover:bg-gray-200 rounded text-sm font-semibold leading-4 text-center text-indigo-700">My Goals</button>
                            <button class="w-full sm:w-auto mt-4 sm:mt-0 flex items-center justify-center px-8 py-3 bg-indigo-700 hover:bg-indigo-600 rounded text-sm font-semibold leading-4 text-center text-white">+ Add new</button>
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
                    labels: ["Complete", "Incomplete"],
                    datasets: [
                        {
                            label: "# of Votes",
                            data: [12, 82],
                            backgroundColor: ["#ffffff", "#4338CA"],
                            borderColor: ["rgba(255, 255, 255 ,1)"],
                            borderWidth: 0,
                            borderRadius: 2,
                        },
                    ],
                },
                options: {
                    legend: {
                        display: false,
                    },
                    cutoutPercentage: 92,
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
