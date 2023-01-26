<template>
    <div class="bg-gray-300 min-h-screen">
        <div class="flex items-center justify-center px-4 py-8">
            <div class="bg-white md:w-96 w-full rounded px-5 pt-4 pb-8 shadow">
                <div class="flex items-center justify-between">
                    <p class="text-lg font-bold leading-5 text-gray-800">Customer Tickets</p>
                    <p class="text-xs leading-3 text-right text-red-500">2.3% increase</p>
                </div>
                <div v-for="(customer, idx) in customers" v-bind:key="idx" class="flex items-end justify-between mt-6">
                    <div>
                        <p class="text-sm font-semibold leading-4 text-gray-800">{{ customer.name }}</p>
                        <div class="flex items-center text-xs leading-4 text-gray-500 mt-1.5">
                            <p>{{ customer.time }} ago</p>
                            <div class="w-1 h-1 bg-gray-200 mx-3 rounded-full"></div>
                            <p class="text-xs leading-3 text-gray-500">{{ customer.id }}</p>
                        </div>
                    </div>
                    <button class="bg-gray-100 rounded py-2 px-2 hover:bg-gray-200">
                        <p class="text-xs leading-3 text-indigo-700">Resolve</p>
                    </button>
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
            customers: [
                {
                    name: "Madisen",
                    id: "ID-12-570",
                    time: "2hrs",
                },
                {
                    name: "Tillman",
                    id: "ID-10-329",
                    time: "4hrs",
                },
                {
                    name: "Luciano",
                    id: "ID-11-120",
                    time: "7hrs",
                },
            ],
        };
    },
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
