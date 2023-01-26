<template>
    <!-- Code block starts -->
    <div class="py-6 lg:py-8">
        <div class="container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
                <p class="flex items-center text-indigo-700 text-xs">
                    <span>Portal</span>
                    <span class="mx-2">&gt;</span>
                    <span>Dashboard</span>
                    <span class="mx-2">&gt;</span>
                    <span>KPIs</span>
                </p>
                <h4 class="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">Dashboard</h4>
            </div>
            <div class="mt-6 md:mt-0">
                <button class="mr-3 bg-gray-200 dark:bg-gray-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 text-indigo-700 dark:hover:bg-gray-600 dark:text-indigo-600 px-5 py-2 text-sm">Back</button>
                <button class="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Edit Profile</button>
            </div>
        </div>
    </div>
    <!-- Code block ends -->
</template>

<script>
export default {
    name: "SimpleWithBreadcrumbs",
};
</script>
