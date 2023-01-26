<template>
    <div class="bg-gray-300 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4">
            <div class="md:w-96 rounded-md shadow-lg px-5 py-4 w-full bg-white">
                <h1 class="pb-5 text-gray-800 font-bold text-lg">Recent Updates</h1>
                <div class="flex items-center">
                    <h2 class="text-2xl font-bold text-gray-800">23%</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4.16675V15.8334" stroke="#22C55E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.3333 7.50008L10 4.16675" stroke="#22C55E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.66669 7.50008L10 4.16675" stroke="#22C55E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <p class="text-xs leading-3 text-gray-600 pt-1">Increase compared to last year</p>
                <div class="flex pt-8">
                    <div class="w-1/3 flex items-center">
                        <div class="w-1 h-1 bg-indigo-500 rounded-full"></div>
                        <h1 class="text-sm text-gray-800 pl-2">Design</h1>
                    </div>
                    <div class="w-2/3 flex items-center pl-8 justify-between">
                        <p class="text-sm font-semibold text-gray-500">3,128</p>
                        <p class="text-sm text-gray-500">3,697</p>
                        <p class="text-sm text-gray-500">3,248</p>
                    </div>
                </div>
                <div class="flex pt-4">
                    <div class="w-1/3 flex items-center">
                        <div class="w-1 h-1 bg-blue-500 rounded-full"></div>
                        <h1 class="text-sm text-gray-800 pl-2">Development</h1>
                    </div>
                    <div class="w-2/3 flex items-center pl-8 justify-between">
                        <p class="text-sm font-semibold text-gray-500">3,128</p>
                        <p class="text-sm text-gray-500">3,697</p>
                        <p class="text-sm text-gray-500">3,248</p>
                    </div>
                </div>
                <div class="flex pt-4">
                    <div class="w-1/3 flex items-center">
                        <div class="w-1 h-1 bg-purple-500 rounded-full"></div>
                        <h1 class="text-sm text-gray-800 pl-2">Quality Check</h1>
                    </div>
                    <div class="w-2/3 flex items-center pl-8 justify-between">
                        <p class="text-sm font-semibold text-gray-500">3,128</p>
                        <p class="text-sm text-gray-500">3,697</p>
                        <p class="text-sm text-gray-500">3,248</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
