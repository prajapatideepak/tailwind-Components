<template>
    <div class="flex items-center justify-center px-4 sm:px-0">
        <div id="alert" class="lg:w-10/12 transition duration-150 ease-in-out bg-red-200 shadow rounded-md md:flex justify-between items-center top-0 mt-12 mb-8 py-4 px-4">
            <div class="sm:flex items-center">
                <div class="flex items-end">
                    <div class="mr-2 mt-0.5 sm:mt-0 text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                            <path class="heroicon-ui" d="M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07zm1.41-1.41A8 8 0 1 0 17.66 6.34 8 8 0 0 0 6.34 17.66zM13.41 12l1.42 1.41a1 1 0 1 1-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 1 1-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 1 1 1.42-1.42L12 10.6l1.41-1.42a1 1 0 1 1 1.42 1.42L13.4 12z" />
                        </svg>
                    </div>
                    <p class="mr-2 text-base font-bold text-red-500">Error</p>
                </div>
                <div class="h-1 w-1 bg-red-500 rounded-full mr-2 hidden xl:block"></div>
                <p class="text-base text-red-500">A problem has occurred while submitting your data. Please try again later</p>
            </div>
            <div class="flex justify-end mt-4 md:mt-0 md:pl-4 lg:pl-0">
                <span class="text-sm mr-4 font-bold cursor-pointer text-red-500">Details</span>
                <span @click="closeAlert()" class="text-sm cursor-pointer text-gray-500">Dismiss</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ColorCodedWithIconError",
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
