<template>
    <div class="bg-gray-200 dark:bg-gray-900 min-h-screen">
        <div class="flex items-center justify-center w-full h-full py-8 px-4">
            <!-- Please include this script in the head section of your webpage to make the chart work.
         <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>  -->
            <div class="md:w-96 w-80 bg-white dark:bg-gray-800 rounded py-4 px-8">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <p class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-100 pr-3">Visitors</p>
                        <svg class="text-green-700 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" width="53" height="20" viewBox="0 0 53 20" fill="none">
                            <path d="M4 2V18H20V20H2V2H4ZM19.293 5.293L20.707 6.707L15 12.414L12 9.415L7.707 13.707L6.293 12.293L12 6.586L15 9.585L19.293 5.293Z" fill="currentColor" />
                            <path
                                d="M27.9716 14.1193C29.8551 14.1321 31.1207 12.8366 31.1165 11.1108C31.1207 9.46165 29.9446 8.26847 28.4148 8.26847C27.4773 8.26847 26.6506 8.72443 26.233 9.47443H26.1733C26.1776 7.63778 26.8509 6.52131 28.0611 6.52131C28.8111 6.52131 29.3182 6.95597 29.4801 7.625H31.0355C30.848 6.21449 29.7102 5.15341 28.0611 5.15341C25.9645 5.15341 24.6392 6.90057 24.6392 9.88352C24.6349 13.0838 26.2969 14.1108 27.9716 14.1193ZM27.9631 12.8409C27.0298 12.8409 26.348 12.0696 26.3438 11.1577C26.3523 10.2415 27.0597 9.47443 27.9844 9.47443C28.9091 9.47443 29.5866 10.2074 29.5824 11.1449C29.5866 12.0994 28.8878 12.8409 27.9631 12.8409ZM33.1491 14.0938C33.652 14.0938 34.0824 13.6761 34.0866 13.1562C34.0824 12.6449 33.652 12.2273 33.1491 12.2273C32.6293 12.2273 32.2074 12.6449 32.2116 13.1562C32.2074 13.6761 32.6293 14.0938 33.1491 14.0938ZM38.5014 14.1193C40.3679 14.1193 41.7273 13.0497 41.723 11.5753C41.7273 10.4844 41.0455 9.70028 39.8224 9.52557V9.45739C40.7685 9.25284 41.4034 8.54972 41.3991 7.5696C41.4034 6.24006 40.2699 5.15341 38.527 5.15341C36.831 5.15341 35.5185 6.16335 35.4844 7.625H37.0057C37.0312 6.89205 37.7131 6.43608 38.5185 6.43608C39.3324 6.43608 39.8736 6.9304 39.8693 7.66335C39.8736 8.42614 39.2429 8.93324 38.3395 8.93324H37.5682V10.152H38.3395C39.4432 10.152 40.0994 10.706 40.0952 11.4943C40.0994 12.2656 39.4304 12.794 38.4972 12.794C37.6193 12.794 36.9418 12.3381 36.9034 11.6264H35.3011C35.3438 13.1009 36.6605 14.1193 38.5014 14.1193ZM47.8519 12.3636C47.8562 13.3778 48.4996 14.2429 49.6971 14.2429C50.8903 14.2429 51.5465 13.3778 51.5423 12.3636V11.9034C51.5465 10.8807 50.9073 10.0241 49.6971 10.0241C48.5167 10.0241 47.8562 10.8892 47.8519 11.9034V12.3636ZM43.4158 7.36932C43.4201 8.38352 44.0636 9.24006 45.2653 9.24006C46.4542 9.24006 47.1104 8.39205 47.1062 7.36932V6.90909C47.1104 5.88636 46.4712 5.02983 45.2653 5.02983C44.0891 5.02983 43.4201 5.88636 43.4158 6.90909V7.36932ZM43.7994 14H44.869L50.869 5.27273H49.7994L43.7994 14ZM48.9641 11.9034C48.9684 11.4517 49.1602 10.9957 49.6971 10.9957C50.2596 10.9957 50.4258 11.4517 50.4215 11.9034V12.3636C50.4258 12.8153 50.2425 13.2628 49.6971 13.2628C49.1516 13.2628 48.9684 12.8111 48.9641 12.3636V11.9034ZM44.5366 6.90909C44.5408 6.46165 44.7241 6.00142 45.2653 6.00142C45.8278 6.00142 45.9897 6.45739 45.9854 6.90909V7.36932C45.9897 7.82102 45.8107 8.26847 45.2653 8.26847C44.7198 8.26847 44.5408 7.82102 44.5366 7.36932V6.90909Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <div class="flex items-center">
                        <div class="flex items-center pr-4">
                            <div class="w-3 h-3 bg-gradient-to-br from-red-300 to-purple-500 rounded-full"></div>
                            <p class="text-xs font-semibold leading-3 dark:text-gray-100 text-gray-800 pl-1">new</p>
                        </div>
                        <div class="flex items-center">
                            <div class="w-3 h-3 bg-gradient-to-tl from-yellow-300 to-red-400 rounded-full"></div>
                            <p class="text-xs pl-1 font-semibold leading-3 dark:text-gray-100 text-gray-800">returning</p>
                        </div>
                    </div>
                </div>
                <div class="h-full w-full mt-14 relative flex items-center justify-center">
                    <canvas id="myChart" height="300"></canvas>
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
        return {};
    },
    mounted() {
        this.createChart();
    },
    methods: {
        createChart() {
            var ctx = document.getElementById("myChart").getContext("2d");
            var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 300);
            purple_orange_gradient.addColorStop(0, "#FDA4AF");
            purple_orange_gradient.addColorStop(1, "#8B5CF6");
            var red_orange_gradient = ctx.createLinearGradient(0, 0, 0, 300);
            red_orange_gradient.addColorStop(0, "#F87171");
            red_orange_gradient.addColorStop(1, "#FDBA74");
            var data = {
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [
                    {
                        label: "New",
                        backgroundColor: purple_orange_gradient,
                        data: [200, 400, 200, 400, 300, 500, 500],
                    },
                    {
                        label: "Returning",
                        backgroundColor: red_orange_gradient,
                        data: [300, 300, 600, 300, 100, 600, 600],
                    },
                ],
            };
            new Chart(ctx, {
                type: "bar",
                data: data,
                options: {
                    legend: {
                        display: false,
                    },
                    barValueSpacing: 0,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    min: 0,
                                },
                                gridLines: {
                                    display: false,
                                },
                            },
                        ],
                        xAxes: [
                            {
                                barPercentage: 1.0,
                                gridLines: {
                                    display: false,
                                },
                            },
                        ],
                    },
                },
            });
        },
    },
};
</script>
<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
