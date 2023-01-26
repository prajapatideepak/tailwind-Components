<template>
    <div class="dark:bg-black bg-gray-300 min-h-screen">
        <div class="py-12 dark:bg-black bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
            <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <div class="flex items-center justify-center py-8 px-4">
                    <div class="relative md:w-80 rounded shadow-lg p-6 dark:bg-gray-800 bg-white">
                        <h1 class="text-lg font-bold leading-none dark:text-gray-100 text-gray-800">Create Link</h1>
                        <p class="text-sm leading-5 pt-6 dark:text-gray-100 text-gray-600">Share the link with people you want to give access to</p>
                        <p class="text-xs font-semibold py-4 leading-4 text-indigo-700 uppercase">Your link</p>

                        <div class="">
                            <div class="flex items-center h-full justify-between text-sm font-semibold leading-6 bg-gray-100 rounded h-12 w-full">
                                <div>
                                    <p class="pl-4 text-base font-medium leading-tight dark:text-gray-100 text-gray-800">https://youlink.com</p>
                                </div>
                                <div class="bg-indigo-700 p-3.5 rounded-r cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.6667 7.5H9.16667C8.24619 7.5 7.5 8.24619 7.5 9.16667V16.6667C7.5 17.5871 8.24619 18.3333 9.16667 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6667V9.16667C18.3333 8.24619 17.5871 7.5 16.6667 7.5Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.16675 12.5H3.33341C2.89139 12.5 2.46746 12.3244 2.1549 12.0119C1.84234 11.6993 1.66675 11.2754 1.66675 10.8334V3.33335C1.66675 2.89133 1.84234 2.4674 2.1549 2.15484C2.46746 1.84228 2.89139 1.66669 3.33341 1.66669H10.8334C11.2754 1.66669 11.6994 1.84228 12.0119 2.15484C12.3245 2.4674 12.5001 2.89133 12.5001 3.33335V4.16669" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 dark:text-gray-100 text-gray-400 hover: dark:text-gray-100 text-gray-600 transition duration-150 ease-in-out" @click="modalHandler()">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center py-12" id="button">
            <button class="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm" @click="modalHandler(true)">Open Modal</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    methods: {
        modalHandler(val) {
            let modal = document.getElementById("modal");
            if (val) {
                this.fadeIn(modal);
            } else {
                this.fadeOut(modal);
            }
        },
        fadeOut(el) {
            el.style.opacity = 1;
            (function fade() {
                if ((el.style.opacity -= 0.1) < 0) {
                    el.style.display = "none";
                } else {
                    requestAnimationFrame(fade);
                }
            })();
        },
        fadeIn(el, display) {
            el.style.opacity = 0;
            el.style.display = display || "flex";
            (function fade() {
                let val = parseFloat(el.style.opacity);
                if (!((val += 0.2) > 1)) {
                    el.style.opacity = val;
                    requestAnimationFrame(fade);
                }
            })();
        },
    },
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
