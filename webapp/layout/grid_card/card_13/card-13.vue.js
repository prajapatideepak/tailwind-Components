<template>
    <div class="bg-gray-300 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4">
            <div class="md:w-96 rounded shadow-lg p-5 bg-indigo-700">
                <p class="text-2xl font-bold leading-none text-white pt-7">{{ title }}</p>
                <p class="pt-4 text-sm leading-5 text-white">{{ sub }}</p>
                <p class="pt-7 text-xs leading-3 text-indigo-200">{{ location }}</p>
                <p class="text-xs leading-3 text-white pt-2">{{ time }}</p>
                <div class="flex items-center w-full justify-end relative">
                    <div class="w-16 h-16 flex items-center justify-center bg-white rounded-full opacity-50"></div>
                    <div class="w-12 h-12 mr-2 flex items-center cursor-pointer justify-center bg-white rounded-full absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <line x1="15" y1="16" x2="19" y2="12" />
                            <line x1="15" y1="8" x2="19" y2="12" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            title: "Startup Culture",
            sub: "How technology catapulted innovation in two decades",
            location: "San Diego, California",
            time: "11:30 PM, 12th February 2021",
        };
    },
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
