<template>
    <div class="bg-gray-300 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4">
            <div class="bg-white md:w-96 rounded px-5 pt-4 pb-5 w-full shadow">
                <p class="text-lg font-bold leading-none text-gray-800">Recent Chats</p>
                <div v-for="(chat, idx) in chats" v-bind:key="idx" class="mt-6 flex items-center">
                    <img class="w-10 h-10 rounded-full shadow" :src="chat.img" alt="profile" />
                    <div class="flex justify-between w-full">
                        <div class="ml-2">
                            <div class="flex items-center">
                                <p class="text-sm font-medium leading-4 text-gray-800">{{ chat.name }}</p>
                                <div v-if="chat.status === 'online'" class="w-1 h-1 bg-green-500 rounded-full ml-2"></div>
                            </div>
                            <p class="w-48 text-xs leading-3 text-gray-600 mt-1">{{ chat.chat }}</p>
                        </div>
                        <p class="text-xs leading-4 text-right text-gray-600">{{ chat.time }}</p>
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
            chats: [
                {
                    name: "James Hart",
                    img: "https://i.ibb.co/D1J3VjY/card-1.png",
                    chat: "Let’s catchup sometime later?",
                    time: "04:43 PM",
                    status: "online",
                },
                {
                    name: "Ronald McDonald",
                    img: "https://i.ibb.co/cLGvfw0/card-2.png",
                    chat: "How’d the meeting go?",
                    time: "04:43 PM",
                    status: "offline",
                },
                {
                    name: "Amanda Mathison",
                    img: "https://i.ibb.co/GPkPY8S/card-3.png",
                    chat: "Done with the workspace setting",
                    time: "02:30 PM",
                    status: "offline",
                },
                {
                    name: "Josh Cleveland",
                    img: "https://i.ibb.co/XChV95g/card-4.png",
                    chat: "Lets’s discuss in an hour",
                    time: "01:03 PM",
                    status: "online",
                },
                {
                    name: "Randall Frank",
                    img: "https://i.ibb.co/C2PRFyK/card-5.png",
                    chat: "Client call in 10 mins, be ready",
                    time: "09:40 AM",
                    status: "offline",
                },
            ],
        };
    },
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
