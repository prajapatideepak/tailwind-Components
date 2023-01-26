<template>
    <div class="bg-gray-200 dark:bg-gray-900 h-full">
        <div role="alert" class="xl:w-5/12 mx-auto sm:mx-0 sm:w-2/3 md:w-3/5 justify-between w-11/12 bg-white dark:bg-gray-800 shadow-lg rounded flex sm:flex-row flex-col absolute left-0 sm:left-auto right-0 sm:top-0 sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 transition duration-150 ease-in-out" id="notification">
            <div class="sm:px-6 px-4 sm:border-r border-gray-300 dark:border-gray-700 flex items-center sm:justify-center justify-start mt-4 sm:mt-0 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                    <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
            </div>
            <div class="flex flex-col justify-center xl:-ml-4 px-4 sm:px-2 xl:pl-4 sm:w-3/5 pt-4 sm:pb-4">
                <p class="text-lg text-gray-800 dark:text-gray-100 font-semibold pb-1">Update Available</p>
                <p class="text-sm text-gray-600 dark:text-gray-400 font-normal">See what is new in Material OS 12.3, bug fixes, interface upgrade and much more</p>
            </div>
            <div class="flex sm:flex-col flex-row sm:justify-center sm:border-l sm:items-center border-gray-300 dark:border-gray-700 sm:w-1/5 px-4 sm:px-0">
                <div class="py-4 sm:border-b border-gray-300 dark:border-gray-700 sm:w-full flex sm:justify-center mr-4 sm:mr-0 sm:px-4">
                    <span class="sm:text-sm text-xs text-blue-500 font-bold cursor-pointer">Details</span>
                </div>
                <div class="py-4 flex sm:justify-center sm:px-4 cursor-pointer w-full" @click="closeModal()">
                    <span class="sm:text-sm text-xs text-gray-600 dark:text-gray-400 cursor-pointer">Dismiss</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SimpleMultipleWithSeperator",
    mounted: function () {
        this.onLoad();
    },
    methods: {
        onLoad() {
            var Notification = document.getElementById("notification");
            Notification.style.transform = "translateX(150%)";
            Notification.classList.remove("hidden");
            setTimeout(function () {
                Notification.style.transform = "translateX(0%)";
            }, 1000);
        },
        closeModal() {
            var Notification = document.getElementById("notification");
            Notification.style.transform = "translateX(150%)";
        },
    },
};
</script>
