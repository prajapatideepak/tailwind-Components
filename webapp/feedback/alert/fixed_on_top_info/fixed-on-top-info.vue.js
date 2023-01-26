<template>
    <div class="py-12 bg-gray-100">
        <!-- Code block starts -->
        <div id="alert" class="transition duration-150 ease-in-out absolute top-0 mt-12 w-full bg-blue-400 shadow">
            <div class="container mx-auto xl:w-full lg:transition duration-150 ease-in-out w-11/12">
                <div class="w-full xl:flex lg:flex py-6 items-center">
                    <div class="xl:w-5/6 lg:w-5/6 w-full flex xl:flex-row lg:flex-row flex-col justify-center items-center xl:justify-start lg:justify-start">
                        <div class="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </div>
                        <p class="mx-4 text-lg text-white text-center sm:text-left">We are providing you new offers. please check your email</p>
                    </div>
                    <div class="w-2/12 flex justify-end">
                        <div @click="closeAlert()" class="cursor-pointer xl:relative lg:relative absolute top-0 right-0 mr-2 mt-2 xl:mt-0 xl:mr-0 lg:mt-0 lg:mr-0 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Code block ends -->
    </div>
</template>

<script>
export default {
    name: "FixedOnTopInfo",
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
