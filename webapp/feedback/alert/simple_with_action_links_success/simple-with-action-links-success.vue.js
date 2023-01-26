<template>
    <div class="flex items-center justify-center px-4">
        <div id="alert" class="transition duration-150 ease-in-out w-full lg:w-11/12 mx-auto bg-white dark:bg-gray-800 shadow rounded flex flex-col py-4 md:py-0 items-center md:flex-row justify-between">
            <div class="flex flex-col items-center md:flex-row">
                <div class="mr-3 p-4 bg-green-400 rounded md:rounded-tr-none md:rounded-br-none text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                        <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z" />
                    </svg>
                </div>
                <p class="mr-2 text-base font-bold text-gray-800 dark:text-gray-100 mt-2 md:my-0">Success</p>
                <div class="h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block"></div>
                <p class="text-sm lg:text-base dark:text-gray-400 text-gray-600 lg:pt-1 xl:pt-0 sm:mb-0 mb-2 text-center sm:text-left">Your Payment was successful. You can now use our services.</p>
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
    name: "SimpleWithActionLinksSuccess",
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
