<template>
    <div class="dark:bg-black bg-gray-300 min-h-screen">
        <div class="py-12 dark:bg-black bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
            <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <div class="flex items-center justify-center py-8 px-4">
                    <div class="relative md:w-80 rounded shadow-lg p-6 dark:bg-gray-800 bg-white">
                        <img alt="home-screen" src="https://i.ibb.co/K06bzQB/Frame-140.png" class="w-full h-full mt-2" />
                        <h1 class="text-lg font-bold leading-none dark:text-gray-100 text-gray-800 pt-4">Add to home screen</h1>
                        <p class="pt-3 text-sm leading-5 dark:text-gray-100 text-gray-600">Create a shortcut on your home screen to easily access all your data.</p>
                        <div class="flex items-center justify-center pt-6">
                            <div class="w-1.5 h-1.5 bg-indigo-700 rounded-full mr-2"></div>
                            <div class="w-1.5 h-1.5 dark:bg-black bg-gray-300 rounded-full mr-2"></div>
                            <div class="w-1.5 h-1.5 dark:bg-black bg-gray-300 rounded-full mr-2"></div>
                            <div class="w-1.5 h-1.5 dark:bg-black bg-gray-300 rounded-full"></div>
                        </div>
                        <div class="flex items-center justify-between pt-8">
                            <div class="flex items-center cursor-pointer hover:opacity-90">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4B5563" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                                <span class="pl-1 text-sm font-semibold leading-6 dark:text-gray-100 text-gray-600">Back</span>
                            </div>
                            <button class="text-sm font-semibold leading-6 bg-indigo-700 rounded py-2 px-12 hover:opacity-90 focus:outline-none text-white">Next</button>
                        </div>
                        <div class="cursor-pointer absolute top-0 right-0 mt-2 mr-2 dark:text-gray-100 text-gray-400 hover: dark:text-gray-100 text-gray-600 transition duration-150 ease-in-out" @click="modalHandler()">
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
