<template>
    <div class="flex items-center justify-center py-8 px-4">
        <div class="sm:w-1/2 bg-white shadow p-6 dark:bg-gray-800">
            <div class="flex w-full justify-between items-center">
                <p class="text-lg leading-none text-right text-gray-800 dark:text-gray-100">Tickets sold</p>
                <div class="relative bg-gray-100 dark:bg-gray-700 ease-in duration-150 hover:bg-gray-200 pt-1 pb-2 px-3 rounded-sm mt-4 sm:mt-0">
                    <select class="text-xs text-gray-600 dark:text-gray-400 dark:bg-gray-700 w-24 h-full bg-transparent focus:outline-none">
                        <option class="leading-none">Weekly</option>
                        <option class="leading-none">Monthly</option>
                        <option class="leading-none">Daily</option>
                    </select>
                </div>
            </div>
            <div class="mt-5 w-full">
                <canvas id="check"></canvas>
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
            chartId: "check",
            chartData: {
                type: "line",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                            label: "",
                            borderColor: "#3182CE",
                            data: [0, 200, 300, 200, 500, 500, 600],
                            backgroundColor: "rgb(49,130,206,0.1)",
                            pointBackgroundColor: "#3182CE",
                            borderWidth: "3",
                            pointBorderWidth: "4",
                            pointHoverRadius: "6",
                            pointHoverBorderWidth: "8",
                            pointHoverBorderColor: "rgb(74,85,104,0.2)",
                        },
                    ],
                },
                options: {
                    legend: {
                        position: false,
                    },
                    elements: {
                        point: {
                            radius: 0,
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
