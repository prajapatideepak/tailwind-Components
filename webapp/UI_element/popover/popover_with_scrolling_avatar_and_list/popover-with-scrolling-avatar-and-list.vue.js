<template>
    <div class="pb-32 bg-gray-300 flex flex-col items-center">
        <div class="h-40"></div>
        <div class="container mx-auto px-3 lg:px-24">
            <div class="relative">
                <p class="text-gray-800 cursor-pointer pb-20" @click="showPopover()">Popover</p>
                <!-- Code block starts -->
                <div id="popover" class="transition duration-150 ease-in-out -mt-20 absolute top-0 left-0 ml-20 w-full sm:w-1/2">
                    <div class="w-full bg-white rounded shadow-2xl">
                        <div class="bg-gray-200 flex items-center justify-between rounded-t py-4 px-4 xl:px-8">
                            <div class="flex items-center">
                                <div class="mr-4 w-8 h-8 rounded shadow">
                                    <img class="w-full h-full overflow-hidden object-cover object-center rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/popovers/p_4.png" alt="avatar" />
                                </div>
                                <p class="text-base text-gray-800 font-normal leading-normal tracking-normal">The New York Times</p>
                            </div>
                            <div class="flex items-center">
                                <svg class="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"></path>
                                </svg>
                                <svg class="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"></path>
                                </svg>
                                <svg class="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"></path>
                                </svg>
                                <svg class="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"></path>
                                </svg>
                                <svg class="w-4 text-gray-300 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="relative w-full h-full px-4 xl:px-8 py-5">
                            <svg class="absolute -ml-5 mt-4 left-0 top-0" width="30px" height="30px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                        <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                            <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                                <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5"></polygon>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <div class="flex items-center mb-4">
                                <p class="text-xs text-gray-800 font-normal">26 articles</p>
                                <p class="w-1 h-1 bg-gray-500 rounded-full mx-2"></p>
                                <p class="text-xs text-gray-800 font-normal">06 writers</p>
                                <p class="w-1 h-1 bg-gray-500 rounded-full mx-2"></p>
                                <p class="text-xs text-gray-800 font-normal">64 mins</p>
                            </div>
                            <p class="text-gray-600 font-normal text-xs mb-4">The responsibility to communicate that information rests on the shoulders of the marketing and sales teams. Typically, marketing has a predominant role at the beginning of a potential sale.</p>
                            <p class="text-xs font-normal text-gray-800">Contribution in</p>
                            <div class="flex items-center justify-between mt-1">
                                <p class="text-indigo-700 text-xs">Leadership &nbsp;|&nbsp; Business &nbsp;|&nbsp; Family &nbsp;|&nbsp; Lifestyle</p>
                                <span class="text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <line x1="15" y1="16" x2="19" y2="12" />
                                        <line x1="15" y1="8" x2="19" y2="12" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Code block ends -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PopoverWithScrollingAvatartAndList",
    methods: {
        showPopover() {
            document.getElementById("popover").classList.toggle("opacity-0");
        },
    },
};
</script>
