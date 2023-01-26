<template>
    <div class="bg-gray-200 dark:bg-gray-900 h-full">
        <div role="alert" class="xl:w-5/12 mx-auto sm:mx-0 sm:w-6/12 md:w-6/12 justify-between w-10/12 bg-white dark:bg-gray-800 shadow-lg rounded flex absolute left-0 sm:left-auto right-0 sm:top-0 sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 transition duration-150 ease-in-out" id="notification">
            <div class="px-2 sm:px-4 border-r border-gray-300 dark:border-gray-700 flex items-center justify-center">
                <div class="h-12 w-12 sm:h-10 sm:w-10 rounded-full">
                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/notifications/n_1.png" alt="" class="h-full w-full object-cover rounded-full shadow" />
                </div>
            </div>
            <div class="flex flex-col justify-center xl:-ml-6 pl-4 xl:pl-1 w-3/5">
                <p class="text-sm text-gray-800 dark:text-gray-100 font-semibold">Ashley Wilson</p>
                <p class="text-xs text-gray-600 dark:text-gray-400 font-normal">Lets meet at the bar at 9:00pm tonight.</p>
            </div>
            <div class="flex flex-col justify-center border-l items-center border-gray-300 dark:border-gray-700 w-1/3 sm:w-1/6">
                <div class="pt-2 pb-2 border-b border-gray-300 dark:border-gray-700 w-full flex justify-center">
                    <span class="text-sm text-blue-500 font-bold cursor-pointer">Reply</span>
                </div>

                <div class="pt-2 pb-2 flex justify-center w-full cursor-pointer" @click="closeModal()">
                    <span class="text-sm text-gray-600 dark:text-gray-400 cursor-pointer">Dismiss</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MultipleActionWithAvatarSeperator",
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
