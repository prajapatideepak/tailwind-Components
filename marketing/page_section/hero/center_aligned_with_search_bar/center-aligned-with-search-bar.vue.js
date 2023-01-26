<template>
    <div class="mx-auto container">
        <!-- Navigation Start -->
        <nav class="py-12 hidden lg:block">
            <div class="flex items-center justify-between w-full">
                <div class="flex items-center">
                    <div>
                        <a href="./index.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <g id="Logo">
                                    <circle id="Oval" cx="20" cy="20" r="20" fill="url(#paint0_linear)" />
                                    <path id="L" d="M26.8838 30L27.1299 24.4355H26.542C25.6807 28.3184 24.4775 29.0156 20.8545 29.1523L18.1064 29.2617V12.7871C18.1064 11.4609 18.3662 11.1191 20.3623 10.9004V10.2578H13.0752V10.9004C14.9072 11.1191 15.1533 11.3926 15.1533 12.6094V27.6484C15.1533 28.8516 14.9072 29.1387 13.0752 29.3574V30H26.8838Z" fill="white" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#667EEA" />
                                        <stop offset="1" stop-color="#4C51BF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                    </div>
                    <div class="flex items-center pl-10 cursor-pointer">
                        <p class="text-sm text-indigo-700 font-semibold">View all categories</p>
                        <div class="pl-2 mt-1 text-indigo-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="12" height="12" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center">
                    <div>
                        <ul class="cursor-pointer flex items-center text-sm text-gray-600 font-semibold">
                            <li>Mobile phones</li>
                            <li class="pl-10 cursor-pointer">Automobiles</li>
                            <li class="pl-10 cursor-pointer">Houses</li>
                            <li class="pl-10 cursor-pointer">Electronics</li>
                            <li class="pl-10 cursor-pointer">Tablets</li>
                        </ul>
                    </div>
                    <div class="pl-12 flex items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path d="M31.5 21L27 16.5H16.5C15.6716 16.5 15 15.8284 15 15V6C15 5.17157 15.6716 4.5 16.5 4.5H30C30.8284 4.5 31.5 5.17157 31.5 6V21" stroke="#718096" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 22.5V25.5C21 26.3284 20.3284 27 19.5 27H9L4.5 31.5V16.5C4.5 15.6716 5.17157 15 6 15H9" stroke="#718096" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="pl-10 flex items-center">
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-cover rounded-md mr-3">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png" alt="" class="rounded-full h-full w-full overflow-hidden shadow" />
                                </div>
                                <div class="flex relative items-center">
                                    <ul class="cursor-pointer p-2 w-40 border-r bg-white absolute rounded z-40 right-0 shadow mt-16 hidden top-0">
                                        <li class="cursor-pointer text-text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <div class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <circle cx="12" cy="7" r="4" />
                                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                </svg>
                                                <span class="ml-2">My Profile</span>
                                            </div>
                                        </li>
                                        <li class="cursor-pointer text-text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="12" r="9" />
                                                <line x1="12" y1="17" x2="12" y2="17.01" />
                                                <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                            </svg>
                                            <span class="ml-2">Help Center</span>
                                        </li>
                                        <li class="cursor-pointer text-text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                            <span class="ml-2">Account Settings</span>
                                        </li>
                                    </ul>
                                    <div class="cursor-pointer text-text-gray-600">
                                        <svg id="upIcon2" xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                        <svg id="downIcon2" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pl-10">
                            <button class="py-3 px-8 bg-indigo-700 hover:bg-indigo-800 text-white text-sm focus:outline-none">Post Ad</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Mobile Responsive -->
        <nav class="lg:hidden">
            <div class="flex py-2 justify-between items-center px-4 py-6">
                <a href="./index.html">
                    <img src="https://cdn.tuk.dev/assets/templates/classified/Logo2.png" />
                </a>
                <div class="visible flex items-center">
                    <ul id="list" class="hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-20 md:mt-20">
                        <li class="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                            <a href="javascript:void(0)">
                                <span class="ml-2 font-bold">Mobile Phones</span>
                            </a>
                        </li>
                        <li class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                            <a href="javascript:void(0)">
                                <span class="ml-2 font-bold">Automobiles</span>
                            </a>
                        </li>
                        <li class="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                            <a href="javascript:void(0)">
                                <span class="ml-2 font-bold">Houses</span>
                            </a>
                        </li>
                        <li class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                            <a href="javascript:void(0)">
                                <span class="ml-2 font-bold">Electronics</span>
                            </a>
                        </li>
                        <li class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                            <a href="javascript:void(0)">
                                <span class="ml-2 font-bold">Tablets</span>
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
        <!-- Mobile Responsive -->
        <!-- Navigation End -->
        <div class="flex w-full flex-col items-center justif-center py-24 lg:px-0 px-4">
            <h1 class="lg:text-6xl text-3xl text-indigo-700 font-bold text-center">What are you looking for</h1>
            <h2 class="lg:text-2xl text-lg text-gray-600 pt-6 text-centerlg:mb-0 mb-4">Mobile phones, laptops, automobiles, houses and much more.</h2>
            <div class="flex flex-col w-full sm:w-1/2 md:ml-4 mt-3 md:mt-10">
                <div class="relative w-full">
                    <div class="lg:absolute bg-gray-100 lg:border-r lg:border-t lg:border-b lg:mb-0 mb-4 lg:py-5 py-3 border-gray-800 cursor-pointer text-gray-700 flex items-center justify-between pr-3 right-0 h-full">
                        <span class="lg:text-2xl text-lg leading-tight tracking-normal px-4">All Categories</span>
                        <span class="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
                                <path d="M1 1L9 9L17 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </div>
                    <div class="absolute inset-0 lg:mt-0 mt-8 text-black flex items-center pl-6 h-full lg:py-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <circle cx="11.6667" cy="11.6667" r="8.16667" stroke="#4A5568" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M24.5 24.5L17.5 17.5" stroke="#4A5568" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <input id="search" class="w-full text-text-gray-600 focus:outline-none focus:border font-normal pl-16 pr-24 lg:py-5 py-2 flex items-center text-2xl border-black rounded border" placeholder="Search" />
                </div>
            </div>
            <div class="sm:flex justify-center items-center pt-12">
                <button class="w-full sm:w-auto py-3 px-8 bg-indigo-700 hover:bg-indigo-800 text-white lg:text-2xl text-lg mr-4 focus:outline-none">Search</button>
                <button class="w-full sm:w-auto mt-4 sm:mt-0 py-3 px-8 bg-transparent border border border-indigo-700 text-indigo-700 text-white lg:text-2xl text-lg focus:outline-none">Advance Search</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
/* Navbar */
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
