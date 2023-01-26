<template>
    <div class="bg-gray-200 dark:bg-gray-900 h-full">
        <div role="alert" class="xl:w-5/12 mx-auto sm:mx-0 sm:w-6/12 md:w-3/5 w-11/12 bg-white dark:bg-gray-800 shadow-lg rounded flex sm:flex-row flex-col pr-4 absolute left-0 sm:left-auto right-0 sm:top-0 sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 transition duration-150 ease-in-out" id="notification">
            <div class="sm:px-6 px-4 mt-4 sm:mt-0 flex items-center sm:justify-center sm:border-r dark:border-gray-700 border-gray-300 text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                    <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z" />
                </svg>
            </div>
            <div class="flex flex-col justify-center pl-4 sm:w-9/12 py-3">
                <p class="text-lg text-gray-800 dark:text-gray-100 font-semibold pb-1">Action Completed</p>
                <p class="text-sm text-gray-600 dark:text-gray-400 font-normal pb-2">Yuhuuu! You've got your $11.99 album from The Weeknd.</p>
                <div class="flex">
                    <span class="text-sm text-green-400 font-bold mr-2 cursor-pointer">View </span>
                    <span class="text-sm pl-2 text-gray-600 dark:text-gray-400 cursor-pointer" @click="closeModal()">Dismiss</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MultipleAction",
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
