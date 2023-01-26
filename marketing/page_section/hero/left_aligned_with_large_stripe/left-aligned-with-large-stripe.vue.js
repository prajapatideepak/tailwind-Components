<template>
    <div class="relative pb-24 lg:pb-96">
        <img loading="lazy" src="https://i.ibb.co/wQqNrCZ/Rectangle-47.png" class="absolute right-0 z-0 h-full w-3/5 lg:block hidden" />
        <img loading="lazy" src="https://i.ibb.co/wQqNrCZ/Rectangle-47.png" class="absolute right-0 z-0 lg:h-96 lg:hidden block" />
        <div class="">
            <!-- Navigation -->
            <!-- Desktop -->
            <nav class="mx-auto container relative z-10">
                <div class="lg:flex hidden items-center justify-between py-12 xl:px-0 px-4">
                    <a href="javascript:void(0)">
                        <img loading="lazy" src="https://i.ibb.co/6sZ76Pj/foodies.png" class="w-44" alt="logo" />
                    </a>
                    <ul class="flex leading-loose">
                        <a href="javascript:void(0)">
                            <li class="text-2xl leading-8 mr-10 text-indigo-700 relative font-normal cursor-pointer hover:text-indigo-700">
                                Home
                                <hr class="border-4 border-indigo-700 bg-indigo-700 w-10 absolute right-0" />
                            </li>
                        </a>
                        <a href="javascript:void(0)">
                            <li class="text-2xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer hover:text-indigo-700">Menu</li>
                        </a>
                        <a href="javascript:void(0)">
                            <li class="text-2xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer hover:text-indigo-700">About</li>
                        </a>
                        <a href="javascript:void(0)">
                            <li class="text-2xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer hover:text-indigo-700">Contact</li>
                        </a>

                        <a href="javascript:void(0)">
                            <li class="text-2xl leading-8 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer hover:text-white">Reservation</li>
                        </a>
                    </ul>
                </div>
            </nav>
            <!-- Desktop -->
            <!-- Mobile -->
            <nav class="lg:hidden z-40 relative">
                <div class="flex py-4 justify-between items-center px-4">
                    <div>
                        <img loading="lazy" src="https://i.ibb.co/6sZ76Pj/foodies.png" alt="logo" class="w-24" />
                    </div>
                    <div class="visible flex items-center">
                        <ul id="list" class="hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-12 md:mt-16">
                            <li class="flex cursor-pointer hover:text-indigo-700 text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2">
                                <a href="javascript:void(0)">
                                    <span class="ml-2 font-bold">Home</span>
                                </a>
                            </li>
                            <li class="flex flex-col cursor-pointer hover:text-indigo-700 text-gray-600 text-sm leading-3 tracking-normal py-2 justify-center">
                                <a href="javascript:void(0)">
                                    <span class="ml-2 font-bold">Menu</span>
                                </a>
                            </li>
                            <li class="flex cursor-pointer hover:text-indigo-700 text-gray-600 text-sm leading-3 tracking-normal py-2 items-center focus:text-indigo-700 focus:outline-none">
                                <a href="javascript:void(0)">
                                    <span class="ml-2 font-bold">About</span>
                                </a>
                            </li>
                            <li class="flex flex-col cursor-pointer hover:text-indigo-700 text-gray-600 text-sm leading-3 tracking-normal py-2 justify-center">
                                <a href="javascript:void(0)">
                                    <span class="ml-2 font-bold">Contact</span>
                                </a>
                            </li>
                            <li class="flex flex-col cursor-pointer hover:text-indigo-700 text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 justify-center">
                                <a href="javascript:void(0)">
                                    <span class="ml-2 font-bold">Reservation</span>
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
            <!-- Mobile -->
            <!-- Navigation -->
            <!-- Hero -->
            <div class="mx-auto container relative z-20 lg:px-0 px-4">
                <div class="flex lg:flex-row flex-col-reverse items-center justify-between lg:mt-24">
                    <div class="lg:w-1/2 lg:pt-0 pt-8">
                        <h1 class="lg:text-6xl text-3xl leading-8 text-gray-800 border-l-8 border-indigo-700 lg:pl-12 pl-2 xl:mt-0 mt-8">
                            Craving for<br />
                            <span class="2xl:text-8xl xl:text-7xl text-4xl font-bold"> Healthy Food? </span>
                        </h1>

                        <h1 class="lg:text-2xl text-lg text-gray-800 lg:leading-8 leading-6 mt-6 border-l-8 border-indigo-700 lg:pl-12 pl-2 py-2">Here is what you always need. View our food collection and order yummy and healthy food within minutes.</h1>
                        <div class="sm:flex items-center justify-center mt-12">
                            <a href="javascript:void(0)"> <button class="w-full sm:w-auto xl:py-5 py-2 xl:px-16 px-6 bg-indigo-700 2xl:text-3xl lg:text-xl text-base font-semibold leading-loose text-white focus:outline-none hover:bg-indigo-600 border-2 border-indigo-700 rounded-xl mr-10">View Menu</button></a>
                            <a href="javascript:void(0)">
                                <button class="w-full sm:w-auto mt-4 sm:mt-0 xl:py-5 py-2 xl:px-16 px-6 border-indigo-700 2xl:text-3xl lg:text-xl text-base font-semibold leading-loose text-indigo-700 focus:outline-none border-2 rounded-xl hover:bg-indigo-700 hover:text-white">Book A Table</button>
                            </a>
                        </div>
                        <div class="2xl:mt-24 mt-12 items-center 2xl:pl-16 xl:pl-16 lg:pl-12 md:pl-0 sm:pl-0 pl-16 md:flex hidden">
                            <a href="javascript:void(0)" class="cursor-pointer">
                                <div class="w-12 h-12 bg-white flex items-center justify-center shadow-lg hover:shadow-xl rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 20 32" fill="white">
                                        <path d="M0.666664 12.6667V19.3334H5.66666V31.0001H12.3333V19.3334H17.3333L19 12.6667H12.3333V9.33339C12.3333 8.89137 12.5089 8.46744 12.8215 8.15488C13.134 7.84232 13.558 7.66673 14 7.66673H19V1.00006H14C11.7899 1.00006 9.67024 1.87803 8.10744 3.44084C6.54464 5.00364 5.66666 7.12326 5.66666 9.33339V12.6667H0.666664Z" stroke="#0F0F0F" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                            </a>
                            <a href="javascript:void(0)" class="cursor-pointer"
                                ><div class="w-12 h-12 bg-white mx-6 flex items-center justify-center shadow-lg hover:shadow-xl rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="28" viewBox="0 0 36 28" fill="white">
                                        <path
                                            d="M34.6667 0.683417C33 1.50008 31.3667 1.83175 29.6667 2.33342C27.7983 0.225083 25.0283 0.108417 22.3667 1.10508C19.705 2.10175 17.9617 4.53842 18 7.33342V9.00008C12.5917 9.13842 7.775 6.67508 4.66667 2.33342C4.66667 2.33342 -2.30333 14.7218 11.3333 20.6668C8.21333 22.7451 5.10167 24.1468 1.33333 24.0001C6.84667 27.0051 12.855 28.0384 18.0567 26.5284C24.0233 24.7951 28.9267 20.3234 30.8083 13.6251C31.3697 11.5879 31.6484 9.48318 31.6367 7.37008C31.6333 6.95508 34.1533 2.75008 34.6667 0.68175V0.683417Z"
                                            stroke="#0F0F0F"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg></div
                            ></a>
                            <a class="cursor-pointer" href="javascript:void(0)">
                                <div class="w-12 h-12 bg-white shadow-lg hover:shadow-xl rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="38" height="38" viewBox="0 0 24 24" stroke-width="0.75" stroke="#0F0F0F" fill="white" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                                        <circle cx="12" cy="12" r="3"></circle>
                                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div class="flex mt-12 items-center justify-center md:hidden">
                            <a href="javascript:void(0)" class="cursor-pointer">
                                <div class="w-12 h-12 bg-white flex items-center justify-center shadow-lg hover:shadow-xl rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 20 32" fill="white">
                                        <path d="M0.666664 12.6667V19.3334H5.66666V31.0001H12.3333V19.3334H17.3333L19 12.6667H12.3333V9.33339C12.3333 8.89137 12.5089 8.46744 12.8215 8.15488C13.134 7.84232 13.558 7.66673 14 7.66673H19V1.00006H14C11.7899 1.00006 9.67024 1.87803 8.10744 3.44084C6.54464 5.00364 5.66666 7.12326 5.66666 9.33339V12.6667H0.666664Z" stroke="#0F0F0F" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                            </a>
                            <a href="javascript:void(0)" class="cursor-pointer"
                                ><div class="w-12 h-12 bg-white mx-6 flex items-center justify-center shadow-lg hover:shadow-xl rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="28" viewBox="0 0 36 28" fill="white">
                                        <path
                                            d="M34.6667 0.683417C33 1.50008 31.3667 1.83175 29.6667 2.33342C27.7983 0.225083 25.0283 0.108417 22.3667 1.10508C19.705 2.10175 17.9617 4.53842 18 7.33342V9.00008C12.5917 9.13842 7.775 6.67508 4.66667 2.33342C4.66667 2.33342 -2.30333 14.7218 11.3333 20.6668C8.21333 22.7451 5.10167 24.1468 1.33333 24.0001C6.84667 27.0051 12.855 28.0384 18.0567 26.5284C24.0233 24.7951 28.9267 20.3234 30.8083 13.6251C31.3697 11.5879 31.6484 9.48318 31.6367 7.37008C31.6333 6.95508 34.1533 2.75008 34.6667 0.68175V0.683417Z"
                                            stroke="#0F0F0F"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg></div
                            ></a>
                            <a class="cursor-pointer" href="javascript:void(0)">
                                <div class="w-12 h-12 bg-white shadow-lg hover:shadow-xl rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="38" height="38" viewBox="0 0 24 24" stroke-width="0.75" stroke="#0F0F0F" fill="white" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                                        <circle cx="12" cy="12" r="3"></circle>
                                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="lg:w-1/2 height-main-hero xl:block hidden">
                        <img loading="lazy" src="https://i.ibb.co/qRq3XKm/hero1.png" class="w-full" />
                    </div>
                    <div class="xl:w-1/2 xl:hidden block">
                        <img loading="lazy" src="https://i.ibb.co/qRq3XKm/hero1.png" class="object-cover" />
                    </div>
                </div>
            </div>
            <!-- Hero -->
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
