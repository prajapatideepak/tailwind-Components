<template>
    <div class="bg-gray-100 py-10 h-full w-full">
        <div class="container mx-auto px-6 flex flex-col items-start pl-12 md:pl-0 md:items-center">
            <div class="h-0 md:h-12"></div>
            <div class="flex-col md:flex-row flex items-center md:justify-center">
                <!--Code Block for white tooltip starts-->
                <div class="relative mt-20 md:mt-0" @mouseover="showTooltip(1)" @mouseout="hideTooltip(1)">
                    <div id="tooltip1" role="tooltip" class="z-20 transition duration-150 ease-in-out bottom-0 mb-8 absolute shadow-lg pt-4 pr-2 pl-3 pb-5 bg-white text-gray-600 rounded w-40">
                        <svg class="absolute bottom-0 -mb-2" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Tooltips-" transform="translate(-84.000000, -203.000000)" fill="#FFFFFF">
                                    <g id="Group-3-Copy" transform="translate(76.000000, 145.000000)">
                                        <polygon class="shadow" id="Triangle" transform="translate(16.000000, 62.000000) rotate(-180.000000) translate(-16.000000, -62.000000) " points="16 58 24 66 8 66"></polygon>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p class="text-xs text-gray-600 leading-4">This information will be used for personalization</p>
                    </div>
                    <div class="mt-3 ml-2 cursor-pointer">
                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="12" r="9" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
                            <polyline points="11 12 12 12 12 16 13 16" />
                        </svg>
                    </div>
                </div>
                <!--Code Block for white tooltip ends-->

                <!--Code Block for indigo tooltip starts-->
                <div class="relative my-20 md:my-0 md:mx-40" @mouseover="showTooltip(2)" @mouseout="hideTooltip(2)">
                    <div id="tooltip2" role="tooltip" class="z-20 transition duration-150 ease-in-out bottom-0 mb-8 shadow-lg pt-4 pr-2 pl-3 pb-5 bg-indigo-700 text-gray-600 rounded w-40 absolute">
                        <svg class="absolute bottom-0 -mb-2" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Tooltips-" transform="translate(-84.000000, -203.000000)" fill="#4c51bf">
                                    <g id="Group-3-Copy" transform="translate(76.000000, 145.000000)">
                                        <polygon class="shadow" id="Triangle" transform="translate(16.000000, 62.000000) rotate(-180.000000) translate(-16.000000, -62.000000) " points="16 58 24 66 8 66"></polygon>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p class="text-xs text-white leading-4">This information will be used for personalization</p>
                    </div>
                    <div class="mt-3 ml-2 cursor-pointer">
                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="12" r="9" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
                            <polyline points="11 12 12 12 12 16 13 16" />
                        </svg>
                    </div>
                </div>
                <!--Code Block for indigo tooltip ends-->

                <!--Code Block for gray tooltip starts-->
                <div class="relative" @mouseover="showTooltip(3)" @mouseout="hideTooltip(3)">
                    <div id="tooltip3" role="tooltip" class="z-20 transition duration-150 ease-in-out bottom-0 mb-8 absolute shadow-lg pt-4 pr-2 pl-3 pb-5 bg-gray-800 text-gray-600 rounded w-40">
                        <svg class="absolute bottom-0 -mb-2" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Tooltips-" transform="translate(-84.000000, -203.000000)" fill="#2D3748">
                                    <g id="Group-3-Copy" transform="translate(76.000000, 145.000000)">
                                        <polygon class="shadow" id="Triangle" transform="translate(16.000000, 62.000000) rotate(-180.000000) translate(-16.000000, -62.000000) " points="16 58 24 66 8 66"></polygon>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p class="text-xs text-white leading-4">This information will be used for personalization</p>
                    </div>
                    <div class="mt-3 ml-2 cursor-pointer">
                        <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="12" r="9" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
                            <polyline points="11 12 12 12 12 16 13 16" />
                        </svg>
                    </div>
                </div>
                <!--Code Block for gray tooltip ends-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TextOnly",
    methods: {
        showTooltip(flag) {
            switch (flag) {
                case 1:
                    document.getElementById("tooltip1").classList.remove("opacity-0");
                    break;
                case 2:
                    document.getElementById("tooltip2").classList.remove("opacity-0");
                    break;
                case 3:
                    document.getElementById("tooltip3").classList.remove("opacity-0");
                    break;
            }
        },
        hideTooltip(flag) {
            switch (flag) {
                case 1:
                    document.getElementById("tooltip1").classList.add("opacity-0");
                    break;
                case 2:
                    document.getElementById("tooltip2").classList.add("opacity-0");
                    break;
                case 3:
                    document.getElementById("tooltip3").classList.add("opacity-0");
                    break;
            }
        },
    },
};
</script>
