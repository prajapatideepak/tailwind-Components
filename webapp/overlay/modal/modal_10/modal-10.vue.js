<template>
    <div class="dark:bg-black bg-gray-300 min-h-screen">
        <div class="py-12 dark:bg-black bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
            <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <div class="flex items-center justify-center py-8 px-4">
                    <div class="relative md:w-80 rounded shadow-lg p-6 dark:bg-gray-800 bg-white">
                        <h1 class="text-lg font-bold leading-none dark:text-gray-100 text-gray-800">We need your consent</h1>
                        <p class="text-sm leading-5 pt-6 dark:text-gray-100 text-gray-600">by accepting this invitation you are creating a new account.</p>
                        <div class="flex items-center justify-between mt-4 border-gray-200 border rounded-lg px-4 py-4 cursor-pointer">
                            <p class="text-base font-medium leading-4 dark:text-gray-100 text-gray-800">Terms and conditions</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17.2634 10.1459C17.6201 9.72434 17.5675 9.09336 17.1459 8.73661C16.7243 8.37987 16.0934 8.43245 15.7366 8.85406L10.9386 14.5244L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L10.2929 16.7071C10.4906 16.9049 10.7621 17.0108 11.0416 16.9991C11.321 16.9875 11.5827 16.8594 11.7634 16.6459L17.2634 10.1459Z" fill="#5FD754" />
                            </svg>
                        </div>
                        <div class="flex items-center justify-between mt-4 border-gray-200 border rounded-lg px-4 py-4 cursor-pointer">
                            <p class="text-base font-medium leading-4 dark:text-gray-100 text-gray-800">Privacy policy</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4B5563" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </div>
                        <div class="py-6 flex items-center">
                            <div class="dark:bg-gray-800 bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input type="radio" name="radio" @click="terms = !terms" class="checkbox appearance-none focus:outline-none rounded-full border-gray-400 absolute cursor-pointer w-full h-full border checked:border-none" />
                                <div class="check-icon hidden border border-indigo-700 flex items-center justify-center rounded-full w-full h-full z-1">
                                    <div class="bg-indigo-700 rounded-full w-2 h-2"></div>
                                </div>
                            </div>
                            <p class="ml-3 text-base font-medium leading-4 dark:text-gray-100 text-gray-800">I read the documentation</p>
                        </div>
                        <button :disabled="terms" class="text-sm font-semibold leading-6 bg-indigo-700 rounded py-2 w-full hover:opacity-90 focus:outline-none text-white">Accept</button>

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
    data() {
        return {
            terms: true,
        };
    },
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
.checkbox:checked {
    border: none;
}

.checkbox:checked + .check-icon {
    display: flex;
}
</style>
