<template>
    <div class="min-height: 600px">
        <div class="lg:w-96 w-64 z-40 fixed top-0 bg-gray-800 shadow flex-col justify-between pb-12 transition duration-150 ease-in-out h-full" style="transform: translateX(0px)" id="mobile-nav">
            <div class="lg:px-6 px-2">
                <div class="lg:px-6 px-2 flex items-center justify-between pt-16">
                    <a href="javascript:void(0)" class="cursor-pointer">
                        <img src="https://i.ibb.co/z7zB0mg/REELS.png" class="lg:w-28 w-16" />
                    </a>
                    <div class="cursor-pointer lg:block hidden" id="cross" @click="sidebarHandler(false)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" fill="none">
                            <rect x="4.09033" y="0.0544434" width="50" height="5" rx="2.5" transform="rotate(45 4.09033 0.0544434)" fill="white" />
                            <rect x="0.554688" y="36.4097" width="50" height="5" rx="2.5" transform="rotate(-45 0.554688 36.4097)" fill="white" />
                        </svg>
                    </div>
                    <div class="cursor-pointer lg:hidden block" id="cross" @click="sidebarHandler(false)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40 40" fill="none">
                            <rect x="4.09033" y="0.0544434" width="50" height="5" rx="2.5" transform="rotate(45 4.09033 0.0544434)" fill="white" />
                            <rect x="0.554688" y="36.4097" width="50" height="5" rx="2.5" transform="rotate(-45 0.554688 36.4097)" fill="white" />
                        </svg>
                    </div>
                </div>
                <ul class="mt-36">
                    <a href="javascript:void(0)" class="cursor-pointer">
                        <li class="text-base font-bold text-white lg:py-6 py-3 lg:px-10 px-5 hover:bg-indigo-700 rounded-full">Home</li>
                    </a>
                    <a href="javascript:void(0)" class="cursor-pointer">
                        <li class="text-base font-bold text-white lg:py-6 py-3 lg:px-10 px-5 hover:bg-indigo-700 rounded-full my-6">Gallery</li>
                    </a>
                    <a href="javascript:void(0)" class="cursor-pointer">
                        <li class="text-base font-bold bg-indigo-700 lg:py-6 py-3 lg:px-10 px-5 hover:bg-indigo-700 text-white rounded-full">Contact</li>
                    </a>
                </ul>
            </div>
        </div>
        <div class="mx-auto container relative 2xl:px-0 xl:px-4 px-4 lg:block hidden">
            <div class="flex items-center pt-16 pb-16">
                <div class="pr-6">
                    <div class="cursor-pointer" id="menu" @click="sidebarHandler(true)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="31" viewBox="0 0 50 31" fill="none">
                            <rect x="50" y="31" width="50" height="5" rx="2.5" transform="rotate(180 50 31)" fill="#251F2C" />
                            <rect x="50" y="5" width="50" height="5" rx="2.5" transform="rotate(180 50 5)" fill="#251F2C" />
                            <rect x="35" y="18" width="35" height="5" rx="2.5" transform="rotate(180 35 18)" fill="#251F2C" />
                        </svg>
                    </div>
                </div>
                <a href="javascript:void(0)" class="cursor-pointer">
                    <div>
                        <img src="https://i.ibb.co/rxRwqvX/REELS.png" class="w-28" />
                    </div>
                </a>
            </div>
        </div>
        <nav class="lg:hidden">
            <div class="flex py-8 items-center px-4">
                <div class="pr-6">
                    <div class="cursor-pointer" id="menu" @click="sidebarHandler(true)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 31" fill="none">
                            <rect x="50" y="31" width="50" height="5" rx="2.5" transform="rotate(180 50 31)" fill="#251F2C" />
                            <rect x="50" y="5" width="50" height="5" rx="2.5" transform="rotate(180 50 5)" fill="#251F2C" />
                            <rect x="35" y="18" width="35" height="5" rx="2.5" transform="rotate(180 35 18)" fill="#251F2C" />
                        </svg>
                    </div>
                </div>
                <a href="javascript:void(0)">
                    <div>
                        <img src="https://i.ibb.co/rxRwqvX/REELS.png" class="w-20" />
                    </div>
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        sidebarHandler(check) {
            let sideBar = document.getElementById("mobile-nav");
            if (check) {
                sideBar.style.transform = "translateX(-0px)";
            } else {
                sideBar.style.transform = "translateX(-500px)";
            }
        },
    },
};
</script>
