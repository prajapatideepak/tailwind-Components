<template>
    <body>
        <div class="h-full pb-24">
            <div class="bg-indigo-900 flex flex-col items-center justify-center py-16 md:py-20 lg:py-40 px-4 md:px-0">
                <h1 class="text-2xl md:text-4xl lg:text-5xl font-semibold leading-10 text-center text-white">Our plans for your business strategies!</h1>
                <p class="text-base font-medium leading-normal text-center text-white mt-4">Try for free 7 days and get unlimited access to our investment service and management</p>
                <button id="toggleButton" aria-label="Toggle Monthly/Yearly." class="bg-gray-50 shadow rounded-full flex items-center mt-7 md:mt-9 lg:mt-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-500 focus:ring-white">
                    <div @click="toggle = false" aria-hidden="true" :class="!toggle ? 'bg-indigo-700 text-white' : 'bg-gray-50 text-gray-600'" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none rounded-full py-4 px-4 md:py-4 md:px-6 mr-1" id="monthly">Monthly</div>
                    <div @click="toggle = true" aria-hidden="true" :class="toggle ? 'bg-indigo-700 text-white' : 'bg-gray-50 text-gray-600'" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none rounded-full py-4 px-4 md:py-4 md:px-6" id="annually">Yearly</div>
                </button>
            </div>
            <div role="list" aria-label="Packages" class="bg-transparent grid grid-cols-1 lg:grid-cols-3 gap-6 container mx-auto -mt-10 md:-mt-16 lg:-mt-20 px-4 md:px-28 lg:px-0">
                <div role="listitem" class="px-10 pt-10 pb-6 bg-white rounded shadow-lg">
                    <h1 class="text-2xl font-medium leading-normal text-gray-600">Lite</h1>
                    <p class="font-semibold text-gray-800 mt-7 md:mt-8"><span class="text-5xl">$19</span>/ month</p>
                    <p class="text-base leading-normal text-gray-600 mt-6">For businesses that want to optimize sales</p>
                    <div role="list" aria-label="Facilities" class="mt-6 md:mt-8">
                        <div role="listitem" class="flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#4338CA" />
                                <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="text-base leading-none text-gray-600">All limited links</p>
                        </div>
                        <div role="listitem" class="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#4338CA" />
                                <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="text-base leading-none text-gray-600">Personal Analytics Platform</p>
                        </div>
                        <div role="listitem" class="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#4338CA" />
                                <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="text-base leading-none text-gray-600">Chat Support</p>
                        </div>
                    </div>
                    <div class="mt-10 md:mt-28 md:pt-2">
                        <button class="flex w-full items-center justify-center border rounded border-indigo-700 text-base font-medium text-indigo-700 py-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-700 hover:text-white">Choose Plan</button>
                    </div>
                </div>
                <div role="listitem" class="px-10 pt-10 pb-6 bg-indigo-700 rounded shadow-md">
                    <h1 class="text-2xl font-medium leading-normal text-white">Basic</h1>
                    <p class="font-semibold text-white mt-7 md:mt-8"><span class="text-5xl">$58</span>/ month</p>
                    <p class="text-base leading-normal text-white mt-6">For businesses that want to optimize sales</p>
                    <div role="list" aria-label="Facilities" class="mt-6 md:mt-8">
                        <div role="listitem" class="flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="white" />
                                <path d="M5.66632 7.99931L7.33299 9.66598L10.6663 6.33264" stroke="#4338CA" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="text-base leading-none text-white">All limited links</p>
                        </div>
                        <div role="listitem" class="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="white" />
                                <path d="M5.66632 7.99931L7.33299 9.66598L10.6663 6.33264" stroke="#4338CA" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="text-base leading-none text-white">Personal Analytics Platform</p>
                        </div>
                        <div role="listitem" class="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="white" />
                                <path d="M5.66632 7.99931L7.33299 9.66598L10.6663 6.33264" stroke="#4338CA" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="text-base leading-none text-white">Chat Support</p>
                        </div>
                        <div role="listitem" class="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="white" />
                                <path d="M5.66632 7.99931L7.33299 9.66598L10.6663 6.33264" stroke="#4338CA" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="text-base leading-none text-white">Optimized Tracking</p>
                        </div>
                    </div>
                    <div class="mt-12 md:mt-20">
                        <button class="flex w-full items-center justify-center rounded bg-white text-base font-medium text-indigo-700 py-4 mt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white hover:bg-indigo-600 hover:text-white">Choose Plan</button>
                    </div>
                </div>
                <div role="listitem" class="px-10 pt-10 pb-6 bg-white rounded shadow-md">
                    <h1 class="text-2xl font-medium leading-normal text-gray-600">Premium</h1>
                    <p class="font-semibold text-gray-800 mt-7 md:mt-8"><span class="text-5xl">$159</span>/ month</p>
                    <p class="text-base leading-normal text-gray-600 mt-6">For businesses that want to optimize sales</p>
                    <div role="list" aria-label="Facilities" class="mt-6 md:mt-8">
                        <div role="listitem" class="flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#4338CA" />
                                <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="text-base leading-none text-gray-600">All limited links</p>
                        </div>
                        <div role="listitem" class="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#4338CA" />
                                <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="text-base leading-none text-gray-600">Personal Analytics Platform</p>
                        </div>
                        <div role="listitem" class="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#4338CA" />
                                <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="text-base leading-none text-gray-600">Chat Support</p>
                        </div>
                        <div role="listitem" class="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#4338CA" />
                                <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="text-base leading-none text-gray-600">Optimized Tracking</p>
                        </div>
                        <div role="listitem" class="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#4338CA" />
                                <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="text-base leading-none text-gray-600">20+ users at the go</p>
                        </div>
                    </div>
                    <div class="mt-12 md:mt-10">
                        <button class="flex w-full items-center justify-center border rounded border-indigo-700 text-base font-medium text-indigo-700 py-4 mt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-700 hover:text-white">Choose Plan</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    name: "MyComponent",
    data() {
        return {
            toggle: true,
        };
    },
};
</script>
