<template>
    <div class="">
        <div @click="openSidebar(false)" class="flex items-center justify-center rounded-r-md bg-gray-800 text-gray-300 ml-0 cursor-pointer absolute inset-0 mt-10 m-auto w-8 h-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="9 6 15 12 9 18" />
            </svg>
        </div>
        <div id="sidebar" class="overflow-y-scroll lg:overflow-y-auto fixed lg:sticky h-screen lg:h-auto z-40 top-0 bg-gray-900 pt-10 w-64 lg:w-72">
            <div class="px-8">
                <div class="flex items-center justify-between">
                    <div class="w-32">
                        <img class="w-full" src="https://cdn.tuk.dev/assets/components/todos/logo.png" alt="quicklist logo" />
                    </div>
                    <div @click="openSidebar(true)" class="text-gray-700 ml-8 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <polyline points="15 6 9 12 15 18"></polyline>
                        </svg>
                    </div>
                </div>
                <ul class="my-10 flex flex-wrap">
                    <li class="w-1/2 flex justify-start mb-6">
                        <a href="javascript:void(0)" class="bg-gray-700 rounded-md text-gray-300 flex flex-col justify-center items-center w-20 h-20 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-kanban" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <line x1="4" y1="4" x2="10" y2="4"></line>
                                <line x1="14" y1="4" x2="20" y2="4"></line>
                                <rect x="4" y="8" width="6" height="12" rx="2"></rect>
                                <rect x="14" y="8" width="6" height="6" rx="2"></rect>
                            </svg>
                            <p class="mt-1 uppercase font-semibold text-xs">kanban</p>
                        </a>
                    </li>
                    <li class="w-1/2 flex justify-end mb-6">
                        <a href="javascript:void(0)" class="bg-transparent rounded-md text-gray-600 flex flex-col justify-center items-center w-20 h-20 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-inbox" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                                <path d="M4 13h3l3 3h4l3 -3h3"></path>
                            </svg>
                            <p class="mt-1 uppercase font-semibold text-xs">inbox</p>
                        </a>
                    </li>
                    <li class="w-1/2 flex justify-start mb-6">
                        <a href="javascript:void(0)" class="rounded-md bg-transparent text-gray-600 flex flex-col justify-center items-center w-20 h-20 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-notebook" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"></path>
                                <line x1="13" y1="8" x2="15" y2="8"></line>
                                <line x1="13" y1="12" x2="15" y2="12"></line>
                            </svg>
                            <p class="mt-1 uppercase font-semibold text-xs">notebook</p>
                        </a>
                    </li>
                    <li class="w-1/2 flex justify-end mb-6">
                        <a href="javascript:void(0)" class="rounded-md bg-transparent text-gray-600 flex flex-col justify-center items-center w-20 h-20 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                                <line x1="16" y1="3" x2="16" y2="7"></line>
                                <line x1="8" y1="3" x2="8" y2="7"></line>
                                <line x1="4" y1="11" x2="20" y2="11"></line>
                                <rect x="8" y="15" width="2" height="2"></rect>
                            </svg>
                            <p class="mt-1 uppercase font-semibold text-xs">calendar</p>
                        </a>
                    </li>
                    <li class="w-1/2 flex justify-start">
                        <a href="javascript:void(0)" class="rounded-md bg-transparent text-gray-600 flex flex-col justify-center items-center w-20 h-20 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"></path>
                            </svg>
                            <p class="mt-1 uppercase font-semibold text-xs">important</p>
                        </a>
                    </li>
                    <li class="w-1/2 flex justify-end">
                        <a href="javascript:void(0)" class="rounded-md bg-transparent text-gray-600 flex flex-col justify-center items-center w-20 h-20 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <polyline points="12 4 4 8 12 12 20 8 12 4"></polyline>
                                <polyline points="4 12 12 16 20 12"></polyline>
                                <polyline points="4 16 12 20 20 16"></polyline>
                            </svg>
                            <p class="mt-1 uppercase font-semibold text-xs">projects</p>
                        </a>
                    </li>
                </ul>
                <div class="flex items-center justify-between text-gray-600">
                    <h4 class="uppercase font-semibold">List</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </div>
                <ul class="text-gray-600 mt-8">
                    <li class="mb-5">Grocery Items</li>
                    <li class="mb-5">Family</li>
                    <li>Friends</li>
                </ul>
                <div class="my-20">
                    <div class="flex items-center justify-between text-gray-600">
                        <h4 class="uppercase font-semibold">Labels</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </div>
                    <ul class="text-gray-600 mt-8">
                        <li v-for="(label, idx) in labels" v-bind:key="idx" class="mb-5 flex items-center">
                            <span v-bind:class="label.theme" class="mr-2 w-2 h-2 rounded-full"></span>
                            {{ label.title }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="px-8 py-4 w-full border-t border-gray-800 flex items-center text-gray-600 uppercase text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer icon icon-tabler icon-tabler-trash" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <line x1="4" y1="7" x2="20" y2="7"></line>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                </svg>
                <p class="cursor-pointer pl-2">trash</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            labels: [
                {
                    title: "Work Related",
                    theme: "bg-indigo-600",
                },
                {
                    title: "Family",
                    theme: "bg-yellow-600",
                },
                {
                    title: "Friends",
                    theme: "bg-green-500",
                },
                {
                    title: "Grocery",
                    theme: "bg-purple-600",
                },
                {
                    title: "Utilities",
                    theme: "bg-blue-600",
                },
                {
                    title: "Rental",
                    theme: "bg-pink-600",
                },
                {
                    title: "Maintenance",
                    theme: "bg-red-600",
                },
            ],
        };
    },
    methods: {
        openSidebar(flag) {
            let sidebar = document.getElementById("sidebar");
            flag ? sidebar.classList.add("hidden") : sidebar.classList.remove("hidden");
        },
    },
};
</script>
<style scoped>
body {
    font-family: "Lato", sans-serif;
}
</style>
