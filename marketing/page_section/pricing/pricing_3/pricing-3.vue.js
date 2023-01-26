<template>
    <body>
        <div class="container mx-auto text-center py-14 md:py-20 px-4">
            <h1 class="text-2xl md:text-5xl lg:text-5xl font-semibold text-center text-gray-800">Choose the right plan for your business</h1>
            <div class="flex flex-col lg:flex-row justify-center items-strech mt-12 lg:space-x-6">
                <div class="shadow-lg rounded p-12 lg:w-5/12">
                    <div class="w-56">
                        <button aria-label="Monthly or Annually Switch." onclick="toggleIt()" class="bg-gray-200 shadow-md rounded-full flex items-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                            <div @click="toggle = false" :class="!toggle ? 'bg-white' : 'bg-gray-200'" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6" id="monthly">Monthly</div>
                            <div @click="toggle = true" :class="toggle ? 'bg-white' : 'bg-gray-200'" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6" id="annually">Annually</div>
                        </button>
                    </div>
                    <ul class="mt-16 md:mt-12">
                        <li class="flex justify-between">
                            <p class="text-base text-center text-gray-600">Unlimited products</p>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="7.625" stroke="#4338CA" stroke-width="0.75" />
                                <path d="M10.5 6L7 10L5.5 8.5" stroke="#4338CA" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </li>
                        <li class="flex justify-between mt-6">
                            <p class="text-base text-center text-gray-600">20 Pages, Galleries</p>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="7.625" stroke="#4338CA" stroke-width="0.75" />
                                <path d="M10.5 6L7 10L5.5 8.5" stroke="#4338CA" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </li>
                        <li class="flex justify-between mt-6">
                            <p class="text-base text-center text-gray-600">500 GB Bandwidth</p>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="7.625" stroke="#4338CA" stroke-width="0.75" />
                                <path d="M10.5 6L7 10L5.5 8.5" stroke="#4338CA" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </li>
                        <li class="flex justify-between mt-6">
                            <p class="text-base text-center text-gray-600">Unlimited Services</p>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="7.625" stroke="#4338CA" stroke-width="0.75" />
                                <path d="M10.5 6L7 10L5.5 8.5" stroke="#4338CA" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </li>
                        <li class="flex justify-between mt-6">
                            <p class="text-base text-center text-gray-600">Mobile Website and Site</p>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="7.625" stroke="#4338CA" stroke-width="0.75" />
                                <path d="M10.5 6L7 10L5.5 8.5" stroke="#4338CA" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </li>
                    </ul>
                </div>
                <div role="list" aria-label="Packages" class="lg:w-7/12 flex flex-col justify-between space-y-4 md:space-y-6 lg:space-y-0 mt-4 md:mt-6 lg:mt-0">
                    <div role="listitem" class="bg-white shadow-lg rounded flex justify-between items-center py-8 px-6 md:py-9 md:px-12">
                        <div class="flex items-center">
                            <div class="bg-white dark:bg-gray-100 rounded-full w-4 h-4 md:w-5 md:h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input aria-labelledby="starter" checked type="radio" name="radio" class="checkbox appearance-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                                <div class="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"></div>
                            </div>
                            <h2 id="starter" class="text-xl md:text-2xl text-gray-600 ml-4">Starter</h2>
                        </div>
                        <h3 class="font-medium text-center text-gray-600"><span class="text-2xl md:text-5xl text-gray-800">$19</span> /month</h3>
                    </div>
                    <div role="listitem" class="bg-white shadow-lg rounded flex justify-between items-center py-8 px-6 md:py-9 md:px-12">
                        <div class="flex items-center">
                            <div class="bg-white dark:bg-gray-100 rounded-full w-4 h-4 md:w-5 md:h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input aria-labelledby="premium" checked type="radio" name="radio" class="checkbox appearance-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                                <div class="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"></div>
                            </div>
                            <h2 id="premium" class="text-xl md:text-2xl text-gray-600 ml-4">Premium</h2>
                        </div>
                        <h3 class="font-medium text-center text-gray-600"><span class="text-2xl md:text-5xl text-gray-800">$29</span> /month</h3>
                    </div>
                    <div role="listitem" class="bg-white shadow-lg rounded flex justify-between items-center py-8 px-6 md:py-9 md:px-12">
                        <div class="flex items-center">
                            <div class="bg-white dark:bg-gray-100 rounded-full w-4 h-4 md:w-5 md:h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input aria-labelledby="pro" checked type="radio" name="radio" class="checkbox appearance-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                                <div class="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"></div>
                            </div>
                            <h2 id="pro" class="text-xl md:text-2xl text-gray-600 ml-4">Pro</h2>
                        </div>
                        <h3 class="font-medium text-center text-gray-600"><span class="text-2xl md:text-5xl text-gray-800">$49</span> /month</h3>
                    </div>
                </div>
            </div>
            <div class="mt-12 md:mt-10 lg:mt-12">
                <button class="px-8 py-4 bg-indigo-700 hover:bg-indigo-600 rounded text-base font-medium text-center text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">Choose Plan</button>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    name: "MyComponent",
    data() {
        return {
            toggle: false,
        };
    },
};
</script>

<style scoped>
.checkbox:checked {
    border: none;
}
.checkbox:checked + .check-icon {
    display: flex;
}
</style>
