<template>
    <div class="bg-gray-800 py-6 lg:py-8">
        <div class="container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
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
                <button class="mr-3 bg-transparent focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-700 text-white px-5 py-2 text-sm border border-white">Back</button>
                <button class="transition focus:outline-none duration-150 ease-in-out hover:bg-gray-200 bg-white rounded text-indigo-700 px-8 py-2 text-sm">Edit Profile</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlackWithBreadcrumbs",
};
</script>
