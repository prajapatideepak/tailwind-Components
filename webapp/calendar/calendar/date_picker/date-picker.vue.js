<template>
  <body class="bg-gray-200 dark:bg-gray-900 min-h-screen">
    <div class="flex items-center justify-center w-full h-full py-8 px-4">
        <div class="bg-white px-6 py-6 z-50 shadow-xl">
            <p class="text-base text-gray-700">June</p>
            <table class="mt-6">
                <thead>
                    <tr>
                        <th v-for="(day, idx) in days" v-bind:key="idx">
                            <div class="w-full flex justify-center">
                                <p class="text-xs font-bold text-center text-gray-600 dark:text-gray-400">{{ day }}</p>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="pt-6">
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center"></div>
                        </td>
                        <td class="pt-6">
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center"></div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center"></div>
                        </td>
                        <td class="pt-6">
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-gray-700">1</p>
                            </div>
                        </td>
                        <td class="pt-6">
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-gray-700">2</p>
                            </div>
                        </td>
                        <td class="pt-6">
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center bg-indigo-100">
                                <p class="text-sm text-red-600">3</p>
                            </div>
                        </td>
                        <td class="pt-6">
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center bg-indigo-100">
                                <p class="text-sm text-red-600">4</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center bg-indigo-100">
                                <p class="text-sm text-gray-700">5</p>
                            </div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center bg-indigo-100">
                                <p class="text-sm text-gray-700">6</p>
                            </div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center bg-indigo-100">
                                <p class="text-sm text-gray-700">7</p>
                            </div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center bg-indigo-100">
                                <p class="text-sm text-gray-700">8</p>
                            </div>
                        </td>
                        <td>
                            <div class="w-full h-full">
                                <div class="w-12 h-12 flex w-full rounded-full justify-center items-center cursor-pointer bg-indigo-700">
                                    <p class="text-sm font-bold text-white">9</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-red-600">10</p>
                            </div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-red-600">11</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-gray-700">12</p>
                            </div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-gray-700">13</p>
                            </div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-gray-700">14</p>
                            </div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-gray-700">15</p>
                            </div>
                        </td>
                        <td>
                            <div class="px-4 py-2 flex w-full justify-center">
                                <p class="text-sm text-gray-700">16</p>
                            </div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-red-600">17</p>
                            </div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-red-600">18</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-gray-700">19</p>
                            </div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-gray-700">20</p>
                            </div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-gray-700">21</p>
                            </div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-gray-700">22</p>
                            </div>
                        </td>
                        <td>
                            <div class="px-4 py-2 flex w-full justify-center">
                                <p class="text-sm text-gray-700">23</p>
                            </div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-red-600">24</p>
                            </div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-red-600">25</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-gray-700">26</p>
                            </div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-gray-700">27</p>
                            </div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-gray-700">28</p>
                            </div>
                        </td>
                        <td>
                            <div class="sm:px-4 px-2 py-2 flex w-full justify-center">
                                <p class="text-sm text-gray-700">29</p>
                            </div>
                        </td>
                        <td>
                            <div class="px-4 py-2 flex w-full justify-center">
                                <p class="text-sm text-gray-700">30</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </body>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        };
    },
};
</script>
