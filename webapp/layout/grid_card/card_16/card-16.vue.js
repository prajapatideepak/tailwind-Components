<template>
    <div class="bg-gray-300 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4">
            <div class="bg-white md:w-96 rounded px-5 py-4 shadow w-full">
                <p class="text-lg font-bold leading-none text-gray-800">Latest Posts</p>
                <div v-for="(post, idx) in posts" v-bind:key="idx" class="mt-4">
                    <div class="flex justify-between">
                        <p class="text-sm font-medium leading-5 text-gray-800 w-9/12">{{ post.title }}</p>
                        <p class="text-xs leading-4 text-gray-500">{{ post.time }} ago</p>
                    </div>
                    <div class="flex items-center text-xs leading-3 text-gray-500 mt-2">
                        <p>{{ post.views }} views</p>
                        <div class="w-1 h-1 bg-gray-500 rounded-full mx-1"></div>
                        <p>{{ post.reactions }} reactions</p>
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
            posts: [
                {
                    title: "Why design thinking is essential for building successful products?",
                    time: "3hrs",
                    views: "3,281",
                    reactions: "250",
                },
                {
                    title: "How to get ahead in freelance with a beginner’s profile",
                    time: "9hrs",
                    views: "3,281",
                    reactions: "250",
                },
                {
                    title: "Why forming relationships and building a network is essential?",
                    time: "7hrs",
                    views: "3,281",
                    reactions: "250",
                },
                {
                    title: "What are variants and how to use them in Figma",
                    time: "7hrs",
                    views: "3,281",
                    reactions: "250",
                },
            ],
        };
    },
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
