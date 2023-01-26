<template>
  <body style="min-height: 850px" class="px-4 flex items-center jutsify-center">
        <div class="w-full flex justify-center py-12">
            <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:bg-indigo-500 focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm" @click="popuphandler(true)">Open Modal</button>
        </div>
        <div id="popup" v-if="show" class="z-50 fixed w-full flex justify-center inset-0">
            <div @click="popuphandler(false)" class="w-full h-full bg-gray-900 z-0 absolute inset-0"></div>
            <div class="mx-auto container">
                <div class="flex items-center justify-center h-full w-full px-4 sm:px-0">
                    <div class="bg-white rounded-md shadow max-w-md w-full fixed z-20">
                        <div class="bg-gray-100 rounded-tl-md rounded-tr-md px-8 py-7 flex items-center justify-between">
                            <p tabindex="0" class="focus:outline-none text-base font-semibold">Select Range</p>
                            <button @click="popuphandler(false)" role="button" aria-label="close modal" class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-md focus:outline-none">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 7L7 21" stroke="#A1A1AA" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M7 7L21 21" stroke="#A1A1AA" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="px-8 py-5">
                            <div class="flex items-center justify-between">
                                <button role="button" aria-label="previous" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:outline-none">
                                    <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.2 11.814L1 6.657L5.2 1.5" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                                <p tabindex="0" class="focus:outline-none text-lg font-bold text-gray-900">February</p>
                                <button role="button" aria-label="next" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:outline-none">
                                    <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11.814L5.2 6.657L1 1.5" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                            <div tabindex="0" aria-label="calendar" class="focus:outline-none min-w-full overflow-x-auto mt-9">
                                <table class="w-full">
                                    <thead class="text-sm text-indigo-700 w-full">
                                        <tr>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>T</th>
                                            <th>W</th>
                                            <th>T</th>
                                            <th>F</th>
                                            <th>S</th>
                                        </tr>
                                    </thead>
                                    <tbody class="w-full target-body2">
                                        <tr class="text-sm font-medium text-center">
                                            <td>
                                                <p class="py-1 text-gray-500">27</p>
                                            </td>
                                            <td>
                                                <p class="py-1 text-gray-500">28</p>
                                            </td>
                                            <td>
                                                <p class="py-1 text-gray-500">29</p>
                                            </td>
                                            <td>
                                                <p class="py-1 text-gray-500">30</p>
                                            </td>
                                            <td>
                                                <p class="py-1 text-gray-500">31</p>
                                            </td>
                                            <td>
                                                <p class="py-1 text-gray-800">1</p>
                                            </td>
                                            <td>
                                                <p class="py-1 text-gray-800">2</p>
                                            </td>
                                        </tr>
                                        <tr class="text-center text-gray-800">
                                            <td>
                                                <p class="py-1 bg-indigo-700 rounded-tl-full rounded-bl-full text-white">3</p>
                                            </td>
                                            <td>
                                                <p class="py-1 bg-indigo-700 text-white -mx-1">4</p>
                                            </td>
                                            <td>
                                                <p class="py-1 bg-indigo-700 text-white -mx-1">5</p>
                                            </td>
                                            <td>
                                                <p class="py-1 bg-indigo-700 text-white -mx-1">6</p>
                                            </td>
                                            <td>
                                                <p class="py-1 bg-indigo-700 rounded-tr-full rounded-br-full text-white">7</p>
                                            </td>
                                            <td>
                                                <p class="py-1">8</p>
                                            </td>
                                            <td>
                                                <p class="py-1">9</p>
                                            </td>
                                        </tr>
                                        <tr class="text-center text-gray-800">
                                            <td>
                                                <p class="py-1">10</p>
                                            </td>
                                            <td>
                                                <p class="py-1">11</p>
                                            </td>
                                            <td>
                                                <p class="py-1">12</p>
                                            </td>
                                            <td>
                                                <p class="py-1">13</p>
                                            </td>
                                            <td>
                                                <p class="py-1">14</p>
                                            </td>
                                            <td>
                                                <p class="py-1">15</p>
                                            </td>
                                            <td>
                                                <p class="py-1">16</p>
                                            </td>
                                        </tr>
                                        <tr class="text-center text-gray-800">
                                            <td>
                                                <p class="py-1">17</p>
                                            </td>
                                            <td>
                                                <p class="py-1">18</p>
                                            </td>
                                            <td>
                                                <p class="py-1">19</p>
                                            </td>
                                            <td>
                                                <p class="py-1">20</p>
                                            </td>
                                            <td>
                                                <p class="py-1">21</p>
                                            </td>
                                            <td>
                                                <p class="py-1">22</p>
                                            </td>
                                            <td>
                                                <p class="py-1">23</p>
                                            </td>
                                        </tr>
                                        <tr class="text-center text-gray-800">
                                            <td>
                                                <p class="py-1">24</p>
                                            </td>
                                            <td>
                                                <p class="py-1">25</p>
                                            </td>
                                            <td>
                                                <p class="py-1">26</p>
                                            </td>
                                            <td>
                                                <p class="py-1">27</p>
                                            </td>
                                            <td>
                                                <p class="py-1">28</p>
                                            </td>
                                            <td>
                                                <p class="py-1">29</p>
                                            </td>
                                            <td>
                                                <p class="py-1">30</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="mt-11">
                                <div class="flex items-center justify-center">
                                    <div class="flex flex-col items-center w-full">
                                        <p tabindex="0" class="focus:outline-none text-xl font-bold leading-tight text-gray-900">Increment</p>
                                        <div class="flex flex-wrap items-center justify-center mt-4 -ml-2 w-full">
                                            <div class="m-2 flex items-center">
                                                <div class="bg-white bg-gray-200 border rounded-sm border-gray-300 w-3.5 h-3.5 flex flex-shrink-0 justify-center items-center relative">
                                                    <input placeholder="checkbox" type="checkbox" class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                    <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                        <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                                            <path d="M5 12l5 5l10 -10"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p class="text-sm leading-none text-gray-900 ml-2">Day</p>
                                            </div>
                                            <div class="m-2 flex items-center">
                                                <div class="bg-white bg-gray-200 border rounded-sm border-gray-300 w-3.5 h-3.5 flex flex-shrink-0 justify-center items-center relative">
                                                    <input placeholder="checkbox" type="checkbox" class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                    <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                        <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                                            <path d="M5 12l5 5l10 -10"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p class="text-sm leading-none text-gray-900 ml-2">Week</p>
                                            </div>
                                            <div class="m-2 flex items-center">
                                                <div class="bg-white bg-gray-200 border rounded-sm border-gray-300 w-3.5 h-3.5 flex flex-shrink-0 justify-center items-center relative">
                                                    <input placeholder="checkbox" type="checkbox" class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                    <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                        <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                                            <path d="M5 12l5 5l10 -10"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p class="text-sm leading-none text-gray-900 ml-2">Month</p>
                                            </div>
                                            <div class="m-2 flex items-center">
                                                <div class="bg-white bg-gray-200 border rounded-sm border-gray-300 w-3.5 h-3.5 flex flex-shrink-0 justify-center items-center relative">
                                                    <input placeholder="checkbox" type="checkbox" class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                    <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                        <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                                            <path d="M5 12l5 5l10 -10"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p class="text-sm leading-none text-gray-900 ml-2">Entire Range</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between mt-9">
                                <button @click="popuphandler(false)" role="button" aria-label="close modal" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 px-6 py-3 bg-gray-600 hover:bg-gray-500 shadow rounded text-sm text-white">Cancel</button>
                                <button role="button" aria-label="select" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">Select</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>                
    </body>
</template>

<script>
export default {
  name: "component",
  data() {
    return {
      show: true
    };
  },
  methods: {
    popuphandler(flag) {
      if (flag) {
        this.show = true
      } else {
        this.show = false
      }
    },
  },
};
</script>

<style>
.checkbox:checked + .check-icon {
  display: flex;
}
</style>
