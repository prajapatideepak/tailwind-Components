<template>
    <!-- Card is full width. Use in 12 col grid for best view. -->
    <!-- Card code block start -->
    <div class="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div class="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
            <div class="p-4 bg-indigo-700 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-discount" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="9" y1="15" x2="15" y2="9" />
                    <circle cx="9.5" cy="9.5" r=".5" />
                    <circle cx="14.5" cy="14.5" r=".5" />
                    <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
                </svg>
            </div>
            <div class="ml-6">
                <h3 class="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">2,330</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5">Avg Sales</p>
            </div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
            <div class="p-4 bg-indigo-700 rounded text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-click" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="3" y1="12" x2="6" y2="12" />
                    <line x1="12" y1="3" x2="12" y2="6" />
                    <line x1="7.8" y1="7.8" x2="5.6" y2="5.6" />
                    <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" />
                    <line x1="7.8" y1="16.2" x2="5.6" y2="18.4" />
                    <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
                </svg>
            </div>
            <div class="ml-6">
                <h3 class="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">12%</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5">Click Rate</p>
            </div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
            <div class="p-4 bg-indigo-700 rounded text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M5.5 21v-2a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4v2" />
                </svg>
            </div>
            <div class="ml-6">
                <h3 class="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">3245</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5">Subscribers</p>
            </div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center">
            <div class="p-4 bg-indigo-700 rounded text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <line x1="7" y1="15" x2="7.01" y2="15" />
                    <line x1="11" y1="15" x2="13" y2="15" />
                </svg>
            </div>
            <div class="ml-6">
                <h3 class="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">$1245</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5">Profit Earned</p>
            </div>
        </div>
    </div>
    <!-- Card code block end -->
</template>

<script>
export default {
    name: "MediumStatCardsWithIcon",
};
</script>
