<template>
    <div class="pb-56 bg-gray-300 flex flex-col items-center">
        <div class="h-40"></div>
        <div class="container mx-auto px-3 lg:px-24">
            <div class="relative">
                <p class="text-gray-800 cursor-pointer" @click="showPopover()">Popover</p>
                <!-- Code block starts -->
                <div id="popover" class="transition duration-150 ease-in-out -mt-14 absolute top-0 left-0 ml-20 w-full sm:w-1/2">
                    <div class="w-full bg-white rounded shadow-2xl">
                        <div class="relative bg-gray-200 flex items-center justify-between rounded-t py-3 px-3 xl:px-6">
                            <div class="flex items-center">
                                <svg class="absolute -ml-5 -mb-10 left-0 bottom-0" width="30px" height="30px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
                                <p class="text-sm lg:text-base text-gray-800 font-normal leading-normal tracking-normal">User Interface (UI)</p>
                            </div>
                            <p class="text-sm text-gray-600 font-normal">:design</p>
                        </div>
                        <div class="w-full h-full px-3 xl:px-6 py-5">
                            <p class="text-gray-600 font-normal text-xs w-11/12 mb-4">The responsibility to communicate that information rests on the shoulders of the marketing and sales teams.</p>
                            <p class="text-gray-600 font-normal text-xs w-11/12 mb-4">Typically, marketing has a predominant role at the beginning of a potential sale.</p>
                            <p class="text-xs font-normal text-gray-800">Similar Terms</p>
                            <p class="mt-1 text-indigo-700 text-xs">visual design &nbsp;|&nbsp; gui &nbsp;|&nbsp; user experience</p>
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
    name: "TextOnlyDefinition",
    methods: {
        showPopover() {
            document.getElementById("popover").classList.toggle("opacity-0");
        },
    },
};
</script>
