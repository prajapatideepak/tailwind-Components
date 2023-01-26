<template>
    <div class="flex justify-center w-full py-12 px-4">
        <div class="slider">
            <div class="slide-ana">
                <div>
                    <div class="mx-auto container px-4 py-10 lg:py-16 lg:px-16 rounded-xl bg-gradient-to-r from-red-500 to-pink-600" }>
                        <h3 style="min-height: 180px; line-height: 140%" class="lg:text-4xl font-bold leading-10 lg:tracking-tight text-center text-gray-100">&ldquo; Absolutely love this kit guys, you've done an incredible job and it's saved me countless hours in getting my V1 out Keep up the amazing work! &rdquo;</h3>
                        <div class="lg:mt-20 sm:pt-0 pt-4">
                            <h4 class="lg:text-4xl font-bold lg:font-black leading-6 lg:leading-8 text-center tracking-wide lg:tracking-normal text-white">Joe Perkins</h4>
                            <div class="text-xs lg:text-lg lg:font-semibold leading-4 text-center text-gray-200 flex items-center lg:mt-3 w-full justify-center">
                                <span>Founder</span>
                                <div class="w-1 h-1 mx-2 bg-gray-200 rounded-full"></div>
                                <span>Landscape Ventures</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mx-auto container px-4 py-10 lg:py-16 lg:px-16 rounded-xl bg-gradient-to-r from-green-500 via-blue-600 to-purple-600">
                        <h3 style="min-height: 180px; line-height: 140%" class="lg:text-4xl font-bold leading-10 lg:tracking-tight text-center text-gray-100">&ldquo; I use TUK almost daily - from quick copy-paste solutions for prototyping, to inspiration in my own designs. The prebuilt components allow for rapid prototyping, saving me hours in pixel perfect design time. Efficient, clean cut, and allround badass! &rdquo;</h3>
                        <div class="lg:mt-20 sm:pt-0 pt-4">
                            <h4 class="lg:text-4xl font-bold lg:font-black leading-6 lg:leading-8 text-center tracking-wide lg:tracking-normal text-white">Cas du Plessis</h4>
                            <div class="text-xs lg:text-lg lg:font-semibold leading-4 text-center text-gray-200 flex items-center lg:mt-3 w-full justify-center">
                                <span>Product guy and problem solver</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mx-auto container px-4 py-10 lg:py-16 lg:px-16 rounded-xl bg-gradient-to-r from-red-400 via-pink-600 to-purple-600">
                        <h3 style="min-height: 180px; line-height: 140%" class="lg:text-4xl font-bold leading-10 lg:tracking-tight text-center text-gray-100">&ldquo; I've been using TUK to completely map out entire layouts, but also as a inspiration and as a building block. Taking the ready made designs and hacking them down into what works for me. Having a template and a building block has radically cut down my time to get to where I want with my layouts! &rdquo;</h3>
                        <div class="lg:mt-20 sm:pt-0 pt-4">
                            <h4 class="lg:text-4xl font-bold lg:font-black leading-6 lg:leading-8 text-center tracking-wide lg:tracking-normal text-white">Jonathan Fager</h4>
                            <div class="text-xs lg:text-lg lg:font-semibold leading-4 text-center text-gray-200 flex items-center lg:mt-3 w-full justify-center">
                                <span>IT Product Manage</span>
                                <div class="w-1 h-1 mx-2 bg-gray-200 rounded-full"></div>
                                <span>Homebrewer</span>
                            </div>
                        </div>
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
        return {};
    },
    mounted() {
        this.loadSlide();
    },
    methods: {
        loadSlide() {
            let slides = document.querySelectorAll(".slide-ana>div");
            let slideSayisi = slides.length;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX(" + 200 * index + "%)";
            }
            let loop = 0 + 1000 * slideSayisi;

            loop++;
            for (let index = 0; index < slides.length; index++) {
                setTimeout(() => {
                    for (let index = 0; index < slides.length; index++) {
                        setTimeout(() => {
                            const element = slides[index];
                            element.style.transform = "translateX(" + 200 * (index - (loop % slideSayisi)) + "%)";
                        }, 1000);
                    }
                }, 1000);
            }
        },
    },
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
.slider {
    width: 100%;
    height: 542px;
    padding-top: 14px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}
.slide-ana {
    height: 100%;
}
.slide-ana > div {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 1s;
}
@media (min-width: 400px) and (max-width: 500px) {
    .slider {
        height: 272px;
    }
}
@media (min-width: 320px) and (max-width: 391px) {
    .slider {
        height: 400px;
    }
}
@media (min-width: 392px) and (max-width: 598px) {
    .slider {
        height: 348px;
    }
}
@media (min-width: 599px) and (max-width: 1023px) {
    .slider {
        height: 380px;
    }
}
</style>
