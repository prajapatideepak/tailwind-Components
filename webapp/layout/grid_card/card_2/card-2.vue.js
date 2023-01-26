<template>
    <div class="bg-gray-300 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4">
            <div class="md:w-96 rounded-md shadow-lg py-4 px-5 w-full bg-white">
                <div class="flex items-center justify-between">
                    <h3 class="text-gray-600 text-xs leading-3">Production Status</h3>
                    <div class="flex items-center">
                        <p class="text-gray-500 text-xs leading-3">12 Jan - 18 Feb</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler cursor-pointer icon-tabler-chevron-left" width="12" height="12" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6B7280" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler cursor-pointer icon-tabler-chevron-right" width="12" height="12" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6B7280" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                    </div>
                </div>
                <h1 class="pt-2 pb-12 text-gray-800 font-bold text-lg">256 Units Produced</h1>
                <img alt="graph" src="https://i.ibb.co/2yfjTnN/gra.png" class="w-full" />
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
