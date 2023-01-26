<template>
    <div class="bg-gray-200 dark:bg-gray-900 min-h-screen">
        <div class="flex items-center justify-center w-full h-full py-8 px-4">
            <div class="w-80 bg-white dark:bg-gray-800 rounded py-6">
                <p class="text-xl font-semibold leading-5 text-gray-900 dark:text-gray-100 px-8">Visits by Device</p>
                <hr class="w-full border-gray-200 mt-4 mb-8" />
                <div class="flex items-center justify-between px-8">
                    <div class="flex items-center">
                        <svg class="text-gray-500 dark:text-gray-400 icon icon-tabler icon-tabler-device-mobile" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="7" y="4" width="10" height="16" rx="1" />
                            <line x1="11" y1="5" x2="13" y2="5" />
                            <line x1="12" y1="17" x2="12" y2="17.01" />
                        </svg>
                        <p class="text-base font-medium leading-4 text-gray-500 dark:text-gray-400 pl-1">Mobile</p>
                    </div>
                    <p class="text-xl font-semibold leading-5 text-gray-900 dark:text-gray-100">62%</p>
                </div>
                <div class="mt-6 flex items-center justify-between px-8">
                    <div class="flex items-center">
                        <svg class="text-gray-500 dark:text-gray-400 icon icon-tabler icon-tabler-device-laptop" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="3" y1="19" x2="21" y2="19" />
                            <rect x="5" y="6" width="14" height="10" rx="1" />
                        </svg>
                        <p class="text-base font-medium leading-4 text-gray-500 dark:text-gray-400 pl-1">Laptop</p>
                    </div>
                    <p class="text-xl font-semibold leading-5 text-gray-900 dark:text-gray-100">20%</p>
                </div>
                <div class="mt-6 flex items-center justify-between px-8">
                    <div class="flex items-center">
                        <svg class="text-gray-500 dark:text-gray-400 icon icon-tabler icon-tabler-device-tablet" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="5" y="3" width="14" height="18" rx="1" />
                            <circle cx="12" cy="17" r="1" />
                        </svg>
                        <p class="text-base font-medium leading-4 text-gray-500 dark:text-gray-400 pl-1">Tablet</p>
                    </div>
                    <p class="text-xl font-semibold leading-5 text-gray-900 dark:text-gray-100">13%</p>
                </div>
                <div class="mt-6 flex items-center justify-between px-8">
                    <div class="flex items-center">
                        <svg class="text-gray-500 dark:text-gray-400 icon icon-tabler icon-tabler-devices" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="13" y="8" width="8" height="12" rx="1" />
                            <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
                            <line x1="16" y1="9" x2="18" y2="9" />
                        </svg>
                        <p class="text-base font-medium leading-4 text-gray-500 dark:text-gray-400 pl-1">Others</p>
                    </div>
                    <p class="text-xl font-semibold leading-5 text-gray-900 dark:text-gray-100">02%</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
