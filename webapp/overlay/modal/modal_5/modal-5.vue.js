<template>
    <div class="dark:bg-black bg-gray-300 min-h-screen">
        <div class="py-12 dark:bg-black bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
            <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <div class="flex items-center justify-center py-8 px-4">
                    <div class="relative md:w-96 rounded shadow-lg p-6 dark:bg-gray-800 bg-white">
                        <h1 class="dark:text-gray-100 text-gray-800 font-bold text-lg">Security Code</h1>
                        <p class="pb-6 text-sm pt-4 font-normal dark:text-gray-100 text-gray-600">Code generated, copy and paste to use</p>
                        <div class="flex items-center justify-between pb-6">
                            <input disabled class="sm:w-16 w-12 focus:outline-none focus:border-indigo-700 hover:border-indigo-700 py-2.5 rounded-lg border-gray-300 border text-5xl font-semibold text-center text-indigo-700 appearance-none" value="2" />
                            <input disabled class="sm:w-16 w-12 focus:outline-none focus:border-indigo-700 hover:border-indigo-700 py-2.5 rounded-lg border-gray-300 border text-5xl font-semibold text-center text-indigo-700" value="1" />
                            <input disabled class="sm:w-16 w-12 focus:outline-none focus:border-indigo-700 hover:border-indigo-700 py-2.5 rounded-lg border-gray-300 border text-5xl font-semibold text-center text-indigo-700" value="6" />
                            <input disabled class="sm:w-16 w-12 focus:outline-none focus:border-indigo-700 hover:border-indigo-700 py-2.5 rounded-lg border-gray-300 border text-5xl font-semibold text-center text-indigo-700" value="8" />
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="py-3.5 w-full text-white focus:outline-none hover:opacity-90 rounded border text-sm font-semibold border-indigo-700 bg-indigo-700">Copy Code</button>
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
