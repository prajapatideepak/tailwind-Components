<template>
    <div class="relative mx-auto flex justify-center sm:justify-end pt-16 sm:pt-6 pb-6 sm:pb-16 h-64 overflow-x-hidden">
        <!--code for notification starts-->
        <div role="alert" class="xl:w-5/12 mx-auto sm:mx-0 sm:w-2/3 md:w-3/5 justify-between w-11/12 bg-white shadow-lg rounded flex sm:flex-row flex-col absolute left-0 sm:left-auto right-0 sm:top-0 sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 transition duration-150 ease-in-out dark:bg-gray-800" id="notification">
            <div class="sm:p-6 p-2 ml-4 sm:ml-0 mt-4 sm:mt-0 sm:px-6 bg-blue-400 flex items-center justify-center w-12 h-12 sm:h-auto sm:w-auto text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                    <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
            </div>
            <div class="flex flex-col justify-center xl:-ml-4 px-4 xl:pl-4 sm:w-3/5 pt-4 sm:pb-4 pb-2">
                <p class="text-lg text-gray-800 dark:text-gray-100 font-semibold pb-1">Update Available</p>
                <p class="text-sm text-gray-600 dark:text-gray-400 font-normal">See what is new in Material OS 12.3, bug fixes, interface updrade and much more</p>
            </div>
            <div class="flex sm:flex-col sm:justify-center sm:border-l dark:border-gray-700 items-center border-gray-300 sm:w-1/5 ml-4 sm:ml-0">
                <div class="sm:pt-4 pb-4 sm:border-b dark:border-gray-700 border-gray-300 sm:w-full flex sm:justify-center sm:px-4">
                    <span class="sm:text-sm text-xs text-blue-400 font-bold mr-4 sm:mr-0 cursor-pointer">Details</span>
                </div>

                <div class="sm:pt-4 pb-4 flex sm:justify-center cursor-pointer w-full sm:px-4" @click="closeModal()">
                    <span class="sm:text-sm text-xs text-gray-600 dark:text-gray-400">Cancel</span>
                </div>
            </div>
        </div>

        <!--code for notification ends-->
    </div>
</template>

<script>
export default {
    name: "ColoredMultipleActionWithSeperator",
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
