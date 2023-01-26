<template>
    <div class="bg-gray-300 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4">
            <div class="md:w-96 rounded shadow-lg py-4 px-5 bg-white w-full">
                <h2 class="text-xs leading-3 text-gray-600">{{ day }}</h2>
                <h1 class="text-sm font-bold leading-3 pt-1 text-gray-800">{{ date }}</h1>
                <div class="pt-6">
                    <div v-for="(todo, idx) in todos" v-bind:key="idx" class="flex items-center justify-between pt-3">
                        <div class="flex items-center">
                            <div v-bind:class="todo.bg" class="w-1 h-4 rounded-md"></div>
                            <p class="opacity-50 text-xs leading-3 text-gray-800 pl-2">{{ todo.title }}</p>
                        </div>
                        <div class="flex items-center">
                            <p class="opacity-50 text-xs leading-3 text-right text-gray-600 pr-2">0{{ todo.time }}</p>
                            <div class="bg-white border rounded-sm border-gray-400 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                <input v-bind:checked="todo.checked === 'true'" type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                <div class="check-icon hidden bg-blue-500 text-white rounded-sm">
                                    <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </div>
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
        return {
            day: "Wednesday",
            date: "12 January 2021",
            todos: [
                {
                    title: "Make payment for spotify",
                    time: "9:30 AM",
                    checked: "true",
                    bg: "bg-purple-500",
                },
                {
                    title: "Pick up the kids",
                    time: "12:30 PM",
                    checked: "false",
                    bg: "bg-pink-500",
                },
                {
                    title: "Grocery shopping",
                    time: "1:30 PM",
                    checked: "false",
                    bg: "bg-blue-500",
                },
                {
                    title: "Call Michael",
                    time: "4:30 PM",
                    checked: "false",
                    bg: "bg-yellow-500",
                },
                {
                    title: "Pick up dinner",
                    time: "8:30 PM",
                    checked: "false",
                    bg: "bg-red-500",
                },
            ],
        };
    },
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
.checkbox:checked + .check-icon {
    display: flex;
}
</style>
