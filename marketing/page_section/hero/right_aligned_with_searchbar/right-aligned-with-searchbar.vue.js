<template>
    <!-- for vue instead of using a href, vue router links will be used -->
    <!-- replace appropriate tags after installing vue-router -->
    <section>
        <div class="w-full relative px-6 xl:px-0">
            <img class="absolute w-full inset-0 h-full object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png" />
            <nav class="lg:hidden relative z-40">
                <div class="flex py-6 justify-between items-center px-4">
                    <div>
                        <img class="w-24" src="https://cdn.tuk.dev/assets/templates/weCare/logo-blue.png" alt="" />
                    </div>
                    <div class="flex items-center">
                        <ul id="list" class="hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16">
                            <li class="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <a href="javascript:void(0)">
                                    <span class="ml-2 font-bold">Products</span>
                                </a>
                            </li>
                            <li class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                                <a href="javascript:void(0)">
                                    <span class="ml-2 font-bold">Claims</span>
                                </a>
                            </li>
                            <li class="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                <a href="javascript:void(0)">
                                    <span class="ml-2 font-bold">Renewals</span>
                                </a>
                            </li>
                            <li class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                                <a href="javascript:void(0)">
                                    <span class="ml-2 font-bold">Reports</span>
                                </a>
                            </li>
                        </ul>
                        <div class="xl:hidden">
                            <svg id="open" @click="MenuHandler(true)" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" class="show-m-menu icon icon-tabler icon-tabler-menu" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <line x1="4" y1="8" x2="20" y2="8"></line>
                                <line x1="4" y1="16" x2="20" y2="16"></line>
                            </svg>
                            <div id="close" class="hidden close-m-menu" @click="MenuHandler(false)">
                                <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <nav class="hidden relative z-10 w-full lg:flex justify-between items-center p-20">
                <div class="w-1/6">
                    <a href="javascript:void(0)">
                        <img class="" src="https://cdn.tuk.dev/assets/templates/weCare/logo-blue.png" />
                    </a>
                </div>
                <div class="w-5/6">
                    <div class="flex items-center justify-end">
                        <ul class="text-gray-800 flex items-center leading-none">
                            <li>
                                <a href="javascript:void(0)">Products</a>
                            </li>
                            <li class="ml-4">
                                <a href="javascript:void(0)">Claims</a>
                            </li>
                            <li class="ml-4">
                                <a href="javascript:void(0)">Renewal</a>
                            </li>
                            <li class="ml-4">
                                <a href="javascript:void(0)">Support</a>
                            </li>
                        </ul>
                        <div class="pl-40">
                            <button class="bg-indigo-500 text-white px-6 py-2.5 font-semibold rounded focus:outline-none">Live Chat</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="pt-32 lg:flex items-center relative z-10 container mx-auto">
                <div class="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                    <img class="mx-auto" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png" />
                </div>
                <div class="w-full lg:w-1/2 h-full">
                    <p class="text-indigo-500 uppercase text-2xl mb-4">Qusique Tincidun sapien</p>
                    <h1 class="text-gray-900 text-4xl md:text-7xl mb-8">All natural ingredients</h1>
                    <p class="text-gray-800 font-regular mb-8">COMBINING SCIENCE WITH BEAUTY. L'Oreal Paris offers a wide range of skincare solutions for your beauty needs. Each of our skincare products is developed and rigorously tested with leading scientists. Indulge yourself in a luxurious and sensorial skincare experience. Cutting-edge innovations, proven by Science.</p>
                    <div class="bg-white py-4 px-4 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center shadow-lg rounded-lg">
                        <div class="sm:flex items-center py-2">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-indigo-500 icon icon-tabler icon-tabler-user" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg>
                                <p class="leading-none tracking-normal text-gray-800 ml-2.5">Doctor Name</p>
                            </div>
                            <div class="flex items-center sm:mx-4 xl:mx-14 my-6 lg:my-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-indigo-500 icon icon-tabler icon-tabler-layout-bottombar" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <rect x="4" y="4" width="16" height="16" rx="2" />
                                    <line x1="4" y1="15" x2="20" y2="15" />
                                </svg>
                                <p class="leading-none tracking-normal text-gray-800 ml-2.5">Zip code</p>
                            </div>
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-indigo-500 icon icon-tabler icon-tabler-flag" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="5" y1="5" x2="5" y2="21" />
                                    <line x1="19" y1="5" x2="19" y2="14" />
                                    <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
                                    <path d="M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
                                </svg>
                                <p class="leading-none tracking-normal text-gray-800 ml-2.5">Insurance</p>
                            </div>
                        </div>
                        <div class="text-white bg-indigo-600 mt-4 sm:mt-0 p-3 rounded w-full sm:w-auto relative">
                            <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 mr-2 sm:mr-auto sm:relative icon icon-tabler icon-tabler-search cursor-pointer" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="10" cy="10" r="7" />
                                <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                            <input class="sm:hidden border-b border-gray-300 w-full bg-transparent pr-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Index",
    methods: {
        MenuHandler(flag) {
            if (flag) {
                document.getElementById("list").classList.add("top-100");
                document.getElementById("list").classList.remove("hidden");
                document.getElementById("close").classList.remove("hidden");
                document.getElementById("open").classList.add("hidden");
            } else {
                document.getElementById("list").classList.remove("top-100");
                document.getElementById("list").classList.add("hidden");
                document.getElementById("close").classList.add("hidden");
                document.getElementById("open").classList.remove("hidden");
            }
        },
    },
};
</script>

<style scoped>
/* Top menu */
.top-100 {
    animation: slideDown 0.5s ease-in-out;
}
@keyframes slideDown {
    0% {
        top: -50%;
    }
    100% {
        top: 0;
    }
}
* {
    outline: none !important;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
}
</style>
