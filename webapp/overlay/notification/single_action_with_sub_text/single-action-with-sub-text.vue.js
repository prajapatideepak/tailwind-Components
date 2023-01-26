<template>
    <div class="bg-gray-200 dark:bg-gray-900 h-full">
        <div class="xl:w-5/12 mx-auto sm:mx-0 sm:w-6/12 md:w-6/12 w-10/12 bg-white dark:bg-gray-800 shadow-lg rounded flex pr-4 absolute left-0 sm:left-auto right-0 sm:top-0 sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 transition duration-150 ease-in-out" id="notification">
            <div role="alert" aria-label="Close" class="cursor-pointer absolute right-0 mr-2 mt-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500 transition duration-150 ease-in-out" @click="closeModal()">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </div>
            <div class="px-5 border-r border-gray-300 dark:border-gray-700 flex items-center justify-center text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                    <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"></path>
                </svg>
            </div>
            <div class="flex flex-col justify-center pl-4 py-4">
                <p class="text-sm text-gray-800 dark:text-gray-100 font-semibold">Action Successful</p>
                <p class="text-xs text-gray-600 dark:text-gray-400 font-normal">You have successfully changed your password. If it's not you contact our team.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SingleActionWithSubText",
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
