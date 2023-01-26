<template>
    <nav class="w-full">
        <div class="container mx-auto px-6 flex items-center justify-between">
            <div class="flex items-center">
                <svg aria-label="Home" class="cursor-pointer w-8 sm:w-auto" id="logo" enable-background="new 0 0 300 300" height="54" viewBox="0 0 300 300" width="53" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g>
                        <path
                            fill="#FBD38D"
                            d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                        ></path>
                    </g>
                </svg>
            </div>
            <div>
                <div @click="toggleMenu(true)" class="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                    <svg aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="4" y1="8" x2="20" y2="8" />
                        <line x1="4" y1="16" x2="20" y2="16" />
                    </svg>
                </div>
                <div id="menu" class="md:block lg:block hidden">
                    <div @click="toggleMenu(false)" class="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none z-30 top-0 pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                    <ul class="flex py-8 md:flex text-3xl md:text-base flex-col md:flex-row justify-center items-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white z-20">
                        <li class="text-gray-600 hover:text-gray-800 cursor-pointer font-bold md:ml-10 pt-10 md:pt-0">
                            <a href="javascript: void(0)">Company</a>
                        </li>
                        <li class="text-gray-600 hover:text-gray-800 cursor-pointer font-bold md:ml-10 pt-10 md:pt-0">
                            <a href="javascript: void(0)">Features</a>
                        </li>
                        <li class="text-gray-600 hover:text-gray-800 cursor-pointer font-bold md:ml-10 pt-10 md:pt-0">
                            <a href="javascript: void(0)">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div class="container mx-auto flex flex-col items-center py-12 sm:py-24 overflow-hidden">
        <h1 class="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-bold leading-tight">Explore the best of illustration</h1>
        <div class="relative">
            <svg class="h-64 sm:h-auto w-full sm:w-auto sm:ml-40 sm:-mt-20" width="1202" height="630" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                    <path d="M960 559.998c1.563.369 3.128.731 4.702 1.06 55.435 11.622 127.56-10.491 124.184-78.817-1.161-23.504-12.971-46.26-31.463-60.628-10.155-7.885-21.982-13.217-33.168-19.532C995.687 385.957 975.77 364.904 960 341v218.998" fill="#28445B" />
                    <circle fill="#FBD38D" cx="889" cy="12" r="12" />
                    <circle fill="#9AE6B4" cx="637" cy="618" r="12" />
                    <path d="M968.754 94.323C943.386 54.064 890.111 49.805 843 59.5c-101.501 20.88-382.694-5.632-477.946 34.708-83.554 35.388-194.805 143.894-260.14 206.185-15.412 14.688 3.418 76.255 9.966 96.812C149.922 479.478 277.163 573.7 365.209 591c254.565 50.021 555.987-183.789 613.031-375.4 16.661-56.061 7.344-94.577-9.486-121.277z" fill="#FEEBC8" />
                    <path fill="#9AE6B4" d="M41.505 81.79L30.55 121.93.44 88.49z" />
                </g>
            </svg>
            <img class="left-0 right-0 m-auto h-56 sm:h-auto w-4/5 sm:w-auto absolute sm:mt-10 sm:ml-56 top-0" src="https://cdn.tuk.dev/assets/hero_img1.jpg" alt="Hero Image" />
        </div>
    </div>
</template>

<script>
export default {
    name: "SimpleWithImage",
    methods: {
        // Function to toggle header menu in mobile view.
        toggleMenu(flag) {
            let value = document.getElementById("menu");
            if (flag) {
                value.classList.remove("hidden");
            } else {
                value.classList.add("hidden");
            }
        },
    },
};
</script>
