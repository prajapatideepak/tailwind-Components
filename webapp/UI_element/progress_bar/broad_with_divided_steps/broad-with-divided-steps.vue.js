<template>
    <div class="h-full w-full bg-gray-100 py-16">
        <div class="container mx-auto flex justify-center">
            <div class="w-11/12 md:w-2/6 mx-auto">
                <div class="flex justify-between items-center pb-1">
                    <p class="text-xs pb-1 text-gray-500 font-bold">Step 2: Setup</p>
                    <p class="text-xs font-bold text-gray-500">Total: 3 Steps</p>
                </div>
                <div class="flex items-center">
                    <div class="w-1/3 bg-indigo-700 h-2 rounded-tl rounded-bl mr-1"></div>
                    <div class="w-1/3 bg-indigo-700 h-2 mr-1"></div>
                    <div class="w-1/3 bg-gray-200 h-2 mr-1 relative">
                        <div class="absolute right-0">
                            <div class="relative bg-indigo-700 shadow-lg px-2 py-1 rounded mt-4">
                                <svg class="absolute top-0 -mt-1 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#4c51bf">
                                            <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                <polygon id="Triangle" points="20 0 28 8 12 8"></polygon>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <p class="text-white text-xs font-bold">ETA: 3 mins</p>
                            </div>
                        </div>
                        <div class="h-2 w-2/6 bg-indigo-700"></div>
                    </div>
                    <div class="w-1/3 bg-gray-200 h-2 rounded-tr rounded-br"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BroadWithDividedSteps",
};
</script>
