<template>
    <div class="bg-gray-200 dark:bg-gray-900 min-h-screen">
        <div class="flex items-center justify-center w-full h-full py-8 px-4">
            <div class="w-40 bg-white dark:bg-gray-800 rounded py-4">
                <p class="text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100 text-center">Select Language</p>
                <hr class="w-full bg-gray-200 mt-3" />
                <div class="flex pl-8 mt-5">
                    <img alt="USA" src="https://i.ibb.co/YycnHbn/usa.png" class="w-5 h-5" />
                    <p class="text-sm leading-none text-gray-800 dark:text-gray-100 pl-4 pr-2">English</p>
                    <svg class="text-gray-800 dark:text-gray-100 icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                    </svg>
                </div>
                <div class="flex px-8 mt-5">
                    <img alt="chine" src="https://i.ibb.co/MMQtT0G/china.png" class="w-5 h-5" />
                    <p class="text-sm leading-none text-gray-800 dark:text-gray-100 pl-4">Chinese</p>
                </div>
                <div class="flex px-8 mt-5">
                    <img alt="greman" src="https://i.ibb.co/27c98hX/germa.png" class="w-5 h-5" />
                    <p class="text-sm leading-none text-gray-800 dark:text-gray-100 pl-4">German</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
