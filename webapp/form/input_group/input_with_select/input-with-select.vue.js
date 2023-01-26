<template>
    <div class="bg-gray-200 dark:bg-gray-900 flex items-center justify-center" style="font-family: 'Lato', sans-serif">
        <div class="flex md:flex-row flex-col items-center py-8 px-4">
            <!-- Code block starts -->
            <div class="flex flex-col md:mr-16">
                <label for="price" class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">Price</label>
                <div class="relative">
                    <div class="absolute text-gray-600 dark:text-gray-400 flex items-center px-3 border-r dark:border-gray-700 h-full">
                        <span class="uppercase text-sm leading-tight tracking-normal">usd</span>
                    </div>
                    <input id="price" class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 font-normal w-64 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow" placeholder="$0.00" />
                </div>
            </div>
            <!-- Code block ends -->
            <!-- Code block starts -->
            <div class="flex flex-col md:mr-16 md:py-0 py-4">
                <label for="price1" class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">Price</label>
                <div class="relative">
                    <div class="absolute text-gray-600 dark:text-gray-400 flex items-center pl-3 border-r dark:border-gray-700 h-full pr-1">
                        <select class="uppercase text-sm leading-tight tracking-normal focus:outline-none h-8 appearance-none pr-6 z-20 relative bg-transparent">
                            <option value="usd">usd</option>
                            <option value="aus">Aus</option>
                            <option value="pak">pak</option>
                        </select>
                        <div class="mx-1 absolute right-0 z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                    </div>
                    <input id="price1" class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 font-normal w-64 h-10 flex items-center pl-20 text-sm border-gray-300 rounded border shadow" placeholder="$0.00" />
                </div>
            </div>
            <!-- Code block ends -->
            <!-- Code block starts -->
            <div class="flex flex-col md:mr-16 md:py-0 py-4">
                <label for="price2" class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">Price</label>
                <div class="relative">
                    <div class="absolute text-white flex items-center pl-3 border-r dark:border-gray-700 rounded-l h-full pr-1 bg-indigo-700">
                        <select class="uppercase text-sm leading-tight tracking-normal focus:outline-none h-8 appearance-none pr-6 z-20 relative bg-indigo-700">
                            <option value="usd">usd</option>
                            <option value="aus">Aus</option>
                            <option value="pak">pak</option>
                        </select>
                        <div class="mx-1 absolute right-0 z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                    </div>
                    <input id="price2" class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 font-normal w-64 h-10 flex items-center pl-20 text-sm border-gray-300 rounded border shadow" placeholder="$0.00" />
                </div>
            </div>
            <!-- Code block ends -->
        </div>
    </div>
</template>

<script>
export default {
    name: "InputWithSelect",
};
</script>
