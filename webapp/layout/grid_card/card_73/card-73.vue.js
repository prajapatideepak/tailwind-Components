<template>
    <div class="bg-gray-200 dark:bg-gray-900 min-h-screen">
        <div class="flex items-center justify-center w-full h-full py-12 px-4">
            <!-- Please include the chartJs script in the head section of your webpage to make the chart work.
      <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>-->
            <div class="max-w-sm bg-white p-8 dark:bg-gray-800 rounded">
                <p class="text-2xl font-medium leading-6 sm:pr-56 pr-10 text-gray-800 dark:text-gray-100">Health</p>
                <div class="pt-6 relative flex items-center h-full justify-center">
                    <div class="flex items-center h-full justify-center relative">
                        <canvas id="progress-1" data-percent="25" width="200" height="200"></canvas>
                        <div class="w-40 h-40 absolute bg-green-50 rounded-full flex items-center justify-center">
                            <p class="text-4xl font-medium leading-10 text-center text-green-500">25%</p>
                        </div>
                    </div>
                </div>
                <div class="flex pt-12">
                    <div class="opacity-50 w-3.5 h-3.5 rounded-full bg-green-500"></div>
                    <p class="text-sm leading-none text-gray-800 pl-2">Restless</p>
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
            Chart.pluginService.register({
                afterUpdate: function (chart) {
                    if (chart.config.options.elements.arc.roundedCornersFor !== undefined) {
                        var arc = chart.getDatasetMeta(0).data[chart.config.options.elements.arc.roundedCornersFor];
                        arc.round = {
                            x: (chart.chartArea.left + chart.chartArea.right) / 2,
                            y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
                            radius: (chart.outerRadius + chart.innerRadius) / 2,
                            thickness: (chart.outerRadius - chart.innerRadius) / 2 - 1,
                            backgroundColor: arc._model.backgroundColor,
                        };
                    }
                },

                afterDraw: function (chart) {
                    if (chart.config.options.elements.arc.roundedCornersFor !== undefined) {
                        var ctx = chart.chart.ctx;
                        var arc = chart.getDatasetMeta(0).data[chart.config.options.elements.arc.roundedCornersFor];
                        var startAngle = Math.PI / 2 - arc._view.startAngle;
                        var endAngle = Math.PI / 2 - arc._view.endAngle;

                        ctx.save();
                        ctx.translate(arc.round.x, arc.round.y);
                        console.log(arc.round.startAngle);
                        ctx.fillStyle = arc.round.backgroundColor;
                        ctx.beginPath();
                        ctx.arc(arc.round.radius * Math.sin(startAngle), arc.round.radius * Math.cos(startAngle), arc.round.thickness, 0, 2 * Math.PI);
                        ctx.arc(arc.round.radius * Math.sin(endAngle), arc.round.radius * Math.cos(endAngle), arc.round.thickness, 0, 2 * Math.PI);
                        ctx.closePath();
                        ctx.fill();
                        ctx.restore();
                    }
                },
            });
            var config = {
                type: "doughnut",
                data: {
                    labels: ["Restless", "Awake"],
                    datasets: [
                        {
                            data: [20, 60],
                            backgroundColor: ["#22C55E", "#F0FDF4"],
                            borderWidth: 2,
                        },
                    ],
                },
                options: {
                    hover: { mode: null },
                    elements: {
                        arc: {
                            roundedCornersFor: 0,
                        },
                    },
                    cutoutPercentage: 80,
                    maintainAspectRatio: false,
                    tooltips: {
                        enabled: false,
                    },
                    legend: {
                        display: false,
                    },
                },
            };
            var ctx = document.getElementById("progress-1").getContext("2d");
            new Chart(ctx, config);
        },
    },
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
