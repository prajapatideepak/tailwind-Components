<template>
    <div class="dark:bg-black bg-gray-300 min-h-screen">
        <div class="py-12 dark:bg-black bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
            <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <div class="flex items-center justify-center py-8 px-4">
                    <div class="relative md:w-80 w-full rounded shadow-lg p-6 dark:bg-gray-800 bg-white">
                        <h1 class="dark:text-gray-100 text-gray-800 font-bold text-lg">Move to Folder</h1>
                        <p class="pt-6 text-xs font-semibold text-indigo-700 uppercase">FOLDER</p>
                        <div>
                            <div class="relative flex items-center justify-center">
                                <select class="rounded-lg bg-gray-100 py-3.5 bg-transparent outline-none font-medium text-base px-4 text-white my-6 appearance-none relative w-full dark:text-gray-100 text-gray-800">
                                    <option class="text-base font-medium dark:text-gray-100 text-gray-800">General</option>
                                    <option class="text-base font-medium dark:text-gray-100 text-gray-800">Professional</option>
                                </select>
                                <div class="absolute right-0 mr-4 pointer-events-none">
                                    <svg aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" class="show-m-menu icon icon-tabler icon-tabler-menu" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4B5563" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="py-3.5 w-full dark:text-gray-100 text-gray-600 focus:outline-none hover:opacity-90 text-sm font-semibold border border-gray-600 rounded">Cancel</button>
                            <div class="pl-2 w-full">
                                <button class="py-3.5 w-full text-white focus:outline-none hover:opacity-90 rounded border text-sm font-semibold border-indigo-700 bg-indigo-700">Confirm</button>
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
