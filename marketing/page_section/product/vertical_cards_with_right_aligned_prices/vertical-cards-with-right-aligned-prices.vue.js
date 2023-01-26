<template>
    <!-- Remove my-8 -->
    <div class="mx-auto my-8 container lg:px-0 px-8" v-for="(index, product) in products" v-bind:key="index">
        <!-- card -->
        <a href="javascript:void(0)">
            <div class="w-full border md:flex">
                <div class="md:h-40 h-96 md:w-48">
                    <img src="https://cdn.tuk.dev/assets/templates/classified/search.png" class="h-full w-full" />
                </div>
                <div class="px-4 py-2 w-full">
                    <div class="lg:flex items-center justify-between">
                        <div class="flex items-center lg:justify-left justify-between lg:mt-0 mt-4">
                            <h2 class="text-lg font-semibold">
                                {{ product.name }}
                            </h2>
                            <p class="text-xs text-gray-600 pl-5">4 days ago</p>
                        </div>
                        <div class="flex items-center lg:justify-left justify-between lg:mt-0 mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                            </svg>
                        </div>
                    </div>
                    <p class="text-xs text-gray-600 mt-2">
                        {{ product.desc }}
                    </p>
                    <div class="mt-4 md:flex hidden">
                        <div>
                            <p class="text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                        </div>
                        <div class="pl-2">
                            <p class="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                        </div>
                        <div class="pl-2">
                            <p class="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                        </div>
                        <div class="pl-2">
                            <p class="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                        </div>
                    </div>
                    <div class="mt-4 md:hidden">
                        <div class="flex">
                            <div class="mx-2">
                                <p class="text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                            </div>
                            <div class="mx-2">
                                <p class="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                            </div>
                        </div>
                        <div class="flex mt-4">
                            <div class="mx-2">
                                <p class="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                            </div>
                            <div class="mx-2">
                                <p class="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-between pt-4">
                        <h2 class="text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                        <h3 class="text-indigo-700 text-xl font-semibold">$350</h3>
                    </div>
                </div>
            </div>
        </a>
        <!-- card end -->
    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            products: [
                {
                    name: "iphone XS",
                    desc: "The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos",
                },
                {
                    name: "iphone XS",
                    desc: "The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos",
                },
            ],
        };
    },
};
</script>
