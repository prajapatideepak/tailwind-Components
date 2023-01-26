<template>
    <div class="bg-gray-200 dark:bg-gray-900 flex items-center justify-center" style="font-family: 'Lato', sans-serif">
        <div class="flex md:flex-row flex-col items-center py-8 px-4">
            <!-- Code block starts -->
            <div class="flex flex-col">
                <label for="city" class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
                    >City
                    <span class="text-xs text-gray-600 dark:text-gray-400 italic font-normal">- Optional</span>
                </label>
                <input id="city" class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Placeholder" />
            </div>
            <!-- Code block ends -->
        </div>
    </div>
</template>

<script>
export default {
    name: "InputWithLabelHelpText",
};
</script>
