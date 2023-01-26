<template>
    <div class="relative py-6 lg:py-8">
        <img class="z-0 w-full h-full absolute inset-0 object-cover" :src="background" alt="bg" />
        <div class="z-10 relative container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
                <p class="flex items-center text-gray-300 text-xs">
                    <span>Portal</span>
                    <span class="mx-2">&gt;</span>
                    <span>Dashboard</span>
                    <span class="mx-2">&gt;</span>
                    <span>KPIs</span>
                </p>
                <h4 class="text-2xl font-bold leading-tight text-white">Dashboard</h4>
            </div>
            <div class="mt-6 md:mt-0">
                <button class="mr-3 bg-transparent focus:outline-none transition duration-150 ease-in-out rounded text-white hover:bg-gray-700 px-5 py-2 text-sm border border-white">Back</button>
                <button class="transition focus:outline-none duration-150 ease-in-out hover:bg-gray-200 bg-white rounded text-indigo-700 px-8 py-2 text-sm">Edit Profile</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BackgroundWithBreadcrumbs",
    data() {
        return {
            background: "https://tuk-cdn.s3.amazonaws.com/assets/webapp/common/bg_image_lite.png",
        };
    },
};
</script>
