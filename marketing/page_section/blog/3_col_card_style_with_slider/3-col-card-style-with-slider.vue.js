<template>
    <section>
        <div class="lg:hidden px-6 xl:px-0">
            <div class="container mx-auto pt-16 lg:pt-40">
                <div class="flex flex-col lg:items-center justify-center w-full py-10">
                    <h1 class="font-semibold text-gray-800 text-3xl md:text-4xl">Health Tips and Tricks</h1>
                    <p class="mt-2.5 text-2xl">A Collection of guides, tips, suggestions and tricks to improve your Health</p>
                </div>
                <div class="w-full flex flex-col items-end justify-center">
                    <p class="text-lg text-indigo-700"><span id="current">01</span><span class="text-gray-800">/3</span></p>
                    <div class="my-4 flex items-center">
                        <div id="prev" class="cursor-pointer mr-4 border border-gray-300 p-2 flex items-center justify-center rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <line x1="5" y1="12" x2="9" y2="16" />
                                <line x1="5" y1="12" x2="9" y2="8" />
                            </svg>
                        </div>
                        <div id="next" class="cursor-pointer mr-4 border p-2 flex border border-indigo-700 text-indigo-700 items-center justify-center rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <line x1="15" y1="16" x2="19" y2="12" />
                                <line x1="15" y1="8" x2="19" y2="12" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between -mx-5">
                    <div class="slider">
                        <div class="slide-ana">
                            <div v-for="(article, idx) in articles" v-bind:key="idx">
                                <div class="w-full px-5">
                                    <div class="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                        <div class="rounded w-full h-64 relative">
                                            <img class="h-full w-full absolute inset-0 object-cover object-center" v-bind:src="article.image" />
                                        </div>
                                        <h2 class="text-2xl mt-4 font-semibold mb-6 text-indigo-700 text-center px-6">
                                            {{ article.title }}
                                        </h2>
                                        <div class="w-8/12 flex mt-3 items-center justify-between text-base text-gray-800">
                                            <p class="cursor-pointer">
                                                {{ article.time }}
                                                min read
                                            </p>
                                            <p class="cursor-pointer">
                                                {{ article.dept }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-12 w-full flex items-center justify-center">
                <button class="text-white hover:opacity-90 lg:text-2xl font-semibold bg-indigo-700 px-6 lg:px-12 py-3 lg:py-6 rounded">Read More</button>
            </div>
        </div>

        <div class="hidden lg:block px-6 xl:px-0">
            <div class="container mx-auto pt-16 lg:pt-40">
                <div class="flex flex-col items-center justify-center w-full py-10">
                    <h1 class="font-semibold text-gray-800 text-3xl md:text-4xl">Health Tips and Tricks</h1>
                    <p class="mt-2.5 lg:w-2/5 text-center text-2xl">A Collection of guides, tips, suggestions and tricks to improve your Health</p>
                </div>
                <div class="w-full flex flex-col items-end justify-end pr-24">
                    <p class="text-lg text-indigo-700"><span id="current3">01</span><span class="text-gray-800">/03</span></p>
                    <div class="my-4 flex items-center">
                        <div id="prev3" class="cursor-pointer mr-4 border border-gray-300 p-2 flex items-center justify-center rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <line x1="5" y1="12" x2="9" y2="16" />
                                <line x1="5" y1="12" x2="9" y2="8" />
                            </svg>
                        </div>
                        <div id="next3" class="cursor-pointer border p-2 flex border border-indigo-700 text-indigo-700 items-center justify-center rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <line x1="15" y1="16" x2="19" y2="12" />
                                <line x1="15" y1="8" x2="19" y2="12" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="slider3">
                    <div class="slide-ana3">
                        <div class="flex justify-between -mx-5">
                            <div class="w-1/3 px-5">
                                <div class="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div class="rounded w-full h-64 relative">
                                        <img class="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_1.png" />
                                    </div>
                                    <h2 class="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Qualitative research in nursing and healthcare</h2>
                                    <div class="w-8/12 flex mt-12 items-center justify-between text-base text-gray-800">
                                        <p class="cursor-pointer">05 min read</p>
                                        <p class="cursor-pointer">Healthcare</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-1/3 px-5">
                                <div class="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div class="rounded w-full h-64 relative">
                                        <img class="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_2.png" />
                                    </div>
                                    <h2 class="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Journal of the healthcare management</h2>
                                    <div class="w-8/12 flex mt-12 items-center justify-between text-base text-gray-800">
                                        <p class="cursor-pointer">03 min read</p>
                                        <p class="cursor-pointer">Management</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-1/3 px-5">
                                <div class="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div class="rounded w-full h-64 relative">
                                        <img class="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_3.png" />
                                    </div>
                                    <h2 class="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Solving covid pandemic’s mental health crisis</h2>
                                    <div class="w-8/12 flex mt-12 items-center justify-between text-base text-gray-800">
                                        <p class="cursor-pointer">02 min read</p>
                                        <p class="cursor-pointer">Corona Virus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between -mx-5">
                            <div class="w-1/3 px-5">
                                <div class="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div class="rounded w-full h-64 relative">
                                        <img class="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_1.png" />
                                    </div>
                                    <h2 class="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Qualitative research in nursing and healthcare</h2>
                                    <div class="w-8/12 flex mt-12 items-center justify-between text-base text-gray-800">
                                        <p class="cursor-pointer">05 min read</p>
                                        <p class="cursor-pointer">Healthcare</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-1/3 px-5">
                                <div class="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div class="rounded w-full h-64 relative">
                                        <img class="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_2.png" />
                                    </div>
                                    <h2 class="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Journal of the healthcare management</h2>
                                    <div class="w-8/12 flex mt-12 items-center justify-between text-base text-gray-800">
                                        <p class="cursor-pointer">03 min read</p>
                                        <p class="cursor-pointer">Management</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-1/3 px-5">
                                <div class="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div class="rounded w-full h-64 relative">
                                        <img class="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_3.png" />
                                    </div>
                                    <h2 class="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Solving covid pandemic’s mental health crisis</h2>
                                    <div class="w-8/12 flex mt-12 items-center justify-between text-base text-gray-800">
                                        <p class="cursor-pointer">02 min read</p>
                                        <p class="cursor-pointer">Corona Virus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between -mx-5">
                            <div class="w-1/3 px-5">
                                <div class="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div class="rounded w-full h-64 relative">
                                        <img class="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_1.png" />
                                    </div>
                                    <h2 class="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Qualitative research in nursing and healthcare</h2>
                                    <div class="w-8/12 flex mt-12 items-center justify-between text-base text-gray-800">
                                        <p class="cursor-pointer">05 min read</p>
                                        <p class="cursor-pointer">Healthcare</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-1/3 px-5">
                                <div class="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div class="rounded w-full h-64 relative">
                                        <img class="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_2.png" />
                                    </div>
                                    <h2 class="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Journal of the healthcare management</h2>
                                    <div class="w-8/12 flex mt-12 items-center justify-between text-base text-gray-800">
                                        <p class="cursor-pointer">03 min read</p>
                                        <p class="cursor-pointer">Management</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-1/3 px-5">
                                <div class="bg-white w-full flex justify-center items-center flex-col border border-gray-200 rounded-md pb-5">
                                    <div class="rounded w-full h-64 relative">
                                        <img class="rounded h-full w-full absolute inset-0 object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/health_3.png" />
                                    </div>
                                    <h2 class="text-2xl mt-4 font-semibold mb-6 text-indigo-700 w-8/12 text-center">Solving covid pandemic’s mental health crisis</h2>
                                    <div class="w-8/12 flex mt-12 items-center justify-between text-base text-gray-800">
                                        <p class="cursor-pointer">02 min read</p>
                                        <p class="cursor-pointer">Corona Virus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-24 w-full flex items-center justify-center">
                <button class="text-white hover:opacity-90 lg:text-2xl font-semibold bg-indigo-700 px-6 lg:px-12 py-3 lg:py-6 rounded">Read More</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Index",
    mounted() {
        // Health tips carousel mobile
        let slides = document.querySelectorAll(".slide-ana>div");
        let slideSayisi = slides.length;
        let current = 1;
        let currentSlide = document.getElementById("current");
        let prev = document.getElementById("prev");
        let next = document.getElementById("next");
        for (let index = 0; index < slides.length; index++) {
            const element = slides[index];
            element.style.transform = "translateX(" + 100 * index + "%)";
        }
        let loop = 0 + 1000 * slideSayisi;

        function goNext() {
            if (current < slideSayisi) {
                current = current + 1;
            } else {
                current = 1;
            }
            currentSlide.innerHTML = "0" + current;
            loop++;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
            }
        }

        function goPrev() {
            if (current > 1) {
                current = current - 1;
            } else {
                current = slideSayisi;
            }
            currentSlide.innerHTML = "0" + current;
            loop--;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
            }
        }

        next.addEventListener("click", goNext);
        prev.addEventListener("click", goPrev);

        let slides3 = document.querySelectorAll(".slide-ana3>div");
        let slideSayisi3 = slides3.length;
        let current3 = 1;
        let currentSlide3 = document.getElementById("current3");
        let prev3 = document.getElementById("prev3");
        let next3 = document.getElementById("next3");

        for (let index = 0; index < slides3.length; index++) {
            const element = slides3[index];
            element.style.transform = "translateX(" + 100 * index + "%)";
        }
        let loop3 = 0 + 1000 * slideSayisi3;

        function goNext3() {
            if (current3 < slideSayisi3) {
                current3 = current3 + 1;
            } else {
                current3 = 1;
            }
            currentSlide3.innerHTML = "0" + current3;
            loop3++;
            for (let index = 0; index < slides3.length; index++) {
                const element = slides3[index];
                element.style.transform = "translateX(" + 100 * (index - (loop3 % slideSayisi3)) + "%)";
            }
        }

        function goPrev3() {
            if (current3 > 1) {
                current3 = current3 - 1;
            } else {
                current3 = slideSayisi3;
            }
            currentSlide3.innerHTML = "0" + current3;
            loop3--;
            for (let index = 0; index < slides3.length; index++) {
                const element = slides3[index];
                element.style.transform = "translateX(" + 100 * (index - (loop3 % slideSayisi3)) + "%)";
            }
        }

        next3.addEventListener("click", goNext3);
        prev3.addEventListener("click", goPrev3);
    },
    data() {
        return {
            articles: [
                {
                    title: "Qualitative research in nursing and healthcare",
                    time: "05",
                    image: "https://cdn.tuk.dev/assets/templates/weCare/health_1.png",
                    dept: "Healthcare",
                },
                {
                    title: "Journal of healthcare managemeny",
                    time: "03",
                    image: "https://cdn.tuk.dev/assets/templates/weCare/health_2.png",
                    dept: "Management",
                },
                {
                    title: "Solving covid pandemic’s health crisis",
                    time: "02",
                    image: "https://cdn.tuk.dev/assets/templates/weCare/health_3.png",
                    dept: "Corona Virus",
                },
            ],
        };
    },
};
</script>

<style>
/* Slider css below */
.slider {
    width: 100%;
    height: 600px;
    padding-top: 14px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}
.slider3 {
    width: 100%;
    height: 534px;
    padding-top: 14px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}

.slide-ana,
.slide-an3 {
    height: 100%;
}

.slide-ana > div,
.slide-ana3 > div {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 1s;
}

@media (min-width: 320px) and (max-width: 1023px) {
    .slider {
        height: 450px;
    }
}
</style>
