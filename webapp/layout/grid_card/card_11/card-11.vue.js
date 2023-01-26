<template>
    <div class="bg-gray-300 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4">
            <div class="md:w-96 rounded shadow-lg py-4 px-5 bg-white">
                <div class="flex items-start justify-between">
                    <div class="flex items-center mb-4 lg:mb-0 mr-10">
                        <div class="w-14 h-14 bg-cover rounded-md mr-3">
                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png" alt="" class="rounded-full h-full w-full overflow-hidden shadow" />
                        </div>
                        <div>
                            <p class="text-sm font-bold leading-4 text-gray-800">{{ name }}</p>
                            <p class="text-xs leading-3 text-gray-500 pt-2">{{ title }}</p>
                        </div>
                    </div>
                    <div class="cursor-pointer relative" @click="dropdownHandler($event)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A1A1AA" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="5" cy="12" r="1" />
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="19" cy="12" r="1" />
                        </svg>
                        <ul class="bg-white shadow rounded z-40 py-1 w-32 -ml-24 left-0 mt-8 -ml-4 absolute hidden top-0">
                            <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Landing Pages</li>
                            <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Templates</li>
                            <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Components</li>
                        </ul>
                    </div>
                </div>
                <p class="pt-4 text-xs leading-4 text-gray-600">{{ description }}</p>
                <p class="text-xs font-medium leading-3 pt-5 text-indigo-700">CONNECTIONS</p>
                <div class="flex items-center pt-2 pb-2.5">
                    <div v-for="(connection, idx) in connections" v-bind:key="idx" class="w-6 h-6 mr-1 shadow rounded-full">
                        <img alt="img-1" v-bind:src="connection.img" class="w-full h-full object-cover object-center rounded-full" />
                    </div>
                </div>
                <div class="flex items-end justify-end">
                    <button class="text-xs font-medium leading-3 text-white py-3 px-4 rounded bg-indigo-700 focus:outline-none hover:opacity-90">Send a message</button>
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
            name: "Steve Doe",
            title: "Sales Representative",
            description: "Your Payment was successful. You can now use our services. Check the action below for more details. Thank you",
            connections: [
                {
                    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
                },
                {
                    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
                },
                {
                    img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80",
                },
                {
                    img: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80",
                },
            ],
        };
    },
    methods: {
        dropdownHandler(event) {
            let single = event.currentTarget.getElementsByTagName("ul")[0];
            single.classList.toggle("hidden");
        },
    },
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
