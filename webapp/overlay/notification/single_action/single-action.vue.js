<template>
    <div class="h-full">
        <div class="relative mx-auto sm:w-full flex justify-center sm:justify-end pt-16 sm:pt-6 pb-6 sm:pb-16 h-64 overflow-x-hidden">
            <!--code for notification starts-->
            <div role="alert" class="xl:w-5/12 mx-auto sm:mx-0 sm:w-6/12 md:w-6/12 justify-between w-10/12 bg-white shadow-lg rounded flex sm:h-12 absolute left-0 sm:left-auto right-0 sm:top-0 sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 dark:bg-gray-800 transition duration-150 ease-in-out" id="notification">
                <div class="pl-5 pr-3 flex sm:items-center items-start sm:pt-0 pt-3 justify-center text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                    </svg>
                </div>
                <div class="sm:flex justify-between xl:-ml-4 xl:pl-4 lg:pl-4 w-full pt-3 pb-3 xl:pr-4 lg:pr-4 items-center pr-3">
                    <p class="text-sm text-gray-800 dark:text-gray-100 font-semibold">Theme Updated</p>
                    <p class="text-sm font-bold text-blue-400 cursor-pointer sm:pt-0 pt-4" @click="closeModal()">Undo Action</p>
                </div>
                <div class="flex flex-col justify-center border-l items-center border-gray-300 dark:border-gray-700 px-4">
                    <div class="cursor-pointer pt-2 pb-2 w-full flex justify-center text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out" @click="closeModal()">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                </div>
            </div>
            <!--code for notification ends-->
        </div>
    </div>
</template>

<script>
export default {
    name: "SingleAction",
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
