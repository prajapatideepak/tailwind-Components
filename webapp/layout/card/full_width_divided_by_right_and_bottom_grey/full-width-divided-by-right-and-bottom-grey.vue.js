<template>
    <div class="flex items-center justify-between w-full">
        <div class="w-full rounded h-full bg-white dark:bg-gray-800 shadow">
            <div class="flex flex-col lg:flex-row w-full items-center">
                <div class="w-full lg:w-2/3 h-64 rounded-l"></div>
                <div class="w-full lg:w-1/3 h-24 lg:h-64 border-t lg:border-t-0 lg:border-l dark:border-gray-500 lg:rounded-r bg-gray-100 dark:bg-gray-700"></div>
            </div>
            <div class="w-full h-16 lg:h-24 bg-gray-200 dark:bg-gray-800 border-t border-gray-400 dark:border-gray-500 rounded-b"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "FullWidthDividedByRightAndBottomGrey",
};
</script>
