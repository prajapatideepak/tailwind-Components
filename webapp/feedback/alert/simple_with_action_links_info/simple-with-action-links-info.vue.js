<template>
    <div class="flex items-center justify-center px-4">
        <div id="alert" class="transition duration-150 ease-in-out w-full lg:w-11/12 mx-auto bg-white dark:bg-gray-800 shadow rounded py-4 md:py-0 flex flex-col items-center md:flex-row justify-between">
            <div class="flex flex-col items-center md:flex-row">
                <div class="mr-3 p-4 bg-blue-400 rounded md:rounded-tr-none md:rounded-br-none text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                        <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                </div>
                <p class="mr-2 text-base font-bold text-gray-800 dark:text-gray-100 mt-2 md:my-0">Attention</p>
                <div class="h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block"></div>
                <p class="text-sm lg:text-base dark:text-gray-400 text-gray-600 lg:pt-1 xl:pt-0 sm:mb-0 mb-2 text-center sm:text-left">We are providing you new offers. please check your email</p>
            </div>
            <div class="flex xl:items-center lg:items-center sm:justify-end justify-center pr-4">
                <span class="text-sm mr-4 font-bold cursor-pointer text-indigo-700 dark:text-indigo-600">Details</span>
                <span class="text-sm cursor-pointer text-gray-600 dark:text-gray-400" @click="closeAlert()">Dismiss</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SimpleWithActionLinksInfo",
    mounted: function () {
        this.onLoad();
    },
    methods: {
        onLoad() {
            var Alert = document.getElementById("alert");
            Alert.style.transform = "translateY(-200%)";
            setTimeout(function () {
                Alert.style.transform = "translateY(0%)";
            }, 1000);
        },
        closeAlert() {
            var Alert = document.getElementById("alert");
            Alert.style.transform = "translateY(-200%)";
            this.onLoad();
        },
    },
};
</script>
