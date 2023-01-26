<template>
  <body class="flex items-center justify-center">
    <div
      class="
        flex flex-wrap
        items-center
        sm:justify-start
        justify-center
        gap-7
        py-20
        sm:px-6
        px-4
      "
    >
      <div class="w-64 p-4 bg-blue-50 rounded">
        <div class="flex items-center justify-between">
          <h1 class="text-sm font-semibold leading-none text-gray-800">BTC</h1>
          <div class="p-1 bg-blue-700 rounded">
            <p class="text-xs font-medium leading-3 text-white">+3.7%</p>
          </div>
        </div>
        <p class="text-sm leading-none mt-1 text-gray-800">Bitcoin to USD</p>
        <div class="h-16 mt-14">
          <canvas
            height="90"
            tabindex="0"
            class="focus:outline-none"
            aria-label="graph"
            role="img"
            id="myChart"
          ></canvas>
        </div>
        <p class="text-xl font-semibold leading-5 mt-12 text-gray-800">
          $90,747
        </p>
        <p class="text-sm leading-none text-gray-800 mt-1">
          20% profit generated
        </p>
      </div>
      <div class="w-64 p-4 bg-indigo-50 rounded">
        <div class="flex items-center justify-between">
          <h1 class="text-sm font-semibold leading-none text-gray-800">ETH</h1>
          <div class="p-1 bg-indigo-700 rounded">
            <p class="text-xs font-medium leading-3 text-white">+3.7%</p>
          </div>
        </div>
        <p class="text-sm leading-none mt-1 text-gray-800">Ethirium to USD</p>
        <div class="h-16 mt-14">
          <canvas
            height="90"
            tabindex="0"
            class="focus:outline-none"
            aria-label="graph"
            role="img"
            id="myChart2"
          ></canvas>
        </div>
        <p class="text-xl font-semibold leading-5 mt-12 text-gray-800">
          $15,747
        </p>
        <p class="text-sm leading-none text-gray-800 mt-1">
          70% profit generated
        </p>
      </div>
      <div class="w-64 bg-purple-50 rounded p-4">
        <div class="flex items-center justify-between">
          <h1 class="text-sm font-semibold leading-none text-gray-800">LTC</h1>
          <div class="p-1 bg-purple-700 rounded">
            <p class="text-xs font-medium leading-3 text-white">+3.7%</p>
          </div>
        </div>
        <p class="text-sm leading-none mt-1 text-gray-800">Litecoin to USD</p>
        <div class="h-16 mt-14">
          <canvas
            height="90"
            tabindex="0"
            class="focus:outline-none"
            aria-label="graph"
            role="img"
            id="myChart3"
          ></canvas>
        </div>
        <p class="text-xl font-semibold leading-5 mt-12 text-gray-800">
          $17,229
        </p>
        <p class="text-sm leading-none text-gray-800 mt-1">
          40% profit generated
        </p>
      </div>
    </div>
  </body>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "MyComponent",
  data() {
    return {};
  },
  mounted(){
    this.loadCharts();
  },
  methods: {
    loadCharts() {
      var ctx = document.getElementById("myChart").getContext("2d");
      var gradient = ctx.createLinearGradient(2, 0, 0, 70);
      gradient.addColorStop(0, "#BFDBFE");
      gradient.addColorStop(1, "#EFF6FF");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "",
              borderColor: "#1D4ED8",
              data: [5, 9, 3, 9, 4, 9, 6, 0],
              backgroundColor: gradient,
              pointBackgroundColor: "#1D4ED8",
              borderWidth: "2",
            },
          ],
        },
        options: {
          legend: {
            position: false,
          },
          ticks: {
            beginAtZero: true,
            steps: 2,
            stepValue: 2,
            max: 10,
          },
          elements: {
            point: {
              radius: 0,
            },
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
      });
      // chart 2
      var ctx1 = document.getElementById("myChart2").getContext("2d");
      var gradient2 = ctx.createLinearGradient(2, 0, 0, 70);
      gradient2.addColorStop(0, "#C7D2FE");
      gradient2.addColorStop(1, "#EFF6FF");
      new Chart(ctx1, {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "",
              borderColor: "#4338CA",
              data: [5, 9, 3, 9, 4, 9, 6, 0],
              backgroundColor: gradient2,
              pointBackgroundColor: "#1D4ED8",
              borderWidth: "2",
            },
          ],
        },
        options: {
          legend: {
            position: false,
          },
          ticks: {
            beginAtZero: true,
            steps: 2,
            stepValue: 2,
            max: 10,
          },
          elements: {
            point: {
              radius: 0,
            },
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
      });
      // chart 3
      var ctx2 = document.getElementById("myChart3").getContext("2d");
      var gradient3 = ctx.createLinearGradient(2, 0, 0, 70);
      gradient3.addColorStop(0, "#DDD6FE");
      gradient3.addColorStop(1, "#EFF6FF");
      new Chart(ctx2, {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "",
              borderColor: "#6D28D9",
              data: [5, 9, 3, 9, 4, 9, 6, 0],
              backgroundColor: gradient3,
              pointBackgroundColor: "#1D4ED8",
              borderWidth: "2",
            },
          ],
        },
        options: {
          legend: {
            position: false,
          },
          ticks: {
            beginAtZero: true,
            steps: 2,
            stepValue: 2,
            max: 10,
          },
          elements: {
            point: {
              radius: 0,
            },
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
      });
    },
  },
};
</script> 

<style scoped>
</style>
