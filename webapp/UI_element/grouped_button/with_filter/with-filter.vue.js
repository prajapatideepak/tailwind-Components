<template>
    <div class="mx-auto bg-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-center p-6">
        <!-- Code block starts -->
        <div class="flex items-start">
            <div class="flex bg-indigo-700 text-white shadow rounded">
                <button class="py-3 px-5 flex items-center justify-center text-xs focus:outline-none">Week</button>
                <button class="py-3 px-5 flex items-center justify-center text-xs focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100">Month</button>
                <button class="py-3 px-5 flex items-center justify-center text-xs focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100">Quarter</button>
            </div>
        </div>
        <!-- Code block ends -->
        <!-- Code block starts -->
        <div class="flex items-start mt-4 sm:mt-0 sm:ml-4">
            <div class="border flex bg-white text-gray-500 shadow rounded">
                <button class="py-3 px-5 flex items-center justify-center text-xs focus:outline-none">Week</button>
                <button class="py-3 px-5 flex items-center justify-center text-xs focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100">Month</button>
                <button class="py-3 px-5 flex items-center justify-center text-xs focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100">Quarter</button>
            </div>
        </div>
        <!-- Code block ends -->
    </div>
</template>

<script>
export default {
    name: "WithFilter",
};
</script>
