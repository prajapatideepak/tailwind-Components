<template>
    <div class="h-full w-full bg-gray-100 py-16">
        <div class="container mx-auto">
            <div class="w-11/12 md:w-2/6 mx-auto">
                <p class="text-xs pb-1 text-gray-500 font-bold">Your Progress</p>
                <div class="flex justify-between items-center pb-1">
                    <p class="text-sm text-indigo-700 font-bold">63% Complete</p>
                    <p class="text-xs font-bold text-gray-500">ETA: 3 mins</p>
                </div>
                <div class="h-1 bg-gray-200 rounded">
                    <div class="w-7/12 bg-indigo-700 h-1 rounded relative"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ThinWithProgressAndEta",
};
</script>
