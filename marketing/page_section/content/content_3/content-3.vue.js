<template>
    <body class="bg-gray-100 py-8" style="height: 500px">
        <section>
            <div class="lg:hidden px-6 xl:px-0 overflow-y-hidden">
                <div class="container mx-auto">
                    <div class="flex flex-col lg:items-center justify-center w-full py-1">
                        <h1 class="font-semibold text-gray-800 text-3xl md:text-4xl">Updated line</h1>
                    </div>
                    <div class="w-full flex flex-col items-end justify-center">
                        <p tabindex="0" class="text-lg text-gray-100"><span id="current"></span><span class="text-gray-800"></span></p>
                        <div class="my-4 flex items-center">
                            <button aria-controls="slide" aria-label="slide back" id="prev" @click="showPrev" class="rounded-full hover:bg-gray-200 focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none cursor-pointer mr-4 p-2 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <line x1="5" y1="12" x2="9" y2="16" />
                                    <line x1="5" y1="12" x2="9" y2="8" />
                                </svg>
                            </button>
                            <button aria-controls="slide" @click="showNext" aria-label="slide forward" id="next" class="rounded-full hover:bg-gray-200 focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none cursor-pointer mr-4 p-2 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <line x1="15" y1="16" x2="19" y2="12" />
                                    <line x1="15" y1="8" x2="19" y2="12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <VueSlickCarousel :arrows="false" ref="carousel">
                        <div class="w-full px-5">
                            <div class="w-full flex justify-center items-center flex-col rounded-md">
                                <div class="relative bg1 bg-cover w-full flex justify-center flex-col rounded-md">
                                    <h1 class="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">Who doesn’t love a good swim</h1>

                                    <button class="focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-5">
                            <div class="w-full flex justify-center items-center flex-col rounded-md">
                                <div class="relative bg2 bg-cover w-full flex justify-center flex-col rounded-md">
                                    <h1 class="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">A truly immersive experience like never before</h1>

                                    <button class="focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-5">
                            <div class="w-full flex justify-center items-center flex-col rounded-md">
                                <div class="relative bg3 bg-cover w-full flex justify-center flex-col rounded-md">
                                    <h1 class="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">Maybe a walk on the beach could help</h1>

                                    <button class="focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </VueSlickCarousel>
                </div>
            </div>
            <div class="hidden lg:block px-6 xl:px-0">
                <div class="container mx-auto">
                    <div class="flex flex-row">
                        <div role="article" class="flex flex-col items-left justify-center w-full py-10">
                            <h1 class="font-bold text-gray-800 text-3xl md:text-5xl">Updated line</h1>
                        </div>
                        <div class="w-full flex flex-col items-end justify-end pr-24 my-3">
                            <p class="text-lg text-gray-100"><span id="current3"></span><span class="text-gray-800"></span></p>
                            <div class="my-4 flex items-center">
                                <button aria-controls="slide" aria-label="slide back" id="prev3" @click="showPrev1" class="rounded-full hover:bg-gray-200 focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none cursor-pointer mr-4 p-2 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <line x1="5" y1="12" x2="9" y2="16" />
                                        <line x1="5" y1="12" x2="9" y2="8" />
                                    </svg>
                                </button>
                                <button aria-controls="slide" aria-label="slide forward" @click="showNext1" id="next3" class="rounded-full hover:bg-gray-200 focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none cursor-pointer mr-4 p-2 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <line x1="15" y1="16" x2="19" y2="12" />
                                        <line x1="15" y1="8" x2="19" y2="12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <VueSlickCarousel :arrows="false" ref="carousel1">
                        <div class="grid grid-cols-3 gap-6">
                            <div class="flex">
                                <div class="relative bg1 bg-cover w-1/3 flex justify-center flex-col rounded-md">
                                    <h1 class="w-40 text-white font-semibold text-left text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">Who doesn’t love a good swim</h1>

                                    <button class="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="w-1/3 flex justify-center items-center flex-colrounded-md">
                                    <div class="relative bg2 bg-cover w-full flex justify-center flex-col rounded-md">
                                        <h1 class="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">A truly immersive experience like never before</h1>

                                        <button class="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="w-1/3 flex justify-center items-center flex-colrounded-md">
                                    <div class="relative bg-cover bg3 w-full flex justify-center flex-col rounded-md">
                                        <h1 class="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">Maybe a walk on the beach could help</h1>

                                        <button class="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 gap-6">
                            <div class="flex">
                                <div class="relative bg1 bg-cover w-1/3 flex justify-center flex-col rounded-md">
                                    <h1 class="w-40 text-white font-semibold text-left text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">Who doesn’t love a good swim</h1>

                                    <button class="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="w-1/3 flex justify-center items-center flex-colrounded-md">
                                    <div class="relative bg2 bg-cover w-full flex justify-center flex-col rounded-md">
                                        <h1 class="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">A truly immersive experience like never before</h1>

                                        <button class="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="w-1/3 flex justify-center items-center flex-colrounded-md">
                                    <div class="relative bg-cover bg3 w-full flex justify-center flex-col rounded-md">
                                        <h1 class="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">Maybe a walk on the beach could help</h1>

                                        <button class="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 gap-6">
                            <div class="flex">
                                <div class="relative bg1 bg-cover w-1/3 flex justify-center flex-col rounded-md">
                                    <h1 class="w-40 text-white font-semibold text-left text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">Who doesn’t love a good swim hel</h1>

                                    <button class="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="w-1/3 flex justify-center items-center flex-colrounded-md">
                                    <div class="relative bg2 bg-cover w-full flex justify-center flex-col rounded-md">
                                        <h1 class="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">A truly immersive experience like never before</h1>

                                        <button class="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="w-1/3 flex justify-center items-center flex-colrounded-md">
                                    <div class="relative bg-cover bg3 w-full flex justify-center flex-col rounded-md">
                                        <h1 class="w-40 text-white font-semibold text-lg absolute left-0 mt-7 ml-7 rounded h-64 relative">Maybe a walk on the beach could help</h1>

                                        <button class="focus:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none absolute right-10 bottom-7 bg-white rounded-full p-2 hover:opacity-75">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </VueSlickCarousel>
                </div>
            </div>
        </section>
    </body>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
    name: "MyComponent",
    components: { VueSlickCarousel },
    methods: {
        showNext() {
            this.$refs.carousel.next();
        },
        showPrev() {
            this.$refs.carousel.prev();
        },
        showNext1() {
            this.$refs.carousel1.next();
        },
        showPrev1() {
            this.$refs.carousel1.prev();
        },
    },
};
</script>

<style scoped>
.bg1 {
    background-image: url("https://i.ibb.co/93dVNbx/Rectangle-27.png");
}
.bg2 {
    background-image: url("https://i.ibb.co/M6jV7ty/Rectangle-28.png");
}
.bg3 {
    background-image: url("https://i.ibb.co/X4Y1b65/Rectangle-29.png");
}
</style>
