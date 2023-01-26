<template>
    <div class="bg-gray-300 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4">
            <div class="bg-white md:w-96 rounded px-5 py-5 shadow w-full">
                <p class="text-lg font-bold leading-none text-gray-800">Best Sellers</p>
                <div v-for="(seller, idx) in sellers" v-bind:key="idx" class="mt-5 flex justify-between items-center">
                    <div class="flex items-center">
                        <img class="w-12 h-12 rounded-sm" v-bind:src="seller.img" v-bind:alt="seller.alt" />
                        <div class="ml-3">
                            <p class="text-sm font-semibold leading-4 text-gray-800">{{ seller.title }}</p>
                            <p class="text-xs leading-3 text-gray-600 mt-2">${{ seller.price }}/each</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-sm font-semibold leading-4 text-gray-800">${{ seller.total }}</p>
                        <p class="text-xs leading-3 text-gray-600 mt-2">{{ seller.orders }} orders</p>
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
            sellers: [
                {
                    title: "Plain White Tiger",
                    img: "https://i.ibb.co/Q8CRW4B/card-1.png",
                    alt: "white tiger",
                    price: "20",
                    total: "520",
                    orders: "124",
                },
                {
                    title: "Awesome Fresh Towels",
                    img: "https://i.ibb.co/HNgDYMB/card-2.png",
                    alt: "fresh towels",
                    price: "30",
                    total: "230",
                    orders: "42",
                },
                {
                    title: "Gorgeous Granite Hat",
                    img: "https://i.ibb.co/cxttnLp/card-3.png",
                    alt: "hat",
                    price: "54",
                    total: "123",
                    orders: "172",
                },
                {
                    title: "Awesome Cottage Cheese",
                    img: "https://i.ibb.co/qpSQtrc/card-4.png",
                    alt: "cheese",
                    price: "37",
                    total: "321",
                    orders: "32",
                },
                {
                    title: "Small Plastic Mouse",
                    img: "https://i.ibb.co/Ws0LLgv/card-5.png",
                    alt: "white tiger",
                    price: "12",
                    total: "20",
                    orders: "12",
                },
            ],
        };
    },
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
