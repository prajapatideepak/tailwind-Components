<template>
    <div class="container mx-auto">
        <nav class="lg:hidden">
            <div class="flex py-2 justify-between items-center px-4">
                <div>
                    <img src="https://cdn.tuk.dev/assets/components/111220/Hero9/logo.png" alt="" />
                </div>
                <div class="visible flex items-center">
                    <ul id="list" class="hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16">
                        <li class="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                            <a href="javascript:void(0)">
                                <span class="ml-2 font-bold">Home</span>
                            </a>
                        </li>
                        <li class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                            <a href="javascript:void(0)">
                                <span class="ml-2 font-bold">Donations</span>
                            </a>
                        </li>
                        <li class="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                            <a hhref="javascript:void(0)">
                                <span class="ml-2 font-bold">Events</span>
                            </a>
                        </li>
                        <li class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                            <a href="javascript:void(0)">
                                <span class="ml-2 font-bold">Blog</span>
                            </a>
                        </li>
                        <li class="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                            <a href="javascript:void(0)">
                                <span class="ml-2 font-bold">About Us</span>
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
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="flex justify-center w-full px-16">
            <img src="https://i.ibb.co/5kw5jQn/VOTE-GELLER.png" alt="long text" srcset="" />
        </div>
        <div class="lg:flex lg:mt-6 xl:-mt-6">
            <div class="w-full lg:w-2/5 bg-indigo-800 py-10 px-6 xl:py-24 xl:px-8 text-white">
                <h1 class="text-3xl font-semibold lg:w-10/12">Get to know Senator Jessica Geller</h1>
                <p class="py-6 text-lg">Transparency and honesty seem to matter more than ever in America</p>
                <div class="flex items-center">
                    <button class="hover:opacity-90 py-3 px-4 bg-red-600 text-sm mr-3 uppercase focus:outline-none">Who is Jessica?</button>
                    <button class="hover:opacity-90 py-3 px-4 bg-indigo-700 text-sm uppercase focus:outline-none">The Plan</button>
                </div>
            </div>
            <div class="w-full lg:w-3/5 relative">
                <img class="lg:absolute inset-0 h-full w-full object-cover object-center" src="https://cdn.tuk.dev/assets/components/111220/Hero9/header.png" alt="Senator" />
            </div>
        </div>
        <nav>
            <div class="px-4 xl:px-0 hidden lg:flex items-center justify-between w-full py-5 border-b border-gray-200">
                <div class="flex items-center">
                    <div>
                        <div>
                            <img src="https://cdn.tuk.dev/assets/components/111220/Hero9/logo.png" alt="" />
                        </div>
                    </div>
                    <div class="flex items-center pl-6">
                        <div class="text-sm font-medium cursor-pointer text-red-600">
                            <a href="javascript:void(0)">Home</a>
                        </div>
                        <div class="text-sm font-normal cursor-pointer text-indigo-900 pl-8">
                            <a href="javascript:void(0)">Donations</a>
                        </div>
                        <div class="text-sm font-normal cursor-pointer text-indigo-900 pl-8">
                            <a href="javascript:void(0)">Events</a>
                        </div>
                        <div class="text-sm font-normal cursor-pointer text-indigo-900 pl-8">
                            <a href="javascript:void(0)">Blog</a>
                        </div>
                        <div class="text-sm font-normal cursor-pointer text-indigo-900 pl-8">
                            <a href="javascript:void(0)">About Us</a>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between w-1/5 xl:w-1/6">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <circle cx="11.6667" cy="11.6667" r="8.16667" stroke="#3C366B" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></circle>
                            <path d="M24.5 24.5L17.5 17.5" stroke="#3C366B" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <div class="pr-2">
                        <button class="hover:opacity-90 py-3 px-4 bg-red-600 text-sm uppercase text-white focus:outline-none">Donate Now</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "LeftAlignedWithMultipleCtasWithImageAndMenu",
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

<style>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
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
