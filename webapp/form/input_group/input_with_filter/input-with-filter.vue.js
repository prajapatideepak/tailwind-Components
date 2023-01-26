<template>
    <div class="bg-gray-200 dark:bg-gray-900 flex items-center justify-center" style="font-family: 'Lato', sans-serif; min-height: 200px">
        <div class="flex md:flex-row flex-col items-center py-8 px-4">
            <!-- Code block starts -->
            <dh-component>
                <div class="flex flex-col">
                    <label for="search" class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">Search</label>
                    <div class="relative">
                        <div class="absolute text-gray-600 dark:text-gray-400 dark:border-gray-700 flex items-center pr-3 right-0 border-l h-full cursor-pointer">
                            <div class="pl-2 pr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-filter" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" />
                                </svg>
                            </div>
                            <span class="text-sm leading-tight tracking-normal">Filter</span>
                        </div>
                        <div class="absolute text-gray-600 dark:text-gray-400 flex items-center pl-3 h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="10" cy="10" r="7" />
                                <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                        </div>
                        <input id="search" class="text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 focus:outline-none focus:border focus:border-indigo-700 font-normal pr-20 sm:pr-32 h-10 flex items-center pl-10 text-sm border-gray-300 dark:border-gray-700 rounded border shadow" placeholder="Buy brand or product" />
                    </div>
                </div>
            </dh-component>
            <!-- Code block ends -->
        </div>
    </div>
</template>

<script>
export default {
    name: "InputWithFilter",
};
</script>
