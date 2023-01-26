<template>
    <div class="max-w-sm rounded overflow-hidden relative bg-white p-6 dark:bg-gray-800">
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <p class="mr-3 text-xl font-semibold leading-5 text-gray-800 dark:text-gray-100">Responses</p>
                <div class="w-7 h-7 flex items-center justify-center bg-red-500 rounded-full">
                    <p class="text-base font-semibold leading-5 md:leading-10 text-white">8</p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 md:w-auto dark:text-gray-100 cursor-pointer icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="6 9 12 15 18 9" />
            </svg>
        </div>
        <div class="bg-gray-100 dark:bg-gray-900 rounded w-full mt-6 p-6 mb-5">
            <div class="flex items-start justify-between">
                <div class="sm:flex items-center">
                    <div class="relative">
                        <img class="w-12" src="https://i.ibb.co/WnVgd7B/DP.png" alt="profile" srcset="" />
                    </div>
                    <div class="sm:ml-4 mt-4 sm:mt-0">
                        <p class="text-xl font-semibold leading-4 text-gray-800 dark:text-gray-100">Drake Connor</p>
                        <p class="text-sm leading-6 pt-1 text-gray-500 dark:text-gray-400">Oct 12 • 5 mins read</p>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 text-gray-600 w-8 sm:w-auto cursor-pointer icon icon-tabler icon-tabler-heart" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
            </div>
            <p class="text-sm leading-5 text-gray-500 dark:text-gray-400 mt-4">Cras tempor orci et ullamcorper pellentesque. Ut sollicitudin ultrices lectus. Sed bibendum felis sed metus congue, vitae congue eros rhoncus. Proin mattis nec odio et pharetra. Mauris ut odio finibus, mollis elit ac, fermentum lacus. Quisque eleifend ac nunc id tristique.</p>
        </div>
        <div class="flex items-stretch justify-between">
            <button class="focus:outline-none w-20 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer text-indigo-700 dark:text-indigo-600 icon icon-tabler icon-tabler-arrow-narrow-left" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="5" y1="12" x2="9" y2="16" />
                    <line x1="5" y1="12" x2="9" y2="8" />
                </svg>
            </button>
            <button class="focus:outline-none dark:bg-indigo-600 dark:hover:bg-indigo-700 bg-indigo-700 hover:bg-indigo-600 ml-6 rounded text-sm font-semibold leading-4 text-center text-white py-4 px-2 sm:px-16">+7 Responses</button>
        </div>
    </div>
</template>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
