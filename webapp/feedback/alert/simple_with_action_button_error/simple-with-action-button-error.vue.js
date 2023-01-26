<template>
    <div class="flex items-center justify-center px-4 lg:px-0 py-12">
        <div id="alert" class="transition duration-150 ease-in-out lg:w-11/12 mx-auto py-3 px-4 dark:bg-gray-800 bg-white md:flex items-center justify-between shadow rounded">
            <div class="sm:flex sm:items-start lg:items-center">
                <div class="flex items-end">
                    <div class="mr-2 text-red-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path class="heroicon-ui" d="M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07zm1.41-1.41A8 8 0 1 0 17.66 6.34 8 8 0 0 0 6.34 17.66zM13.41 12l1.42 1.41a1 1 0 1 1-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 1 1-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 1 1 1.42-1.42L12 10.6l1.41-1.42a1 1 0 1 1 1.42 1.42L13.4 12z" />
                        </svg>
                    </div>
                    <p class="mr-2 text-sm lg:text-base font-bold text-gray-800 dark:text-gray-100">Error</p>
                </div>
                <div class="h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block"></div>
                <p class="text-sm lg:text-base text-gray-600 dark:text-gray-400 pt-2 sm:pt-0 pb-2 sm:pb-0">A problem has occurred while submitting your data. Please try again later</p>
            </div>
            <div class="flex items-center justify-end sm:mt-4 md:mt-0 md:pl-4 lg:pl-0">
                <button class="focus:outline-none mr-8 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">View</button>
                <div @click="closeAlert()" class="cursor-pointer text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SimpleWithActionButtonError",
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
