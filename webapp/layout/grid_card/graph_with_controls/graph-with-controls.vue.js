<template>
  <body
    class="flex py-10 min-h-screen justify-center py-8 bg-gray-300 px-4"
  >
    <div
      class="xl:w-3/4 2xl:w-4/5 w-full bg-white md:p-10 p-4 rounded-lg shadow"
    >
      <div class="lg:flex justify-between w-full items-center">
        <div class="py-3 md:px-4 flex items-center bg-gray-50 rounded-xl">
          <p
            tabindex="0"
            class="
              focus:outline-none
              text-xs
              font-medium
              leading-none
              text-center text-gray-500
            "
          >
            Show:
          </p>
          <div class="px-2 sm:px-3.5 border-r border-gray-300">
            <p
              tabindex="0"
              class="focus:outline-none text-xs leading-none text-gray-800"
            >
              Hour
            </p>
          </div>
          <div class="px-2 sm:px-3.5 border-r border-gray-300">
            <p
              tabindex="0"
              class="focus:outline-none text-xs leading-none text-gray-800"
            >
              Day
            </p>
          </div>
          <div class="px-2 sm:px-3.5 border-r border-gray-300">
            <p
              tabindex="0"
              class="focus:outline-none text-xs leading-none text-gray-800"
            >
              Week
            </p>
          </div>
          <div class="px-2 sm:px-3.5 border-r border-gray-300">
            <p
              tabindex="0"
              class="focus:outline-none text-xs leading-none text-gray-800"
            >
              Month
            </p>
          </div>
          <div class="px-2 sm:px-3.5">
            <p
              tabindex="0"
              class="
                focus:outline-none
                text-xs
                font-bold
                leading-none
                text-indigo-700
              "
            >
              Year
            </p>
          </div>
        </div>
        <div class="flex items-center mt-4 lg:mt-0">
          <div class="flex items-center">
            <div
              aria-label="pink dot"
              role="img"
              tabindex="0"
              class="focus:outline-none w-4 h-4 bg-pink-300 rounded-full"
            ></div>
            <p
              tabindex="0"
              class="focus:outline-none w-20 text-xs leading-none ml-1.5"
            >
              Components
            </p>
          </div>
          <div class="flex items-center ml-4">
            <div
              aria-label="yellow dot"
              role="img"
              tabindex="0"
              class="focus:outline-none w-4 h-4 bg-yellow-300 rounded-full"
            ></div>
            <p
              tabindex="0"
              class="focus:outline-none w-20 text-xs leading-none ml-1.5"
            >
              Templates
            </p>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <div class="chartjs-size-monitor">
          <div class="chartjs-size-monitor-expand"><div class=""></div></div>
          <div class="chartjs-size-monitor-shrink"><div class=""></div></div>
        </div>
        <canvas
          id="line_chart"
          height="528"
          width="1760"
          style="display: block; height: 264px; width: 880px"
          aria-label="chart"
          role="img"
          tabindex="0"
          class="focus:outline-none chartjs-render-monitor"
        ></canvas>
      </div>
    </div>
  </body>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "component",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    var yLabels = {
      0: "$0",
      6: "$6K",
      10: "$10K",
      14: "$15K",
      20: "$20K",
      40: "$40K",
    };

    new Chart(document.getElementById("line_chart"), {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            data: [6, 8, 20, 18, 10, 10, 16, 16, 19, 16, 14, 10],

            borderColor: "#F0ABFC",
            fill: false,
          },
          {
            data: [10, 12, 6, 17, 18, 8, 19, 14, 12, 10, 8, 6],
            borderColor: "#FDBA74",
            fill: false,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                beginAtZero: true,
                callback: function (value) {
                  return yLabels[value];
                },
              },
            },
          ],
        },
      },
    });
  },
};
</script>

<style scoped>
</style>
