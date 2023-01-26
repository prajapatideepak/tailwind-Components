<template>
    <div class="container pt-6 mx-auto">
        <div class="flex flex-wrap">
            <div class="md:w-1/5 w-full pb-6 md:pb-0 md:pr-6">
                <!-- Remove class [ h-24 ] when adding a card block -->
                <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
                <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>
            </div>
            <div class="md:w-4/5 w-full">
                <!-- Remove class [ h-24 ] when adding a card block -->
                <!-- Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border -->
                <div class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TwoxTenColGrid",
};
</script>
