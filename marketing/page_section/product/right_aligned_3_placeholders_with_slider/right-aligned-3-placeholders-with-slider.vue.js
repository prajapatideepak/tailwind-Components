<template>
    <!-- slider starts here     -->
    <!-- Fixes    -->
    <!-- Destop Slider -->
    <div class="mx-auto container relative px-4 lg:px-0 lg:mt-60 mt-10 md:block hidden">
        <div class="lg:block hidden flex absolute right-0 z-0">
            <div class="custom-design background-color"></div>
        </div>
        <div class="lg:pt-20">
            <div class="flex lg:flex-row flex-col-reverse items-center justify-between">
                <div class="flex flex-col z-20 lg:w-1/2">
                    <div class="f-f-d-s text-2xl lg:text-5xl uppercase hidden lg:block leading-normal font-bold tracking-wide text-gray-900">
                        Trending
                        <br />
                        Products
                    </div>
                    <div class="flex w-full justify-start">
                        <div class="flex lg:pt-20 lg:pt-10 lg:justify-start justify-between w-full">
                            <button class="lg:py-5 py-3 px-6 border border-black-color mr-8 focus:outline-none" id="prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                    <path d="M15 5H0.999998" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 8.96387L1 4.96387" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 0.963867L1 4.96387" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button class="py-5 px-6 border border-black-color focus:outline-none" id="next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                    <path d="M1 4.96387H15" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11 8.96387L15 4.96387" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11 0.963867L15 4.96387" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="slider lg:relative lg:w-1/3">
                    <div class="f-f-d-s text-2xl lg:text-5xl uppercase block lg:hidden leading-normal font-bold tracking-wide text-gray-900">Trending Products</div>

                    <div class="slide-ana lg:relative">
                        <div class="flex items-center justify-end lg:w-3/5 relative">
                            <div v-for="(product, idx) in products" v-bind:key="idx" class="lg:ml-12 z-20 lg:w-64 w-full">
                                <div>
                                    <img v-bind:src="product.image" alt="" class="w-full" />
                                </div>
                                <div class="text-gray-900 text-4xl font-medium f-f-l text-center py-4">
                                    {{ product.name }}
                                </div>
                                <div class="text-base f-f-l flex text-4xl justify-center text-gray-700">
                                    $
                                    {{ product.price }}
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-end lg:w-3/5 relative">
                            <div v-for="(product, idx) in products" v-bind:key="idx" class="lg:ml-12 z-20 lg:w-64 w-full">
                                <div>
                                    <img v-bind:src="product.image" alt="" class="w-full" />
                                </div>
                                <div class="text-gray-900 text-4xl font-medium f-f-l text-center py-4">
                                    {{ product.name }}
                                </div>
                                <div class="text-base f-f-l flex text-4xl justify-center text-gray-700">
                                    $
                                    {{ product.price }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Desktop Slider -->
    <!-- Mobile responsive -->
    <div class="mx-auto container relative px-4 lg:px-0 lg:mt-60 mt-10 block md:hidden">
        <div class="lg:block hidden flex absolute right-0 z-0">
            <div class="custom-design background-color"></div>
        </div>
        <div class="lg:pt-20">
            <div class="flex lg:flex-row flex-col-reverse items-center justify-between">
                <div class="flex flex-col z-20">
                    <div class="f-f-d-s text-2xl lg:text-5xl uppercase hidden lg:block leading-normal font-bold tracking-wide text-gray-900">
                        Trending
                        <br />
                        Products
                    </div>
                    <br />
                    <div class="flex w-full justify-start">
                        <div class="flex lg:pt-20 lg:pt-10 lg:justify-start justify-between w-full">
                            <button class="lg:py-5 py-3 px-6 border border-black-color mr-8 focus:outline-none" id="prev2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                    <path d="M15 5H0.999998" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 8.96387L1 4.96387" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 0.963867L1 4.96387" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button class="py-5 px-6 border border-black-color focus:outline-none" id="next2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                    <path d="M1 4.96387H15" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11 8.96387L15 4.96387" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11 0.963867L15 4.96387" stroke="#334048" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="slider2">
                    <div class="f-f-d-s text-2xl lg:text-5xl uppercase block lg:hidden leading-normal font-bold tracking-wide text-gray-900">Trending Products</div>
                    <div class="slide-ana2 mt-20">
                        <div v-for="(product, idx) in products" v-bind:key="idx" class="w-full">
                            <div>
                                <img v-bind:src="product.image" alt="" class="w-full" />
                            </div>
                            <div class="text-gray-900 lg:text-2xl text-base font-bold f-f-l flex justify-center py-4">
                                {{ product.name }}
                            </div>
                            <div class="lg:text-sm text-base f-f-l flex text-4xl justify-center text-gray-700">
                                $
                                {{ product.price }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Mobile responsive -->
    <!-- slider ends here -->
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    name: "Study Lamp",
                    image: "https://cdn.tuk.dev/assets/templates/Fabterior/section3(1).png",
                    price: "45",
                },
                {
                    name: "Flower Pot",
                    image: "https://cdn.tuk.dev/assets/templates/Fabterior/section3(2).png",
                    price: "45",
                },
                {
                    name: "Grey Chair",
                    image: "https://cdn.tuk.dev/assets/templates/Fabterior/section3(3).png",
                    price: "45",
                },
            ],
        };
    },
    mounted() {
        // Slider Mobile
        let slides2 = document.querySelectorAll(".slide-ana2>div");
        let slideSayisi2 = slides2.length;
        let prev2 = document.getElementById("prev2");
        let next2 = document.getElementById("next2");
        for (let index = 0; index < slides2.length; index++) {
            const element = slides2[index];
            element.style.transform = "translateX(" + 100 * index + "%)";
        }
        let loop2 = 0 + 1000 * slideSayisi2;

        function goNext2() {
            loop2++;
            for (let index = 0; index < slides2.length; index++) {
                const element = slides2[index];
                element.style.transform = "translateX(" + 100 * (index - (loop2 % slideSayisi2)) + "%)";
            }
        }

        function goPrev2() {
            loop2--;
            for (let index = 0; index < slides2.length; index++) {
                const element = slides2[index];
                element.style.transform = "translateX(" + 100 * (index - (loop2 % slideSayisi2)) + "%)";
            }
        }

        next2.addEventListener("click", goNext2);
        prev2.addEventListener("click", goPrev2);

        // Slider Desktop
        let slides = document.querySelectorAll(".slide-ana>div");
        let slideSayisi = slides.length;
        let prev = document.getElementById("prev");
        let next = document.getElementById("next");
        for (let index = 0; index < slides.length; index++) {
            const element = slides[index];
            element.style.transform = "translateX(" + 100 * index + "%)";
        }
        let loop = 0 + 1000 * slideSayisi;

        function goNext() {
            loop++;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
            }
        }

        function goPrev() {
            loop--;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
            }
        }

        next.addEventListener("click", goNext);
        prev.addEventListener("click", goPrev);
    },
};
</script>

<style scoped>
.custom-design {
    width: 30.313rem;
    height: 250px;
}
/* Slider css below */

.slider {
    width: 100%;
    height: 428px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}
.slider2 {
    width: 100%;
    height: 650px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}

.slide-ana,
.slide-ana2 {
    height: 100%;
}

.slide-ana > div,
.slide-ana2 > div {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 1s;
}

@media (min-width: 300px) and (max-width: 1023px) {
    .slider {
        height: 450px;
    }
}
@media (min-width: 300px) and (max-width: 1023px) {
    .slider2 {
        height: 650px;
    }
}
</style>
