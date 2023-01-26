<template>
    <div class="bg-gray-300 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4">
            <div class="md:w-96 rounded shadow-lg p-5 bg-white w-full">
                <h1 class="text-lg font-bold text-gray-800">Product Usage</h1>
                <div class="pt-5 flex items-center justify-between">
                    <div class="flex items-center">
                        <p class="text-sm leading-none text-gray-800">Country</p>
                    </div>
                    <div class="flex items-center">
                        <p class="text-xs leading-3 text-right text-gray-800 pr-4 uppercase">Visits</p>
                        <p class="text-xs leading-3 text-right text-gray-800 uppercase">Bounce</p>
                    </div>
                </div>
                <div v-for="(country, idx) in countries" v-bind:key="idx" class="pt-5 flex items-center justify-between">
                    <div class="flex items-center">
                        <img v-bind:alt="country.alt" v-bind:src="country.img" class="w-5 h-5" />
                        <p class="text-sm leading-none text-gray-800 pl-2">{{ country.name }}</p>
                    </div>
                    <div class="flex items-center">
                        <p class="text-xs leading-3 text-right text-gray-800 pr-10">{{ country.visits }}</p>
                        <p class="text-xs leading-3 text-right text-gray-800">{{ country.bounce }}%</p>
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
        return {
            countries: [
                {
                    name: "China",
                    visits: "2500",
                    bounce: "35",
                    img: "https://i.ibb.co/MMQtT0G/china.png",
                    alt: "chine",
                },
                {
                    name: "Germany",
                    visits: "2500",
                    bounce: "35",
                    img: "https://i.ibb.co/27c98hX/germa.png",
                    alt: "german",
                },
                {
                    name: "Lebnon",
                    visits: "2500",
                    bounce: "35",
                    img: "https://i.ibb.co/hBj1rT9/lebnon.png",
                    alt: "lebnon",
                },
                {
                    name: "USA",
                    visits: "2500",
                    bounce: "35",
                    img: "https://i.ibb.co/YycnHbn/usa.png",
                    alt: "usa",
                },
            ],
        };
    },
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
